import Card from "./Card";
import "../styles/CardLayout.css";

export default function CardLayout() {

    const cards = (
        <>
        <Card />
        <Card />
        <Card />        
        <Card />        
        <Card />
        </>
    )

    return (
        <div className="card-layout">
            {cards}
        </div>
    );
}