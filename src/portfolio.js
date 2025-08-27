/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Perapu Madhu's Portfolio",
  description:
    "B.Tech CSE (AI-ML) student passionate about AI, Machine Learning, and Cybersecurity. Skilled in developing intelligent systems and securing digital infrastructure.",
  og: {
    title: "Perapu Madhu Portfolio",
    type: "website",
    url: "https://github.com/Madhu9393",
  },
};

//Home Page
// Open Source Projects
const openSource = {
  githubConvertedToken: "", // Add your GitHub token here (base64 encoded)
  githubUserName: "Madhu9393", // Your GitHub username
  showGithubProfile: "true", // Set to true to display GitHub profile
};

const greeting = {
  title: "Perapu Madhu",
  logo_name: "PerapuMadhu",
  nickname: "madhu_ai",
  subTitle:
    "B.Tech CSE (AI-ML) student with expertise in AI, Machine Learning, and Cybersecurity. Passionate about building intelligent systems and securing digital infrastructure.",
  resumeLink: "/images/doc/PerapuMadhu_CV.pdf", // Path to resume PDF
  portfolio_repository: "https://github.com/Madhu9393/masterPortfolio",
  githubProfile: "https://github.com/Madhu9393",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Madhu9393",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717"
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/madhuperapu21cs002402",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5"
  },
 
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in developing and deploying ML models for real-world applications",
        "⚡ Proficient in Python, TensorFlow, PyTorch, and Scikit-learn",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
      
       
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      
       
      ],
    },
    {
      title: "Cybersecurity",
      fileName: "CyberSecurityImg",
      skills: [
        "⚡ Experience in VAPT, Network Security, and Security Operations",
        "⚡ Proficient with tools like Nmap, Burp Suite, OWASP ZAP, and Wireshark",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        
        
       
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        
       
    
       
        
      ]
    }
  ]
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Sir Padampat Singhania University ",
      subtitle: "B.Tech in Computer Science & Engineering with specialization in AI & ML",
      alt_name: "SPSU",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Specialized in Artificial Intelligence and Machine Learning with a strong foundation in Computer Science",
        "⚡ Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Cloud Computing, Cybersecurity",
        
      ],
      website_link: "https://spsu.ac.in/",
    },
    {
      title: "Sri Chaitanya Junior College",
      subtitle: "Class 12th (CBSE Board)",
      
      alt_name: "Sri Chaitanya Junior College",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Stream: Science with Computer Science",
        "⚡ Scored 93% in Class 12th Board Examinations",
      ],
      
    },
    {
      title: "Narayana English Medium School",
      subtitle: "Class 10th (CBSE Board)",
       // Using existing image
      alt_name: "Narayana English Medium School",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Scored 93% in Class 10th Board Examinations",
      ],
     
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ISC2 Candidate",
      subtitle: "Cybersecurity Certification",
      logo_path: "github_logo.png",
      certificate_link: "#",
      alt_name: "ISC2",
      color_code: "#FF6B00"
    },
    
    {
      title: "Ethical Hacking 101",
      subtitle: "Simplilearn",
      logo_path: "codeInLogo.png",
      certificate_link: "#",
      alt_name: "Simplilearn",
      color_code: "#000000"
    },
    {
      title: "AI Security & Governance",
      subtitle: "Securiti",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "Securiti",
      color_code: "#00AEEF"
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "I've completed multiple projects in the field of AI/ML and Cybersecurity, and my roles have included developing AI/ML models, implementing cybersecurity measures, and leading technical teams.",
  header_image_path: "experience.jpg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          role: "Artificial Intelligence and Machine Learning Engineer",
          company: "Stag Innovations Pvt. Ltd.",
          company_url: "#",
          logo_path: "company-logo.png",
          duration: "Jan 2024 - Present",
          location: "Hyderabad, India",
        
          description: "Key Projects and Achievements",
          points: [
            {
              title: "AI-powered Job Portal",
              description: "Built an intelligent recruitment platform with resume parsing, job matching, and explainable AI dashboards."
            },
            {
              title: "Email Extractor for Recruitment Agencies",
              description: "Automated email extraction and classification using Python with IMAP filtering and attachment handling. Added a dashboard for analytics and user management, improving recruiter efficiency."
            },
            {
              title: "Proctoring System",
              description: "Developed a real-time monitoring engine to detect tab-switching, loss of focus, and proxy behavior to strengthen the integrity of online interviews."
            }
          ],
          color: "#0879bf",
        }
      ]
    },
    {
      title: "Internships",
      experiences: [
        {
          role: "Cybersecurity & AIML Intern",
          company: "Stag Innovations Pvt. Ltd",
          company_url: "#",
          logo_path: "github_logo.png",
          duration: "July 2024 - December 2024",
          location: "Remote, Online",
          description: "Key Projects and Achievements in Cybersecurity & AI/ML",
          points: [
            {
              title: "Network Intrusion Detection System (NIDS)",
              description: "Developed an AI-powered NIDS for real-time detection of cyber threats in both cloud and on-premises environments, significantly improving threat detection capabilities."
            },
            {
              title: "Threat Response Automation",
              description: "Integrated machine learning models with automated threat response capabilities, reducing incident response time by 60% and enhancing detection accuracy."
            },
            {
              title: "Security Monitoring Dashboard",
              description: "Designed and deployed a real-time monitoring GUI dashboard to visualize intrusion alerts, system status, and network traffic patterns for SOC teams."
            },
            {
              title: "Vulnerability Assessment",
              description: "Conducted comprehensive VAPT by analyzing network traffic behavior, identifying potential attack vectors, and reporting critical security gaps."
            },
            {
              title: "Threat Detection Models",
              description: "Applied advanced ML algorithms to detect and mitigate various cyber threats including DDoS attacks, port scanning, brute force attempts, and zero-day exploits."
            }
          ],
          color: "#1e88e5"
        }
      ]
    }
  ]
};

