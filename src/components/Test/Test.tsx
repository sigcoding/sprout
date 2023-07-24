import React from "react";
import { TestProps } from "./Test.types";

const Test: React.FC<TestProps> = ({ text }) => {
  return <h2>{text}</h2>
}

export default Test;
