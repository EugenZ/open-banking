import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Switch, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const SettingPageSecurityPage: React.FC = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="h-[1024px] md:hidden md:px-5 relative w-[18%] md:w-full" />
          <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-[83%] md:w-full">
            <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
              <Text
                className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                size="txtInterSemiBold28"
              >
                Services
              </Text>
              <Input
                name="GroupEight"
                placeholder="Search for something"
                value={groupeightvalue}
                onChange={(e) => setGroupeightvalue(e)}
                className="!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-[15px] text-left w-full"
                wrapClassName="flex md:flex-1 md:ml-[0] ml-[482px] md:mt-0 my-[5px] rounded-[25px] w-[23%] md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 ml-[25px] mr-[15px] my-[15px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#888ea2"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setGroupeightvalue("")}
                    style={{
                      visibility:
                        groupeightvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                color="gray_101"
              ></Input>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]"
                shape="circle"
                color="gray_102"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_settings_50X50.svg"
                  alt="settings One"
                />
              </Button>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]"
                shape="circle"
                color="gray_102"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_notification.svg"
                  alt="notification"
                />
              </Button>
              <Img
                className="h-[60px] md:h-auto md:ml-[0] ml-[35px] rounded-[50%] w-[60px]"
                src="images/img_ellipse1.png"
                alt="EllipseOne"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-end p-[30px] sm:px-5 rounded-[25px] w-[94%] md:w-full">
              <div className="flex flex-col justify-start mt-[7px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-4 md:ml-[0] w-2/5 md:w-full">
                  <Text
                    className="common-pointer text-base text-bluegray-400"
                    size="txtInterMedium16Bluegray400"
                    onClick={() => navigate("/settingeditprofile")}
                  >
                    Edit Profile
                  </Text>
                  <Text
                    className="common-pointer sm:ml-[0] ml-[72px] text-base text-bluegray-400"
                    size="txtInterMedium16Bluegray400"
                    onClick={() => navigate("/settingpagepreferences")}
                  >
                    Preferences
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] ml-[51px] w-[28%] sm:w-full">
                    <Text
                      className="text-base text-indigo-600"
                      size="txtInterMedium16Indigo600"
                    >
                      Security
                    </Text>
                    <Line className="bg-indigo-600 h-[3px] rounded-tl-[10px] rounded-tr-[10px] w-full" />
                  </div>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start mt-[37px] w-[39%] md:w-full">
                <Text
                  className="text-[17px] text-bluegray-900"
                  size="txtInterMedium17"
                >
                  Two-factor Authentication
                </Text>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <Switch
                    onColor="#359766"
                    offColor="#359766"
                    onHandleColor="#ffffff"
                    offHandleColor="#ffffff"
                    value={true}
                    className="w-[14%]"
                  />
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Enable or disable two factor authentication
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[27px] rounded-[15px] w-[49%] md:w-full">
                <Text
                  className="text-[17px] text-bluegray-900"
                  size="txtInterMedium17"
                >
                  Change Password
                </Text>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-4 rounded-[15px] w-full">
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Current Password
                  </Text>
                  <Input
                    name="Group195"
                    placeholder="Charlene@123"
                    className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    shape="round"
                    color="white_A700"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[22px] rounded-[15px] w-full">
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    New Password
                  </Text>
                  <Input
                    name="Group195 One"
                    placeholder="Charlene@123"
                    className="leading-[normal] p-0 placeholder:text-bluegray-900 text-[15px] text-left w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    shape="round"
                    color="white_A700"
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[860px] mt-[30px] rounded-[15px] text-center text-lg"
                color="indigo_600"
                size="md"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPageSecurityPage;
