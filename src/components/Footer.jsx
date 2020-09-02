import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Rittik Sarkar ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
