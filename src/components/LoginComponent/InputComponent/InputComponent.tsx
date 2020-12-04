import React from "react";
import { Container, StyledInput, Status } from './InputComponentStyles'

interface InputProps {
  type?: string,
  placeholder: string,
  name: string,
  value: string,
  onChange: () => void
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, name, onChange, value }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        name={name}
        onChange={onChange}
        value={value}
        required
        aria-label="input"
        aria-required="true"
      />
      <Status />
    </Container>
  );
};



export default InputComponent;
