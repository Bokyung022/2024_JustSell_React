// https://www.youtube.com/watch?v=1yMrdBsep-A

//color: #e59524;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 15%;
  background-color: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  left: 0;
  bottom: 0;
  display: flex;
  padding: 20px;
  
`;

export const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
`;

export const LeftFooterContainer = styled(FooterColumn)`
  padding-left: 20px;
`;

export const RightFooterContainer = styled(FooterColumn)`
  padding-right: 20px;
`;

export const Credit = styled.div`
  color: #e59524;
`;

export const CreditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; 
`;
