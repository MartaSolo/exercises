import React, { useState } from "react";

// version 1
// const Child = ({ handleTextChange }) => {
//   const [inputText, setInputText] = useState("");

//   const handleOnChange = (e) => {
//     setInputText(e.target.value);
//     if (typeof handleTextChange === "function") {
//       handleTextChange(e.target.value);
//     }
//   };

//   return (
//     <div>
//       <input value={inputText} onChange={handleOnChange} />
//     </div>
//   );
// };

// version 2
const Child = ({ setText }) => {
  const [inputText, setInputText] = useState("");

  const handleOnChange = (e) => {
    setInputText(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <input value={inputText} onChange={handleOnChange} />
    </div>
  );
};

export default Child;
