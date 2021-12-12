import React, { useState } from "react";

import { Typography, Input, Button } from "@bigbinary/neetoui/v2";

import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";

import Vector from "./Images/Vector.png";
import { EuiNavbar } from "./Navbar/EuiNavbar";

export const Login = ({ siteName }) => {
  const [password, setPassword] = useState("");
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await authApi.login({ login: { password } });

      sessionStorage.setItem("authToken", response.data.authentication_token);
      setAuthHeaders();
      window.location.href = "/public";
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <div>
      <EuiNavbar siteName={siteName} />
      <div className="w-400 flex  flex-col justify-center items-center mx-auto ">
        <div className="text-left mt-40">
          <img src={Vector} className="mx-auto mb-6" />
          <Typography style="h2">{siteName} is password protected!</Typography>
          <Typography className="text-gray-600 text-left">
            Enter the password to gain access to {siteName}.
          </Typography>
          <Input
            label="Password"
            className="w-400 mt-6"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            label="Continue"
            className="bg-indigo-700 mt-6"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
