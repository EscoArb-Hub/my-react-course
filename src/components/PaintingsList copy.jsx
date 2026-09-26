// import paintings from "./json/paintings.json";
// console.log("paintings:", paintings)

// const data0 = paintings[0];
// const data1 = paintings[1];
// const data2 = paintings[2];

// export default function PaintingsList(props)
export default function PaintingsList({
    url,
    title,
    author,
    profileUrl,
    price
}) {
    // function Painting({ url, title, author, profileUrl, price }) {
    // console.log("props:", props);
    // const { url, title, author, profileUrl, price } = props;
    return <div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>Автор: <a href={profileUrl}>{author}</a></p>
        <p>Цена: {price} кредитов</p>
        <p>Доступность: заканчивается или есть в наличии</p>
        <button type="button">Додати до кошику</button>
    </div>
};