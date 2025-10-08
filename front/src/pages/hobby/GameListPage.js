import { useState, useEffect, useCallback } from "react";
import { getGameList } from '../../api/HobbyAPI';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getImageURL } from '../../api/MainAPI';

const GameListPage = () => {
    // 게임 목록 상태
    const [games, setGames] = useState([]);
    // 무한 스크롤 관련 상태
    const [hasMore, setHasMore] = useState(true);
    // 페이지 번호 상태
    const [page, setPage] = useState(0);

    // 게임 데이터 로드 함수
    // page가 변경될 때마다 호출되도록 useCallback 사용
    const loadGameData = useCallback(() => {
        // API에서 데이터 가져오기
        getGameList(page).then(data => {
            // undefined가 아닐 때만 체크 진행
            if (data !== undefined) {
                if (Array.isArray(data) && data.length > 0) {
                    // console.log("데이터 로드됨:", data);
                    setGames(prev => [...prev, ...data]);
                    setPage(prevPage => prevPage + 1);
                    if (data.length < 10) {
                        setHasMore(false); // 10개 미만이면 더 없음
                    }
                } else {
                    setHasMore(false);
                }
            } else {
                // console.log("데이터가 undefined임");
                // undefined일 경우 아무 처리 안 함 (hasMore 상태 유지)
            }
        });
    }, [page]);
    // 초기 데이터 로딩
    useEffect(() => {
        loadGameData();
    }, [loadGameData]);

    // 게임 등록 페이지로 이동
    const handleRegistClick = () => {
        window.location.href = `${process.env.PUBLIC_URL}/hobby/game/regist`;
    };

    // 카드 클릭 시 상세 페이지로 이동
    const handleCardClick = (gameId) => {
        window.location.href = `${process.env.PUBLIC_URL}/hobby/game/${gameId}`;
    };

    return (
        <div className="game-page-container flex flex-col items-center w-full">
            <div className="flex justify-between items-center w-full max-w-2xl mb-4">
                <h1 className="text-2xl font-bold">플레이한 게임 목록</h1>
                <button
                    className="px-4 py-2 bg-myPointColor-300 rounded hover:bg-myPointColor-500 transition border border-myPointColor-600"
                    onClick={handleRegistClick}
                >
                    게임 등록
                </button>
            </div>

            <div className="w-full max-w-2xl mb-4 text-myFontColor-950">
            <InfiniteScroll 
                dataLength={games.length}
                next={loadGameData}
                hasMore={hasMore}
                loader={<h4>로딩중...</h4>}
                endMessage={<p className="text-center">더 이상 데이터가 없습니다</p>}
                scrollThreshold={0.9}
            >
                <div className="game-list flex flex-col items-center w-full overflow-visible">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className="game-card flex flex-row items-center border border-myFontColor-300 rounded-lg p-4 w-[95%] my-2
                            bg-white shadow-sm 
                            min-h-[160px] max-h-[160px] box-border
                            transition-transform duration-200 ease-in-out hover:scale-105 hover:z-10 relative cursor-pointer"
                            onClick={() => handleCardClick(game.id)}
                        >
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold mb-2">{game.name}</h2>
                                <p className="text-myFontColor-400 m-0">{game.company}</p>
                                <p className="text-myFontColor-400 m-0">{game.type}</p>
                                <p className="text-myFontColor-400 m-0">{game.platform}</p>
                                <p className="text-myFontColor-400 m-0">{game.price}원</p>
                            </div>
                            {/* 서버에 이미지 요청 */}
                            {game.image && (
                                <img
                                    className="w-32 h-32 object-cover ml-4 rounded"
                                    alt={game.name}
                                    src={getImageURL(game.image)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
            </div>
        </div>
    );
}

export default GameListPage;