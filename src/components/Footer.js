import React from "react";
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear();
  return (
    
      <div className="footer">
      Copyright ⓒ {year}
      </div>
    
  );
}

export default Footer;