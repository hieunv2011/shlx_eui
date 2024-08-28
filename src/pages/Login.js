import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from '../assets/bg.jpg';

import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
  EuiText,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { useLogin } from "../hooks/post";

const inputTextFieldStyle = {
  width: "100%",
};

const inputPasswordFieldStyle = {
  width: "100%", // Sửa chiều rộng để đồng bộ với trường text
};

const formRowStyle = {
  marginBottom: "1rem",
  paddingTop: "10px",
};

const buttonStyle = {
  marginTop: "1rem",
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: login, isLoading, error } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await login({ email, password });
      navigate("/trainees");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="flex justify-center items-center" style={{height:"100vh",backgroundImage:`url(${bg})`,backgroundSize:'cover'}}>
      <EuiForm component="form" onSubmit={handleSubmit} className="bg-white/50 px-40 py-20 rounded-2xl">
        <EuiText style={{ color: "#83650a" }}>Đăng nhập</EuiText>
        <EuiFormRow label="Email" style={formRowStyle}>
          <EuiFieldText
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputTextFieldStyle}
          />
        </EuiFormRow>
        <EuiFormRow label="Password" style={formRowStyle}>
          <EuiFieldPassword
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={inputPasswordFieldStyle}
          />
        </EuiFormRow>
        <EuiButton type="submit" fill style={buttonStyle}>
          Log in
        </EuiButton>
      </EuiForm>
    </div>
  );
};

export default LoginForm;
