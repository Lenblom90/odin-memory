import Card from "./Card";
import "../styles/CardLayout.css";
import knight1 from '../images/knight1.jpeg';
import knight2 from '../images/knight2.jpeg';
import knight3 from '../images/knight3.png';
import knight4 from '../images/knight4.jpeg';
import knight5 from '../images/knight5.jpeg';
import knight6 from '../images/knight6.jpeg';
import { useState } from "react";



export default function CardLayout({resetScore, updateScore}) {

    const [selected, setSelected] = useState([]);

    const playingcards = [
        {
            id: 1,
            name: "Knight", 
            src: knight1
        },
        {
            id: 2,
            name: "Knight", 
            src: knight2
        },
        {
            id: 3,
            name: "Knight", 
            src: knight3
        },
        {
            id: 4,
            name: "Knight", 
            src: knight4
        },
        {
            id: 5,
            name: "Knight", 
            src: knight5
        },
        {
            id: 6,
            name: "Knight", 
            src: knight6
        },
    ]

    const handleCardClick = (id) => {
        if(!selected.includes(id)){
            updateScore();
            setSelected([...selected, id]);
        } else {
            console.log("Game over");
            resetScore();
            setSelected([]);
        }
        rearrangeCards();
    }

    const cards = playingcards.map((card) => {
        return <Card id={card.id} src={card.src} name={card.name} key={card.id} onClick={handleCardClick} />
    });

    const rearrangeCards = () => {
        console.log("TODO rearrange cards")
    }

    return (
        <div className="card-layout">
            {cards}
        </div>
    );
}