import "../styles/Card.css";

export default function Card() {
    const name = "Hello";
    const src = null;

    return (
        <div className="card">
            <img className="card-img" src={src} alt={"image of "+ name}></img>
            <div className="card-name">{name}</div>
        </div>
    );
}