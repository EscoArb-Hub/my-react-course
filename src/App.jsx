import PaintingsList from './components/PaintingsList';


import paintings from "./json/paintings.json";
console.log("paintings:", paintings)


export default function App() {
    const data0 = paintings[0];
    const data1 = paintings[1];
    const data2 = paintings[2];

    // function Painting(props) {
    //     // function Painting({ url, title, author, profileUrl, price }) {
    //     console.log("props:", props);
    //     const { url, title, author, profileUrl, price } = props;
    //     return <div>
    //         <img src={url} alt={title} width="480" />
    //         <h2>{title}</h2>
    //         <p>Автор: <a href={profileUrl}>{author}</a></p>
    //         <p>Цена: {price} кредитов</p>
    //         <p>Доступность: заканчивается или есть в наличии</p>
    //         <button type="button">Додати до кошику</button>
    //     </div>
    // };
    return (
        <>
            <PaintingsList
                url={data0.url}
                title={data0.title}
                author={data0.author.tag}
                profileUrl={data0.author.url}
                price={data0.price}
            />
            <PaintingsList
                url={data1.url}
                title={data1.title}
                author={data1.author.tag}
                profileUrl={data1.author.url}
                price={data1.price}
            />
            <PaintingsList
                url={data2.url}
                title={data2.title}
                author={data2.author.tag}
                profileUrl={data2.author.url}
                price={data2.price}
            />
        </>
    );
};
