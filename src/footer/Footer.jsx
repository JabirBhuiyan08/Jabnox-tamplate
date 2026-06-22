import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '14px',
  };

    return (
        <div style={footerStyle}>
          <p>© 2026 Ecommerce Store. All rights reserved.</p>
        </div>
    );
};

export default Footer;