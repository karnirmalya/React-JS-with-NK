import { StrictMode } from "react";
import React from "react";
// import {jsx as _jsx} from "react/jsx-runtime.js";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>My Custom App!</h1>
    </div>
  );
}

//CUSTOM REACT(OBJECT)
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: 'Click me to visit Google'
// };

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    VISIT GOOGLE
  </a>
);

// const reactElement = React.createElement(
//   'a',
//   {
//     href: "https://google.com",
//     title: "My Paragraph",
//     target: "_blank",
//   },
//   "Click me to Visit Google"
// );

const anotherUser = ' Code With Nirmalya'
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google", 
  anotherUser
);

createRoot(document.getElementById("root")).render(
     reactElement
  // AnotherElement
//   <App />
);
