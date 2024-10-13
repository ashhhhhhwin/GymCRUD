import React, { useEffect, useState } from "react";
import Button from "../Button";

const Header = (props) => {
  const { isLoggedIn, UserName, UserRole, UserProfile, orgLogo } = props;
  const [showLoginOrSignUp, setShowLoginOrSignUp] = useState(!isLoggedIn);

  useEffect(() => {
    setShowLoginOrSignUp(!isLoggedIn);
  }, [isLoggedIn]);

  const loginHandler = () => {};
  const signUpHandler = () => {};

  return (
    <>
      <nav className="header-nav bg-[#3c3c3c] flex justify-content-between">
        <div className="org-logo">
          <img src={orgLogo} />
        </div>
        {showLoginOrSignUp && (
          <div className="action-buttons flex justify-content-between">
            <Button
              type={"secondary"}
              onClick={loginHandler}
              label={"Log in"}
            ></Button>
            <Button
              type={"primary"}
              onClick={signUpHandler}
              label={"Sign Up"}
            ></Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
