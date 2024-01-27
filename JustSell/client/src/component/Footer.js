// https://www.youtube.com/watch?v=wTs6Oa4m47o

import React, { useState } from "react";
import {
  FooterContainer,
} from "../styles/Footer.style";

function Footer() {
  const [extendFooter, setExtendFooter] = useState(false);

  return (
    <FooterContainer>
      <h1>This is the footer</h1>
    </FooterContainer>
      
  );
}

export default Footer;
