import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styles/navbar.css";

const Navbar = () => {
  const [inputValue, setInputvalue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div className="navbar">
      <h1 className="navbar_header">Bibliophile</h1>
      {isSignedIn && (
        <div className="blog_search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar_user_data">
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="239136847410-7i79122dvhkd6o8asboq70v7tsiir69r.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout_button"
              >
                Logout 😦
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">Please Login First 😊</h1>
      )}
    </div>
  );
};

export default Navbar;
