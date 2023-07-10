import React from "react";
import Sections from "../components/Main/Sections";
import Description from "../components/Main/Description";
import Start from "../components/Main/Start";

const MainPage = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Sections />
      <Description />
      <Start />
    </div>
  );
};

export default MainPage;
