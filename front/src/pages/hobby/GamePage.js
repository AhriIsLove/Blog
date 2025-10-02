import { useState, useEffect } from "react";
import { getGameList } from '../../api/HobbyAPI';

const GamePage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGameList().then(data => setGames(Array.isArray(data) ? data : []));
    }, []);

    return (
        <div>
            <h1>Game List</h1>
            <ul>
                {games.map((game, index) => (
                    <li key={index}>{game.name} - {game.type}</li>
                ))}
            </ul>
        </div>
    );
}

export default GamePage;