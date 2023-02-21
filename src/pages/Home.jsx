import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../component/Navbar";
import "./home.scss";
import { increment, decrement, darkTheme } from "../redux/mainSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>Count:{count} </p>
        <button onClick={() => dispatch(decrement())}>Increment</button>
      </div>
    </div>
  );
};

export default Home;
