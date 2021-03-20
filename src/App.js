import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import "./styles/app.css";
import Blog from "./components/Blog";
import { selectSignedIn } from "./features/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
};

export default App;
