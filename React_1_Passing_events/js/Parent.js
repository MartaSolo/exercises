import React, { useState } from "react";
import Child from "./Child";

// version 1
// const Parent = () => {
//   const [text, setText] = useState("Hello World");

//   const handleTextChange = (newText) => {
//     setText(newText);
//   };
//   return (
//     <div>
//       <p>{text}</p>
//       <Child handleTextChange={handleTextChange} />
//     </div>
//   );
// };

// version 2
const Parent = () => {
  const [text, setText] = useState("Hello World");

  return (
    <div>
      <p>{text}</p>
      <Child setText={setText} />
    </div>
  );
};

export default Parent;
