
import PaintingItem from "./PaintingItem"
export default function PaintingsList({ items }) {
    console.log("items", items)
    // function Painting({ url, title, author, profileUrl, price }) {
    // console.log("props:", props);
    // const { url, title, author, profileUrl, price } = props;
    return <ul>
        {items.map(item =>
            <li>
                <PaintingItem
                    url={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profileUrl={item.author.url}
                    price={item.price}
                />
            </li>
        )}
    </ul>
};

// { [1, 2, 3, 4, 5].map(el => <div>{el}</div>) }