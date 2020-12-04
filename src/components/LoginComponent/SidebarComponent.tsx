import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "./InputComponent";
import auth from '../../auth';
import { withRouter, RouteComponentProps } from "react-router";


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
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #8dabff;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default withRouter(SidebarComponent);
