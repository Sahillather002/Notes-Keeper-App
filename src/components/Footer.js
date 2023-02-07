import React from "react";
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear();
  return (
    
      <div className="footer">
      Thanks for using app ⓒ {year}
      </div>
    
  );
}

export default Footer;