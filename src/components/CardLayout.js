import Card from "./Card";
import "../styles/CardLayout.css";
import knight1 from '../images/knight1.jpeg';
import knight2 from '../images/knight2.jpeg';
import knight3 from '../images/knight3.png';
import knight4 from '../images/knight4.jpeg';
import knight5 from '../images/knight5.jpeg';
import knight6 from '../images/knight6.jpeg';
import { useEffect, useState } from "react";



export default function CardLayout({resetScore, updateScore}) {

    const playingCards = [
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

    const [selected, setSelected] = useState([]);
    const [positions, setPositions] = useState(playingCards.map((value, index) => value))
    

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

    const cards = positions.map((card) => {
        return <Card id={card.id} src={card.src} name={card.name} key={card.id} onClick={handleCardClick} />
    });

    const rearrangeCards = () => {
        for (let i = playingCards.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const k = playingCards[i];
            playingCards[i] = playingCards[j];
            playingCards[j] = k; 
        }
        setPositions(playingCards);
    }

    return (
        <div className="card-layout">
            {cards}
        </div>
    );
}