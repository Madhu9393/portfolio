import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks, greeting } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {!props.hideResume && (
        <>
          <a
            href={greeting.resumeLink}
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Resume</span>
          </a>
          <a
            href={greeting.resumeLink}
            className="icon-button"
            download
            title="Download Resume"
            style={{ marginLeft: '10px' }}
          >
            <i className="fas fa-file-download" style={{ backgroundColor: '#4CAF50' }}></i>
          </a>
        </>
      )}
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
