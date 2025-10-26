import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getGameDetail, putGameEdit } from '../../api/HobbyAPI';
import { getImageURL, getCommon, postCommonRegist } from '../../api/MainAPI';
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
                // 게임 정보 설정
                setGame(data);
                // 게임 이미지 미리보기 설정
                if (data.image) {
                    const imageUrl = getImageURL(data.image);
                    setImagePreview(imageUrl);
                }
                setGameTypeSelect(data.type);
                setGamePlatformSelect(data.platform);
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

    // 장르 가져오기 getCommon
    const [gameTypes, setGameTypes] = React.useState([]); // 모든 장르
    const [gameTypeReload, setGameTypeReload] = React.useState(false); // 장르 재호출용
    const [gameTypeSelect, setGameTypeSelect] = React.useState(""); // 선택된 장르
    const [gameTypeInput, setGameTypeInput] = React.useState("");
    React.useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await getCommon(1/*select용*/, 1/*게임장르*/);
                // console.log('장르 목록:', res);
                if(res) {
                    const names = res.map(item => item.name);
                    // console.log('장르 이름들:', names);
                    setGameTypes(prev => {
                        // 기존 장르와 합치고 중복 제거
                        const combined = Array.from(new Set([...prev, ...names]));
                        return combined;
                    });
                }
            } catch (err) {
                console.error('장르 목록을 가져오는데 실패했습니다.', err);
            }
        };
        fetchGenres();
    }, [gameTypeReload]);

    // 플랫폼 가져오기 getCommon
    const [gamePlatforms, setGamePlatforms] = React.useState([]); // 모든 플랫폼
    const [gamePlatformReload, setGamePlatformReload] = React.useState(false); // 플랫폼 재호출용
    const [gamePlatformSelect, setGamePlatformSelect] = React.useState(""); // 선택된 플랫폼
    const [gamePlatformInput, setGamePlatformInput] = React.useState("");
    React.useEffect(() => {
        const fetchPlatforms = async () => {
            try {
                const res = await getCommon(1/*select용*/, 2/*게임플랫폼*/);
                // console.log('플랫폼 목록:', res);
                if(res) {
                    const names = res.map(item => item.name);
                    // console.log('플랫폼 이름들:', names);
                    setGamePlatforms(prev => {
                        // 기존 플랫폼과 합치고 중복 제거
                        const combined = Array.from(new Set([...prev, ...names]));
                        return combined;
                    });
                }
            } catch (err) {
                console.error('플랫폼 목록을 가져오는데 실패했습니다.', err);
            }
        };
        fetchPlatforms();
    }, [gamePlatformReload]);

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
                            <div className="flex gap-2 items-center">
                                <select
                                    id="gameType"
                                    name="gameType"
                                    className="regist-input regist-select"
                                    value={gameTypeSelect}
                                    onChange={e => setGameTypeSelect(e.target.value)}
                                    required
                                >
                                    {gameTypes.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                    <option value="__add_new">새 장르 추가...</option>
                                </select>
                                {gameTypeSelect === "__add_new" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="새 장르 입력"
                                            value={gameTypeInput}
                                            onChange={e => setGameTypeInput(e.target.value)}
                                            className="regist-input w-28"
                                        />
                                        <button
                                            type="button"
                                            className="regist-submit"
                                            onClick={() => {
                                                const trimmed = gameTypeInput.trim();
                                                if(trimmed && !gameTypes.includes(trimmed)) {
                                                    // 새 장르 추가
                                                    postCommonRegist(1/*select용*/, 1/*게임장르*/, gameTypes.length + 1/*ID*/, trimmed);
                                                    // 장르 재호출
                                                    setGameTypeReload(!gameTypeReload);
                                                    // 입력 초기화 및 선택
                                                    setGameTypes([...gameTypes, trimmed]);
                                                    // 선택 초기화
                                                    setGameTypeSelect(trimmed);
                                                }
                                            }}
                                        >
                                            +
                                        </button>
                                    </>
                                )}
                            </div>
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
                            <div className="flex gap-2 items-center">
                                <select
                                    id="gamePlatform"
                                    name="gamePlatform"
                                    className="regist-input regist-select"
                                    value={gamePlatformSelect}
                                    onChange={e => setGamePlatformSelect(e.target.value)}
                                    required
                                >
                                    {gamePlatforms.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                    <option value="__add_new">새 플랫폼 추가...</option>
                                </select>
                                {gamePlatformSelect === "__add_new" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="새 플랫폼 입력"
                                            value={gamePlatformInput}
                                            onChange={e => setGamePlatformInput(e.target.value)}
                                            className="regist-input w-28"
                                        />
                                        <button
                                            type="button"
                                            className="regist-submit"
                                            onClick={() => {
                                                const trimmed = gamePlatformInput.trim();
                                                if(trimmed && !gamePlatforms.includes(trimmed)) {
                                                    // 새 플랫폼 추가
                                                    postCommonRegist(1/*select용*/, 2/*게임플랫폼*/, gamePlatforms.length + 1/*ID*/, trimmed);
                                                    // 플랫폼 재호출
                                                    setGamePlatformReload(!gamePlatformReload);
                                                    // 입력 초기화 및 선택
                                                    setGamePlatforms([...gamePlatforms, trimmed]);
                                                    // 선택 초기화
                                                    setGamePlatformSelect(trimmed);
                                                }
                                            }}
                                        >
                                            +
                                        </button>
                                    </>
                                )}
                            </div>
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