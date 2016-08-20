import React from 'react';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        Disclaimer: the calculator is for illustrative purposes only and is not a substitute for professional advice.
      </p>
    </div>
  );
};

export default AboutPage;
