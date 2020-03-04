import React from 'react';

function Footer(props) {
  return (
    <div className="footerContainer">
      <p>{props.copyright}</p>
    </div>
  )
}

export default Footer;