import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom/client";
import Title from "./components/Title";
import Body from "./components/Body";

const title = <h1>hello world</h1>;

const HeaderComonent = () => {
  return (
    <>
      <Title />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComonent />);
