import "../styles/HeaderBar.css"

export default function HeaderBar({score, bestScore}) {
    const title = "Medieval memory";
    const description = "Remember the cards you clicked and try to click all the cards once.";

    return (
        <div className="HeaderBar">
            <div className="header-text">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div>
            <div className="score">
                <div className="current-score">{"Score: " + score}</div>
                <div className="best-score">{"Best score: " + bestScore}</div>
            </div>
        </div>
    );
}