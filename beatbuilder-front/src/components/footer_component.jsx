import React from "react";
import "../css/navbar_initial_page_style.css";


function Footer() {
  return (
<footer style={footerStyle}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img alt="wave-sound"style={{width:"auto", height:"30px", marginRight:"5px"}} src="/wave-sound.png"/>
      <h5 style={{ margin: "0" }} className="neon-text-footer">BeatBuilder</h5>
    </div>
    <p style={{ margin: "0" }}>&copy; 2024 BeatBuilder. All rights reserved.</p>
  </div>
</footer>
  );
}

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
};

export default Footer;