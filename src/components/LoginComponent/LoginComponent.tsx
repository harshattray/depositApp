import React from "react";
import SidebarComponent from "./SidebarComponent/SidebarComponent";
import Main from "./MainComponent/MainComponent";
import { Container, Wrapper } from './LoginComponentStyles'

const LoginComponent: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <SidebarComponent />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default LoginComponent;
