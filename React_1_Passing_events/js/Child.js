import React, { useState } from "react";

// first option - passing the function with a setter state function

// const Child = ({ changeText }) => {
//   const [inputText, setInputText] = useState("");
//   const handleChange = (e) => {
//     setInputText(e.target.value);
//     if (typeof changeText === "function") {
//       changeText(e.target.value);
//     }
//   };

//   return (
//     <>
//       <input type="text" value={inputText} onChange={handleChange} />
//     </>
//   );
// };

// -----------------------------------------

// second option - passing the setter state function

const Child = ({ setText }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" value={inputText} onChange={handleChange} />
    </>
  );
};

export default Child;
