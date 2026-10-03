import defaultImage from "./image.png" //! Дефолтне зображення


//! Підстановка дефолтного зображення якщо url є, але шлях помилковий (від Антона)
function onErrorImg(e) {
    e.target.onError = null;
    e.target.src = defaultImage;
};


export default function PaintingItem({
    url = defaultImage,
    title,
    author = "не відомо",
    profileUrl,
    price }) {
    return (
        <>
            {/* <img src={url} alt={title} width="480" /> */}
            <img src={url} alt={title} width="480" onError={(e) => onErrorImg(e)} />
            <h2>{title}</h2>
            <p>Автор: <a href={profileUrl}>{author}</a></p>
            <p>Цена: {price} кредитов</p>
            <p>Доступность: заканчивается или есть в наличии</p>
            <button type="button">Додати до кошику</button>
        </>
    )
};
