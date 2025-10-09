import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGameDetail, putGameEdit } from '../../api/HobbyAPI';
import { getImageURL } from '../../api/MainAPI';
import Swal from 'sweetalert2';

const GameEditPage = () => {
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

    // 게임 상세 정보
    useEffect(() => {
        // console.log("gameId:", gameId);
        getGameDetail(gameId).then(data => {
            if (data !== undefined) {
                setGame(data);
                if (data.image) {
                    const imageUrl = getImageURL(data.image);
                    setImagePreview(imageUrl);
                }
                // console.log("게임 데이터:", data);
            } else {
                // console.log("데이터가 undefined임");
            }
        });
    }, [gameId]);

    // 이미지 미리보기 상태 및 핸들러
    const [imagePreview, setImagePreview] = React.useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        // JSON 데이터를 gameDTO라는 이름으로 추가
        const gameData = {
            id: gameId,
            name: form.gameName.value,
            type: form.gameType.value,
            company: form.gameCompany.value,
            platform: form.gamePlatform.value,
            playTime: form.gamePlayTime.value,
            lastPlayDate: form.gameLastPlay.value,
            price: form.gamePrice.value,
            buyPrice: form.gameBuyPrice.value,
            review: form.gameReview.value,
            tags: form.gameTags.value
        };
        formData.append("gameDTO", new Blob([JSON.stringify(gameData)], {
            type: "application/json"
        }));
        formData.append('imageFile', form.gameImage.files[0] || '');

        // console.log('폼 데이터:', Array.from(formData.entries()));

        try {
            await putGameEdit(formData);
            await Swal.fire({
                icon: 'success',
                title: '수정이 완료되었습니다.',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = `${process.env.PUBLIC_URL}/hobby/game`;
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: '수정에 실패했습니다.',
                text: '다시 시도해 주세요.',
                confirmButtonText: '확인'
            });
        }
    };

    // 게임 상세 페이지
    return (
        <div className="regist-container">
            {/* <div>Game ID: {gameId}</div> */}
            {game === undefined ? (
                <div className="loading">불러오는 중...</div>
            ) : (
                <div>
                    <h2 className="regist-title">게임 수정</h2>
                    <button
                        type="button"
                        className="regist-list mr-auto"
                        onClick={() => window.location.href = `${process.env.PUBLIC_URL}/hobby/game`}
                    >
                        목록
                    </button>
                    <form className='regist-form' onSubmit={handleSubmit}>
                        <div className="regist-field">
                            <label htmlFor="gameName" className="regist-label">
                                게임 이름
                            </label>
                            <input type="text" id="gameName" name="gameName" placeholder="게임 이름을 입력하세요" className="regist-input" value={game.name ?? ''} onChange={(e) => setGame({ ...game, name: e.target.value })} />
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameImage" className="regist-label">
                                게임 대표 이미지
                            </label>
                            <div className="flex items-center justify-center">
                                <input
                                    type="file"
                                    id="gameImage"
                                    name="gameImage"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="gameImage" className="regist-input regist-file">이미지 등록</label>
                                <button type="button" className="regist-delete" onClick={() => setImagePreview(null)}>
                                    X
                                </button>
                            </div>
                            {imagePreview && (
                                <img className='regist-image-preview' src={imagePreview} alt="미리보기"/>
                            )}
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameType" className="regist-label">
                                게임 장르
                            </label>
                            <select id="gameType" name="gameType" className="regist-input regist-select" value={game.type ?? ''} onChange={(e) => setGame({ ...game, type: e.target.value })}>
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
                            <input type="text" id="gameCompany" name="gameCompany" placeholder="Riot Games, Nexon ..." className="regist-input" value={game.company ?? ''} onChange={(e) => setGame({ ...game, company: e.target.value })} />
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gamePlatform" className="regist-label">
                                게임 플랫폼
                            </label>
                            <select id="gamePlatform" name="gamePlatform" className="regist-input regist-select" value={game.platform ?? ''} onChange={(e) => setGame({ ...game, platform: e.target.value })}>
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
                                <input type="text" id="gamePlayTime" name="gamePlayTime" placeholder="게임 플레이타임을 입력하세요" className="regist-input" value={game.playTime ?? ''} onChange={(e) => setGame({ ...game, playTime: e.target.value })} />
                                <span className="regist-unit">h</span>
                            </div>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameLastPlay" className="regist-label">
                                마지막 플레이
                            </label>
                            <input type="date" id="gameLastPlay" name="gameLastPlay" placeholder="마지막 플레이" className="regist-input" value={game.lastPlayDate ?? ''} onChange={(e) => setGame({ ...game, lastPlayDate: e.target.value })} />
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gamePrice" className="regist-label">
                                게임 가격
                            </label>
                            <div className="regist-row">
                                <input type="text" id="gamePrice" name="gamePrice" placeholder="게임 가격을 입력하세요" className="regist-input" value={game.price ?? ''} onChange={(e) => setGame({ ...game, price: e.target.value })} />
                                <span className="regist-unit">₩</span>
                            </div>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameBuyPrice" className="regist-label">
                                게임 구매 가격
                            </label>
                            <div className="regist-row">
                                <input type="text" id="gameBuyPrice" name="gameBuyPrice" placeholder="게임 구매 가격을 입력하세요" className="regist-input" value={game.buyPrice ?? ''} onChange={(e) => setGame({ ...game, buyPrice: e.target.value })} />
                                <span className="regist-unit">₩</span>
                            </div>
                        </div>
                        <div className="regist-field">
                            <label htmlFor="gameReview" className="regist-label">
                                게임 리뷰
                            </label>
                            <textarea id="gameReview" name="gameReview" placeholder="게임 리뷰을 입력하세요" rows={4} className="regist-textarea" value={game.review ?? ''} onChange={(e) => setGame({ ...game, review: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="gameTags" className="regist-label">
                                게임 태그
                            </label>
                            <textarea id="gameTags" name="gameTags" placeholder="#태그 #태그" rows={2} className="regist-textarea" value={game.tags ?? ''} onChange={(e) => setGame({ ...game, tags: e.target.value })} />
                        </div>
                        <div className="regist-row">
                            <button type="submit" className="regist-submit mr-auto">
                                수정
                            </button>
                            <button
                                type="reset"
                                className="regist-reset"
                                onClick={e => {
                                    e.preventDefault();
                                    // 기존 game 데이터를 다시 불러와서 선택되도록 함
                                    getGameDetail(gameId).then(data => {
                                        if (data !== undefined) {
                                            setGame(data);
                                            if (data.image) {
                                                setImagePreview(getImageURL(data.image));
                                            } else {
                                                setImagePreview(null);
                                            }
                                        }
                                    });
                                }}
                            >
                                초기화
                            </button>
                            <button type='button' className="regist-cancel ml-auto" onClick={() => window.location.href = `${process.env.PUBLIC_URL}/hobby/game/${gameId}`}>
                                취소
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default GameEditPage;