// Contact Page
// Projects Page
const projects = {
  header: {
    title: "My Projects",
    description:
      "Explore my technical projects that demonstrate my expertise in AI, web development, and cybersecurity. Each project includes detailed explanations, technologies used, and key features.",
  },
  data: [
    {
      id: 1,
      title: "AI-powered Job Portal",
      description: "A comprehensive job portal that leverages artificial intelligence to match candidates with suitable job opportunities.",
      details: [
        "✓ Advanced resume parsing using NLP to extract skills, experience, and education",
        "✓ AI-powered job matching algorithm with explainable AI features",
        "✓ Interactive React frontend with real-time updates and responsive design",
        "✓ Secure user authentication and role-based access control"
      ],
      technologies: ["React", "Node.js", "Python", "NLP", "MongoDB", "Express"],
      image: "job-portal.jpg",
      demo: "#",
      github: "#",
      animation: "fade-up"
    },
    {
      id: 2,
      title: "Email Extractor for Recruitment Agencies",
      description: "A powerful Python-based tool designed to streamline the recruitment process by extracting and organizing candidate information.",
      details: [
        "✓ IMAP integration for automated email processing",
        "✓ Advanced parsing of resumes and candidate information",
        "✓ Interactive dashboard for managing extracted data",
        "✓ Secure storage and processing of sensitive information"
      ],
      technologies: ["Python", "IMAP", "Django", "PostgreSQL", "Bootstrap"],
      image: "email-extractor.jpg",
      demo: "#",
      github: "#",
      animation: "fade-up"
    },
    {
      id: 3,
      title: "LoanInsDeals – Security Assessment",
      description: "Comprehensive security assessment of web, Android, and backend systems for a leading financial services platform.",
      details: [
        "✓ Conducted VAPT using industry-standard tools (Burp Suite, OWASP ZAP, Nessus, Wireshark)",
        "✓ Performed security assessment of web and mobile applications",
        "✓ Provided detailed CVSS reports and CIS hardening recommendations",
        "✓ Identified and helped remediate critical security vulnerabilities"
      ],
      technologies: ["Cybersecurity", "VAPT", "Burp Suite", "OWASP ZAP", "Nessus", "Wireshark"],
      image: "security-assessment.jpg",
      demo: "#",
      github: "#",
      animation: "fade-up"
    }
  ]
};

// Publications Page
const publicationsHeader = {
  title: "Publications",
  subtitle: "My academic and technical publications",
  description:
    "Here are some of my published works and research papers in the field of Computer Science, AI, and related areas.",
};

// Publications data
const publications = [
  // Add your publications here in the format:
  // {
  //   title: "Publication Title",
  //   conferenceName: "Conference/Journal Name",
  //   description: "Brief description of the publication",
  //   image: "publication_image.png",
  //   url: "#",
  //   technologies: ["Topic 1", "Topic 2"],
  // }
];

// Competitive Sites
const competitiveSites = {
  competitiveSites: [
   
   
  ]
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Perapu_Madhu.jpg",
    description:
      "I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel free to reach out to me through any of the platforms below. I'll try my best to get back to you as soon as possible!"
  },
  addressSection: {
    title: "Location",
    subtitle: "Yadhadri, Telangana, India",
    locality: "Yadhadri",
    country: "India",
    region: "Telangana",
    postalCode: "505001",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 9392475175",
  },
};

// Export all variables
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
  openSource
};
