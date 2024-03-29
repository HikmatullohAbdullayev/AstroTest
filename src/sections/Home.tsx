import React from "react";
import { gsap } from "gsap";

interface PropsType {
  text: string;
}

const Home: React.FC<PropsType> = ({ text }) => {
  return (
    <>
      <div>{text}</div>;
    </>
  );
};

export default Home;
