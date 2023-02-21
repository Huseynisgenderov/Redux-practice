import React from "react";
import "./navbar.scss";
import { darkTheme } from "../redux/mainSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch()
  return (
    <div className="navbar">
      <button onClick={()=> dispatch(darkTheme())}>Dark Theme</button>
    </div>
  );
};

export default Navbar;
