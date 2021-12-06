import React, { useEffect, useState } from "react";

import { Check, Close } from "@bigbinary/neeto-icons";
import { Button, Typography, Input, Checkbox } from "@bigbinary/neetoui/v2";
import { Toastr } from "@bigbinary/neetoui/v2";

import siteApi from "apis/sites";

import SettingsContainer from "../SettingsContainer";

export const GeneralSettings = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [siteName, setSiteName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState({
    minChar: false,
    letterAndNumber: false,
  });
  const [errors, setErrors] = useState("");
  const fetchSiteDetails = async () => {
    const response = await siteApi.show();
    setSiteName(response.data.name);
  };
  useEffect(() => {
    fetchSiteDetails();
  }, []);
  const handlePassword = e => {
    const passWord = e.target.value;
    setPassword(passWord);
    const minChar = passWord.length > 6 ? true : false;
    const letterAndNumber = /(?=.*?[0-9])(?=.*?[A-Za-z]).+/.test(passWord)
      ? true
      : false;
    setPasswordValidation({ minChar, letterAndNumber });
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (siteName.trim().length <= 0) {
      setErrors("Required");
    } else {
      setErrors("");
      const passValidation =
        passwordValidation.minChar && passwordValidation.letterAndNumber;
      if (isPassword) {
        if (passValidation) {
          siteApi.update({
            site: {
              name: siteName,
              password: password,
            },
          });
        } else {
          Toastr.error("Check the password requirement.");
        }
      } else {
        siteApi.update({
          site: {
            name: siteName,
            password: null,
          },
        });
      }
    }
  };
  return (
    <SettingsContainer>
      <div className="w-400  mx-auto">
        <div>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="border-b-2 pb-5">
              <Typography style="h2">General Settings</Typography>
              <Typography style="body2" className="text-gray-600">
                Configure general attributes of scribble.
              </Typography>
              <Input
                label="Site Name"
                className="mt-5"
                value={siteName}
                onChange={e => setSiteName(e.target.value)}
                error={errors}
              />
              <Typography style="body3" className="text-gray-500">
                Customize the site name which is used to show the site name in
              </Typography>
              <Typography style="h6" className="text-gray-600">
                Open Graph Tags
              </Typography>
            </div>
            <div className="mt-5">
              <Checkbox
                label="Password Protection Knowledge base"
                value={isPassword}
                onChange={() => setIsPassword(value => !value)}
                style={{
                  color: "#6366F1",
                  borderRadius: "5px",
                }}
              ></Checkbox>
              <div>
                {isPassword && (
                  <div>
                    <Input
                      label="Password"
                      className="mt-5"
                      value={password}
                      onChange={handlePassword}
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
                )}
              </div>
              <div className="my-4">
                <Button
                  className="bg-indigo-500"
                  label="Save Changes"
                  type="submit"
                />
                <Button style="text" label="Cancel" className="ml-6" to="/" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </SettingsContainer>
  );
};
