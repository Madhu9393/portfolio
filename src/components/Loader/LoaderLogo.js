import React, { useEffect, useRef } from "react";
import "./LoaderLogo.css";

const LoaderLogo = ({ theme }) => {
  const signatureRef = useRef(null);

  useEffect(() => {
    // Add signature drawing animation
    const signature = signatureRef.current;
    if (signature) {
      signature.style.strokeDasharray = signature.getTotalLength();
      signature.style.strokeDashoffset = signature.getTotalLength();
      signature.style.animation = `draw 3s ease-in-out forwards`;
    }
  }, []);

  // Add font link to the document head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="signature-container" style={{ backgroundColor: theme.splashBg, padding: '20px' }}>
      <div className="signature-wrapper" style={{ width: '800px', height: '400px' }}>
        <svg 
          viewBox="0 0 800 300" 
          style={{
            width: '100%',
            height: '100%',
            stroke: theme.body,
            fill: 'none',
            strokeWidth: 3,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }}
        >
          <path 
            ref={signatureRef}
            className="signature-path"
            d="M100,150 C200,100 300,200 400,150 C500,100 600,200 700,150"
            style={{
              stroke: theme.body
            }}
          />
          <text 
            x="50%" 
            y="250" 
            textAnchor="middle" 
            className="signature-text"
            style={{
              fill: theme.body,
              fontSize: '48px'
            }}
          >
            Perapu Madhu
          </text>
        </svg>
      </div>
    </div>
  );
};

export default LoaderLogo;
