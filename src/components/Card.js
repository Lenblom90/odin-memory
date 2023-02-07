import "../styles/Card.css";

export default function Card({id, src, name, onClick}) {
    return (
        <div onClick={() => onClick(id)} className="card">
            <img className="card-img" src={src} alt={"image of "+ name}></img>
            <div className="card-name">{name}</div>
        </div>
    );
}