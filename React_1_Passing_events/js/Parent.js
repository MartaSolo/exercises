import React, { useState } from "react";
import Child from "./Child";

// first option - passing the function with a setter state function
// const Parnet = () => {
//   const [text, setText] = useState("Hello World");

//   const changeText = (userText) => {
//     setText(userText);
//   };
//   return (
//     <>
//       <p>{text}</p>
//       <Child changeText={changeText} />
//     </>
//   );
// };

// -----------------------------------------

// second option - passing the setter state function

const Parnet = () => {
  const [text, setText] = useState("Hello World");

  return (
    <>
      <p>{text}</p>
      <Child setText={setText} />
    </>
  );
};

export default Parnet;
