import React, { useState, useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onClick={scrollToTop}
      id="topButton"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = theme.text;
        e.currentTarget.style.backgroundColor = theme.body;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = theme.body;
        e.currentTarget.style.backgroundColor = theme.text;
      }}
    >
      <i className="fas fa-arrow-up" style={{ fontSize: '20px' }} />
    </div>
  );
}
