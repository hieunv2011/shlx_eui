import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
  EuiText,
  EuiLink,
  EuiSpacer,
  EuiIcon,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { useLogin } from "../hooks/post";

const inputTextFieldStyle = {
  width: "100%",
};

const inputPasswordFieldStyle = {
  width: "100%",
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

  const { mutate: login } = useLogin();

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
    <div
      className="flex flex-col justify-between items-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        position: "relative", // Thêm position relative để điều chỉnh vị trí của phần tử con
      }}
    >
      {/* Đặt logo và tiêu đề vào góc trái trên cùng */}
      <div
        className="flex flex-row items-center space-x-2"
        style={{
          position: "absolute", // Sử dụng absolute để đưa phần tử này lên góc trái trên
          top: "20px", // Điều chỉnh khoảng cách từ trên cùng
          left: "20px", // Điều chỉnh khoảng cách từ trái
        }}
      >
        <EuiIcon type="agentApp" size="xl" className="bg-white rounded-lg p-2" />
        <p className="text-white text-2xl font-bold">SHLX</p>
      </div>

      {/* Phần tử này được đặt ở giữa */}
      <div className="flex-grow flex items-center justify-center">
        <EuiForm
          component="form"
          onSubmit={handleSubmit}
          className="bg-white px-32 py-20 rounded-2xl flex flex-col items-center"
        >
          <EuiText>
            <h2>ĐĂNG NHẬP</h2>
          </EuiText>
          <EuiFormRow label="EMAIL" style={formRowStyle} className="w-96">
            <EuiFieldText
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn ..."
              style={inputTextFieldStyle}
            />
          </EuiFormRow>
          <EuiFormRow label="MẬT KHẨU" style={formRowStyle} className="w-96">
            <EuiFieldPassword
              value={password}
              type="dual"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Use aria labels when no actual label is in use"
              style={inputPasswordFieldStyle}
              placeholder="Nhập mật khẩu của bạn ..."
            />
          </EuiFormRow>
          <EuiButton type="submit" fill style={buttonStyle} className="w-52">
            ĐĂNG NHẬP
          </EuiButton>
          <EuiSpacer />
          <EuiLink>Quên tài khoản/ Mật khẩu ?</EuiLink>
        </EuiForm>
      </div>

      {/* Phần tử này được đặt ở dưới cùng */}
      <div className="flex justify-between items-center text-white w-full px-4 py-2">
        <h3 className="text-xs">HỆ THỐNG QUẢN LÝ ĐÀO TẠO LÁI XE</h3>
        <h3 className="text-xs">
          Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000. Email:
          shlx@toanphuong.com.vn
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
