import React from "react";
import { resolve } from "styled-jsx/css";

async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
const About = async () => {
  await takeTime();
  throw new Error("this is manual error ");
  return <div> this is About page </div>;
};

export default About;
