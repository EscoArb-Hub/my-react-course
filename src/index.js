import React from 'react'; //! 1 - React-елементи

import ReactDOM from 'react-dom/client'; //! 2 - Render React-елемента

//! 1 - React-елементи
// const element = React.createElement("div");
// * document.createElement("div"); //* JS

// const element = React.createElement("div", { a: 5, b: 10 }, "Привіт  світ!");

// const element = React.createElement(
//   "div",
//   { a: 5, b: 10 },
//   "Привіт ",
//   " ",
//   "світ!"
// );

const element = React.createElement("h1", {
  a: 5,
  b: 10,
  children: ["Привіт ", " ", "світ!"]
});

console.log("element:", element);

//! 2 - Рендер одного React-елемента
//? ReactDOM.createRoot(document.getElementById('root')).render(element);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
//* root.append(element) //* JS
