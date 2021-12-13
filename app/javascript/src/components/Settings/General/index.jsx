import React, { useState } from "react";

import { Button, Typography } from "@bigbinary/neetoui/v2";
import { Input, Checkbox } from "@bigbinary/neetoui/v2/formik";
import { Formik, Form } from "formik";
import * as yup from "yup";

import siteApi from "apis/sites";

import { PasswordComponent } from "./PasswordComponent";

import SettingsContainer from "../SettingsContainer";

export const GeneralSettings = ({ name }) => {
  const [passwordValidation, setPasswordValidation] = useState({
    minChar: false,
    letterAndNumber: false,
  });
  const handlePassword = e => {
    const passWord = e.target.value;
    const minChar = passWord.length >= 6 ? true : false;
    const letterAndNumber = /(?=.*?[0-9])(?=.*?[A-Za-z]).+/.test(passWord)
      ? true
      : false;
    setPasswordValidation({ minChar, letterAndNumber });
  };
  const handleSubmit = async values => {
    try {
      const pass = values.isPassword ? values.password : null;
      await siteApi.update({
        site: {
          name: values.name,
          password: pass,
        },
      });
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };
  const schema = yup.object().shape({
    name: yup.string().required("Please Enter a Site name"),
    password: yup
      .string()
      .min(6, "Require atleast 6 character")
      .matches(
        /(?=.*?[0-9])(?=.*?[A-Za-z]).+/,
        "Requires atleast 1 number and letter"
      )
      .when("isPassword", {
        is: true,
        then: yup.string().required("Please enter  password"),
      }),
  });

  return (
    <SettingsContainer>
      <div className="w-400  mx-auto">
        <Formik
          initialValues={{ name, password: "", isPassword: false }}
          validationSchema={schema}
          validateOnBlur={false}
          onSubmit={values => handleSubmit(values)}
        >
          {({ errors, values, setFieldValue }) => (
            <Form className="mt-4">
              <div className="border-b-2 pb-5 mb-3">
                <Typography style="h2">General Settings</Typography>
                <Typography style="body2" className="text-gray-600">
                  Configure general attributes of scribble.
                </Typography>
                <Input
                  label="Site Name"
                  className="mt-5"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  placeholder="Enter Site Name."
                />
                <Typography style="body3" className="text-gray-500">
                  Customize the site name which is used to show the site name in
                </Typography>
                <Typography style="h6" className="text-gray-600">
                  Open Graph Tags
                </Typography>
              </div>

              <Checkbox
                label="Password Protection Knowledge base"
                name="isPassword"
                value={values.isPassword}
                style={{
                  color: "#6366F1",
                  borderRadius: "5px",
                }}
              ></Checkbox>
              <div>
                {values.isPassword && (
                  <PasswordComponent
                    password={values.password}
                    handlePassword={handlePassword}
                    passwordValidation={passwordValidation}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                )}
              </div>
              <div className="my-4">
                <Button
                  className="bg-indigo-500 "
                  label="Save Changes"
                  type="submit"
                />
                <Button style="text" label="Cancel" className="ml-6" to="/" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </SettingsContainer>
  );
};
