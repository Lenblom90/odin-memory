import "../styles/HeaderBar.css"

export default function HeaderBar() {
    const title = "Memory";
    const description = "this is how you play this game: ";
    const score = 0;
    const bestScore = 0;

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