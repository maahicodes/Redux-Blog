import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styles/home.css";

const Homepage = () => {
  const dispatch = useDispatch();

  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home_page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && (
        <div className="login_message">
          <h2>📖</h2>
          <h1>The Readers Favourite Place!</h1>
          <p>Help your seed of knowledge to grow.🌱</p>
          <GoogleLogin
            clientId="239136847410-7i79122dvhkd6o8asboq70v7tsiir69r.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login_button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;