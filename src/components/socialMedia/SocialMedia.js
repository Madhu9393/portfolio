import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks, greeting } from "../../portfolio";
import styled from "styled-components";
import { Mail } from "lucide-react";

const IconWrapper = styled.span`
  i, svg {
    background-color: ${(props) => props.backgroundColor};
    color: white !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.6rem;
    width: 2.6rem;
  }
  &:hover i, &:hover svg {
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
              {media.name === "Email" ? (
                <Mail size={24} color="white" />
              ) : (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
