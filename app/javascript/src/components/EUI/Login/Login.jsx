import React from "react";

import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2/formik";
import { Formik, Form } from "formik";
import * as yup from "yup";

import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";

import Vector from "../Images/Vector.png";
import { EuiNavbar } from "../Navbar/EuiNavbar";

export const Login = ({ siteName }) => {
  const handleSubmit = async values => {
    try {
      const response = await authApi.login({
        login: { password: values.password },
      });
      sessionStorage.setItem("authToken", response.data.authentication_token);
      setAuthHeaders();
      window.location.href = "/public";
    } catch (error) {
      logger.error(error);
    }
  };
  const schema = yup.object().shape({
    password: yup.string().required("Password Can't be blank"),
  });

  return (
    <div>
      <EuiNavbar siteName={siteName} />
      <Formik
        initialValues={{ password: "" }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={schema}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <div className="w-400 flex  flex-col justify-center items-center mx-auto ">
              <div className="text-left mt-40">
                <img src={Vector} className="mx-auto mb-6" />
                <Typography style="h2">
                  {siteName} is password protected!
                </Typography>
                <Typography className="text-gray-600 text-left">
                  Enter the password to gain access to {siteName}.
                </Typography>
                <Input
                  label="Password"
                  className="w-400 mt-6"
                  type="password"
                  name="password"
                  error={errors.password}
                  value={values.password}
                />
                <Button
                  label="Continue"
                  className="bg-indigo-700 mt-6"
                  type="submit"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
