import React, { useEffect, useState } from "react";
import Button from "../Button";
import TextLink from "../TextLink";
import LOGO from "../../../assets/Cnclogo.png";

const Header = (props) => {
  const { isLoggedIn, UserName, UserRole, UserProfile, orgLogo } = props;
  const [showLoginOrSignUp, setShowLoginOrSignUp] = useState(!isLoggedIn);
  const [chosenLink, setChosenLink] = useState("Home");

  useEffect(() => {
    setShowLoginOrSignUp(!isLoggedIn);
  }, [isLoggedIn]);

  const loginHandler = () => {};
  const signUpHandler = () => {};

  const routeHandler = (pageChosen) => {
    console.log("here");
    setChosenLink(pageChosen);
  };

  return (
    <>
      <nav
        className="header-nav bg-[#3c3c3c] p-2 flex justify-between"
        style={{ position: "sticky", top: 0 }}
      >
        <div className="home-links flex">
          <div className="gym-logo">
            <img src={LOGO} width="60rem" />
          </div>
          <div className="m-2 ml-6">
            <TextLink
              use="primary"
              label={"Home"}
              chosen={chosenLink === "Home"}
              OnClick={() => {
                routeHandler("Home");
              }}
            ></TextLink>
          </div>
          <div className="m-2 ml-6">
            <TextLink
              use="primary"
              label={"About Us"}
              chosen={chosenLink === "About Us"}
              OnClick={() => {
                routeHandler("About Us");
              }}
            ></TextLink>
          </div>
          <div className="m-2 ml-6">
            <TextLink
              use="primary"
              label={"Services"}
              chosen={chosenLink === "Services"}
              OnClick={() => {
                routeHandler("Services");
              }}
            ></TextLink>
          </div>
          <div className="m-2 ml-6">
            <TextLink
              use="primary"
              label={"Contact Us"}
              chosen={chosenLink === "Contact Us"}
              OnClick={() => {
                routeHandler("Contact Us");
              }}
            >
              Contact Us
            </TextLink>
          </div>
          <div className="m-2 ml-6">
            <TextLink
              use="primary"
              label={"Attendance"}
              chosen={chosenLink === "Attendance"}
              OnClick={() => {
                routeHandler("Attendance");
              }}
            ></TextLink>
          </div>
        </div>
        <div className="nav-links flex"></div>
        {showLoginOrSignUp && (
          <div className="action-buttons flex justify-end">
            <div className="mr-2">
              <Button
                type={"secondary"}
                onClick={loginHandler}
                label={"Log in"}
              ></Button>
            </div>
            <div>
              <Button
                type={"primary"}
                onClick={signUpHandler}
                label={"Sign Up"}
              ></Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
