import React, { useState, useEffect } from 'react';
import './Project.css';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from '../../components/button/Button';

// Sample data as fallback
const SAMPLE_REPOS = [{
  node: {
    id: 'sample1',
    nameWithOwner: 'Madhu9393/Portfolio',
    description: 'My personal portfolio website',
    url: 'https://github.com/Madhu9393/masterPortfolio',
    stargazers: { totalCount: 0 },
    forkCount: 0,
    primaryLanguage: { name: 'JavaScript', color: '#f1e05a' }
  }
}];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      try {
        // Try to load the portfolio config
        const { openSource = {}, greeting = {} } = await import('../../portfolio');
        const config = {
          token: openSource.githubConvertedToken || '',
          username: openSource.githubUserName || 'Madhu9393',
          profile: greeting.githubProfile || 'https://github.com/Madhu9393'
        };
        
        if (!config.token) throw new Error('GitHub token not configured');
        
        // Fetch from GitHub API
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${atob(config.token)}`
          },
          body: JSON.stringify({
            query: `{
              user(login: "${config.username}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      id
                      nameWithOwner
                      description
                      url
                      stargazers { totalCount }
                      forkCount
                      primaryLanguage { name color }
                    }
                  }
                }
              }
            }`
          })
        });
        
        const result = await response.json();
        if (isMounted) {
          if (result.errors) throw new Error(result.errors[0].message);
          const items = result?.data?.user?.pinnedItems?.nodes || [];
          setRepos(items.map(node => ({ node })));
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error loading repositories:', err);
          setError(err.message);
          setRepos(SAMPLE_REPOS);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repos.map((item, index) => (
          <GithubRepoCard 
            key={item.node?.id || `repo-${index}`} 
            repo={item} 
          />
        ))}
      </div>
      <Button
        text="More Projects"
        className="project-button"
        href="https://github.com/Madhu9393"
        newTab={true}
      />
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <p>Showing sample projects. Configure your GitHub token to show your repositories.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
