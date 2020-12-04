import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { withRouter, RouteComponentProps } from "react-router";
import auth from '../../auth';
import { Terms, Form, Container, LogoWrapper } from './SidebarComponentStyles'

const SidebarComponent: React.FC<RouteComponentProps> = (props) => {


  const [formData, setFormdata] = useState({
    email: '',
    password: ''
  });

  const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    auth.login(formData, props)
  }

  const onFormChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormdata(
      prevState => ({
        ...prevState,
        [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
      })
    )
  }

  return (
    <Container>
      <LogoWrapper>
        <h3>
          WEAL
        </h3>
      </LogoWrapper>
      <Form onSubmit={onSubmit as any}>
        <h3>Login</h3>
        <InputComponent name="email" type="email" placeholder="Email" value={formData.email} onChange={onFormChange as any} />
        <InputComponent name="password" type="password" placeholder="Password" value={formData.password} onChange={onFormChange as any} />
        <button>Login</button>
      </Form>
      <div>
        <Terms>
          By logging in, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
      </div>
    </Container>
  );
};


export default withRouter(SidebarComponent);
