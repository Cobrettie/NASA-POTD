import React from 'react';
import styled from 'styled-components';

const FooterDivContain = styled.div`
  border-top: 1px solid black;
`;

const FooterP = styled.p`
  padding: 20px 0;
  color: #373737;
  font-size: 18px;
`;

function Footer(props) {
  return (
    <FooterDivContain className="footerContainer">
      <FooterP>Cobrettie Garner</FooterP>
    </FooterDivContain>
  )
}

export default Footer;