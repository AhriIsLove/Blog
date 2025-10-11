import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetail, deleteGame } from '../../api/HobbyAPI';
import LoginComponent from '../../components/container/LoginComponent';
import { getImageURL } from '../../api/MainAPI';

const GamePage = () => {
    // useParams 훅으로 URL 파라미터 가져오기
    const { gameId } = useParams();
    const [game, setGame] = React.useState({
        id: gameId,
        name: '', 
        type: '', 
        company: '', 
        platform: '',
        playTime: '', 
        lastPlayDate: '', 
        price: '', 
        buyPrice: '', 
        review: '',
        tags: ''
    });
    // 권한 로그인 모달 상태
    const [showLogin, setShowLogin] = React.useState(false);
    // 삭제 대기 상태
    const [pendingDelete, setPendingDelete] = React.useState(false);

    // 게임 상세 정보
    useEffect(() => {
        // console.log("gameId:", gameId);
        getGameDetail(gameId).then(data => {
            if (data !== undefined) {
                setGame(data);
                console.log("게임 데이터:", data);
            } else {
                // console.log("데이터가 undefined임");
            }
        });
    }, [gameId]);

    // 삭제 확인 및 실제 삭제 함수
    const handleDeleteGameConfirm = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            const result = await deleteGame(game.id);
            if(result) {
                alert("삭제되었습니다.");
                window.location.href = `${process.env.PUBLIC_URL}/hobby/game`;
            } else {
                alert("삭제에 실패했습니다.");
            }
        }
    };

    // 로그인 모달이 닫힌 후, 권한이 admin이고 삭제 대기중이면 삭제 진행
    useEffect(() => {
        if (!showLogin && pendingDelete && sessionStorage.getItem("auth") === "admin") {
            (async () => {
                await handleDeleteGameConfirm();
                setPendingDelete(false);
            })();
        } else if (!showLogin && pendingDelete) {
            // 로그인 실패 또는 취소 시 대기 해제
            setPendingDelete(false);
        }
    }, [showLogin, pendingDelete, game.id]);

    // 게임 상세 페이지
    return (
        <div className="regist-container">
            {/* <div>Game ID: {gameId}</div> */}
            {game === undefined ? (
                <div className="loading">불러오는 중...</div>
            ) : (
                <div>
                    <h2 className="regist-title">게임 상세보기</h2>
                    <button
                        type="button"
                        className="regist-list mr-auto"
                        onClick={() => window.location.href = `${process.env.PUBLIC_URL}/hobby/game`}
                    >
                        목록
                    </button>
                    <div className='regist-form'>
                        <div className="regist-field">
                            <label htmlFor="gameName" className="regist-label">
                                게임 이름
                            </label>
                            <input type="text" id="gameName" name="gameName" placeholder="게임 이름을 입력하세요" className="regist-input" value={game.name ?? ''} readOnly/>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameImage" className="regist-label">
                                게임 대표 이미지
                            </label>
                            {game.image && (
                                <img
                                    className="w-32 h-32 object-cover mx-auto rounded"
                                    alt={game.name}
                                    src={getImageURL(game.image)}
                                />
                            )}
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameType" className="regist-label">
                                게임 장르
                            </label>
                            <select id="gameType" name="gameType" className="regist-input regist-select" value={game.type ?? ''} readOnly>
                                <option value="">장르를 선택하세요</option>
                                <option value="MOBA">MOBA</option>
                                <option value="액션">액션</option>
                                <option value="어드벤처">어드벤처</option>
                                <option value="RPG">RPG</option>
                                <option value="시뮬레이션">시뮬레이션</option>
                                <option value="스포츠">스포츠</option>
                                <option value="퍼즐">퍼즐</option>
                                <option value="전략">전략</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameCompany" className="regist-label">
                                게임 개발사
                            </label>
                            <input type="text" id="gameCompany" name="gameCompany" placeholder="Riot Games, Nexon ..." className="regist-input" value={game.company ?? ''} readOnly/>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gamePlatform" className="regist-label">
                                게임 플랫폼
                            </label>
                            <select id="gamePlatform" name="gamePlatform" className="regist-input regist-select" value={game.platform ?? ''} readOnly>
                                <option value="">플랫폼을 선택하세요</option>
                                <option value="PC">PC</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Nintendo">Nintendo</option>
                                <option value="PlayStation">PlayStation</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gamePlayTime" className="regist-label">
                                게임 플레이타임(시간)
                            </label>
                            <div className="regist-row">
                                <input type="text" id="gamePlayTime" name="gamePlayTime" placeholder="게임 플레이타임을 입력하세요" className="regist-input" value={game.playTime ?? ''} readOnly/>
                                <span className="regist-unit">h</span>
                            </div>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameLastPlay" className="regist-label">
                                마지막 플레이
                            </label>
                            <input type="date" id="gameLastPlay" name="gameLastPlay" placeholder="마지막 플레이" className="regist-input" value={game.lastPlayDate} readOnly/>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gamePrice" className="regist-label">
                                게임 가격
                            </label>
                            <div className="regist-row">
                                <input type="text" id="gamePrice" name="gamePrice" placeholder="게임 가격을 입력하세요" className="regist-input" value={game.price ?? ''} readOnly/>
                                <span className="regist-unit">₩</span>
                            </div>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameBuyPrice" className="regist-label">
                                게임 구매 가격
                            </label>
                            <div className="regist-row">
                                <input type="text" id="gameBuyPrice" name="gameBuyPrice" placeholder="게임 구매 가격을 입력하세요" className="regist-input" value={game.buyPrice ?? ''} readOnly/>
                                <span className="regist-unit">₩</span>
                            </div>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameReview" className="regist-label">
                                게임 리뷰
                            </label>
                            <textarea id="gameReview" name="gameReview" placeholder="게임 리뷰을 입력하세요" rows={4} className="regist-textarea" value={game.review ?? ''} readOnly/>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameTags" className="regist-label">
                                게임 태그
                            </label>
                            <textarea id="gameTags" name="gameTags" placeholder="게임 태그을 입력하세요" rows={4} className="regist-textarea" value={game.tags ?? ''} readOnly/>
                        </div>
                        <div className="regist-row">
                            <button type="button" className="regist-submit mr-auto" onClick={() => window.location.href = `${process.env.PUBLIC_URL}/hobby/game/edit/${game.id}`}>
                                수정
                            </button>
                            <button type="button" className="regist-delete" onClick={ async () => {
                                if (sessionStorage.getItem("auth") !== "admin") {
                                    setShowLogin(true);
                                    setPendingDelete(true); // 삭제 창 띄우기 위해 대기 상태로 설정(showLogin가 false가 되는 시점에 useEffect에서 삭제 진행)
                                    return;
                                }
                                // 삭제 확인
                                await handleDeleteGameConfirm();
                            }}>
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
            )}
        {/* 로그인 모달 */}
        {showLogin && (
            <LoginComponent onClose={() => setShowLogin(false)} />
        )}
    </div>
    );
}

export default GamePage;