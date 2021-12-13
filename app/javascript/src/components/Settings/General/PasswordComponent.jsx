import React from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";

export const PasswordComponent = ({
  password,
  handlePassword,
  passwordValidation,
  setFieldValue,
  errors,
}) => {
  return (
    <div>
      <Input
        label="Password"
        className="mt-5"
        value={password}
        error={errors.password}
        onChange={e => {
          handlePassword(e);
          setFieldValue("password", e.target.value);
        }}
        type="password"
      />
      <Typography style="body3" className="py-3 flex">
        {passwordValidation.minChar ? (
          <Check size={18} color="#008000" />
        ) : (
          <Close size={16} color="#FF0000" />
        )}
        Have atleast 6 characters
      </Typography>
      <Typography style="body3" className="flex">
        {passwordValidation.letterAndNumber ? (
          <Check size={18} color="#008000" />
        ) : (
          <Close size={16} color="#FF0000" />
        )}
        Include at least 1 letter and 1 number{" "}
      </Typography>
    </div>
  );
};
