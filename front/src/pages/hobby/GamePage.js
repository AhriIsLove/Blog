import { useState, useEffect } from "react";
import { getGameList } from '../../api/HobbyAPI';

const GamePage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGameList().then(data => setGames(Array.isArray(data) ? data : []));
    }, []);

    return (
        <div className="game-page-container flex flex-col items-center w-full">
            <h1 className="text-2xl font-bold mb-6">Game List</h1>
            <div className="game-list flex flex-col gap-4 items-center w-full">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="game-card flex flex-row items-center border border-myFontColor-300 rounded-lg p-4 w-full max-w-2xl bg-white shadow-sm"
                    >
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold mb-2">{game.name}</h2>
                            <p className="text-myFontColor-400 m-0">{game.company}</p>
                            <p className="text-myFontColor-400 m-0">{game.type}</p>
                            <p className="text-myFontColor-400 m-0">{game.platform}</p>
                            <p className="text-myFontColor-400 m-0">{game.price}원</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GamePage;