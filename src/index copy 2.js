import React from 'react'; //! 1 - React-елементи

import ReactDOM from 'react-dom/client'; //! 2 - Render React-елемента

import { Fragment } from "react";

import paintings from "./json/paintings.json";

console.log("paintings:", paintings)

const painting0 = paintings[0]

console.log("painting0:", painting0)

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

// const element = React.createElement("h1", {
//   a: 5,
//   b: 10,
//   children: ["Привіт ", " ", "світ!"]
// });

// console.log("element:", element);

// //! 2 - Рендер одного React-елемента
// //? ReactDOM.createRoot(document.getElementById('root')).render(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
//* root.append(element) //* JS


//! 3 - Рендер кількох React-елементів
// const elem1 = React.createElement("span", { children: "Привіт " });
// const elem2 = React.createElement("span", { children: "світ!" });

// console.log("elem1:", elem1);
// console.log("elem2:", elem2);


// //todo: Each child in a list should have a unique "key" prop
// const elem1 = React.createElement("span", { key: "elem-1", children: "Привіт " });
// const elem2 = React.createElement("span", { key: "elem-2", children: "світ!" });

// console.log("elem1:", elem1);
// console.log("elem2:", elem2);

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: [elem1, " ", elem2]
// });

// console.log("element:", element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//! 4 - Рендер JSX-елемента (XML-образний синтаксис)
// const element = React.createElement("div", {
//   // a: 5,
//   // b: 10,
//   children: "Привіт, світ!",
// });

// console.log("element:", element);

// const jsxElement = <div>Привіт, мій світ</div>
// console.log("jsxElement:", jsxElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(element);
// root.render(jsxElement);


//! 5 - Рендер Вкладених JSX-елементів (інтерполяція)
// const elem1 = <span>Привіт  </span>;
// const elem2 = <span>світ!</span>;

// const element = (
//   <Fragment>
//     {elem1}
//     {elem2}
//   </Fragment>
// );

// console.log("element:", element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//! 6.1 - Елемент `painting`
// * HTML-розмітка:
{/* <div>
  <img src="" alt="" width="480" >
  <h2></h2>
  <p>Автор: <a href=""></a></p>
  <p>Цена: кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Додати до кошику</button>
</div> */}
// const url = painting0["url"]
// const url = painting0.url
// console.log("url:", url)
// const painting = (
//   <div>
//     <img src={url} alt={painting0.title} width="480" />
//     <h2>{painting0.title}</h2>
//     <p>Автор: <a href={painting0.author.url}>{painting0.author.tag}</a></p>
//     <p>Цена: кредитов{painting0.price }</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Додати до кошику</button>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(painting);


//! 6.3 - 3 Елемента `painting` з json
const data0 = paintings[0];
const data1 = paintings[1];
const data2 = paintings[2];

const painting1 = (
  <div>
    <img src={data0.url} alt={data0.title} width="480" />
    <h2>{data0.title}</h2>
    <p>Автор: <a href={data0.author.url}>{data0.author.tag}</a></p>
    <p>Цена: кредитов{data0.price}</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Додати до кошику</button>
  </div>
);

const painting2 = (
  <div>
    <img src={data1.url} alt={data1.title} width="480" />
    <h2>{data1.title}</h2>
    <p>Автор: <a href={data1.author.url}>{data1.author.tag}</a></p>
    <p>Цена: кредитов{data1.price}</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Додати до кошику</button>
  </div>
);

const painting3 = (
  <div>
    <img src={data2.url} alt={data2.title} width="480" />
    <h2>{data2.title}</h2>
    <p>Автор: <a href={data2.author.url}>{data2.author.tag}</a></p>
    <p>Цена: кредитов{data2.price}</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Додати до кошику</button>
  </div>
);

const cards = (
  <>
    {painting1}
    {painting2}
    {painting3}
  </>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(cards);


//! 6.4 КОМПОНЕНТ - функція з даними на вході та розміткою на виході
//? ❗️❗️❗️ Ім'я функції має бути ОБОВ'ЯЗКОВО з Великої літери ❗️❗️❗️
// const MyFunctionalComponent = props => <div>Functional Component</div>;
function Painting(props) {
  // function Painting({ url, title, author, profileUrl, price }) {
  console.log("props:", props);
  const { url, title, author, profileUrl, price } = props;
  return <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>Автор: <a href={profileUrl}>{author}</a></p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Додати до кошику</button>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<MyFunctionalComponent a="5" b={10} />)
// root.render(<Painting a="5" b={10} />);
root.render(
  <>
    <Painting
      url={data0.url}
      title={data0.title}
      author={data0.author.tag}
      profileUrl={data0.author.url}
      price={data0.price}
    />
    <Painting
      url={data1.url}
      title={data1.title}
      author={data1.author.tag}
      profileUrl={data1.author.url}
      price={data1.price}
    />
    <Painting
      url={data2.url}
      title={data2.title}
      author={data2.author.tag}
      profileUrl={data2.author.url}
      price={data2.price}
    />
  </>
);


