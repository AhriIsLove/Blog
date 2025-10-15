import React, { useState } from 'react';

const AlgorithmRegistPage = () => {
    const [value, setValue] = useState('');
  
    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const form = e.target;
        // const formData = new FormData();

        // // JSON 데이터를 gameDTO라는 이름으로 추가
        // const gameData = {
        //     name: form.gameName.value,
        //     type: form.gameType.value,
        //     company: form.gameCompany.value,
        //     platform: form.gamePlatform.value,
        //     playTime: form.gamePlayTime.value,
        //     lastPlayDate: form.gameLastPlay.value,
        //     price: form.gamePrice.value,
        //     buyPrice: form.gameBuyPrice.value,
        //     review: form.gameReview.value,
        //     tags: form.gameTags.value
        // };
        // formData.append("gameDTO", new Blob([JSON.stringify(gameData)], {
        //     type: "application/json"
        // }));
        // formData.append('imageFile', form.gameImage.files[0] || '');

        // // console.log('폼 데이터:', Array.from(formData.entries()));

        // try {
        //     await postGameRegist(formData);
        //     await Swal.fire({
        //         icon: 'success',
        //         title: '등록이 완료되었습니다.',
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     window.location.href = `${process.env.PUBLIC_URL}/hobby/game`;
        // } catch (err) {
        //     await Swal.fire({
        //         icon: 'error',
        //         title: '등록에 실패했습니다.',
        //         text: '다시 시도해 주세요.',
        //         confirmButtonText: '확인'
        //     });
        // }
    };
    
    return (
        <div className="regist-container">
            <h2 className="regist-title">알고리즘 공부 등록</h2>
            <button
                type="button"
                className="regist-list mr-auto"
                onClick={() => window.location.href = `${process.env.PUBLIC_URL}/study/algorithm`}
            >
                목록
            </button>
            <form className="regist-form" onSubmit={handleSubmit}>
                <div className="regist-field">
                    <label htmlFor="algorithmName" className="regist-label">
                        알고리즘 이름 <span className="regist-required">*</span>
                    </label>
                    <input type="text" id="algorithmName" name="algorithmName" placeholder="알고리즘 이름을 입력하세요" className="regist-input" required />
                </div>
                <div className="regist-field">
                    <label htmlFor="algorithmType" className="regist-label">
                        알고리즘 유형
                    </label>
                    {/* <div className="flex gap-2 items-center">
                        <select
                            id="algorithmType"
                            name="algorithmType"
                            className="regist-input regist-select"
                            value={algorithmTypeSelect}
                            onChange={e => setAlgorithmTypeSelect(e.target.value)}
                            required
                        >
                            {algorithmTypes.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                            <option value="__add_new">새 유형 추가...</option>
                        </select>
                        {algorithmTypeSelect === "__add_new" && (
                            <>
                                <input
                                    type="text"
                                    placeholder="새 유형 입력"
                                    value={algorithmTypeInput}
                                    onChange={e => setAlgorithmTypeInput(e.target.value)}
                                    className="regist-input w-28"
                                />
                                <button
                                    type="button"
                                    className="regist-submit"
                                    onClick={() => {
                                        const trimmed = algorithmTypeInput.trim();
                                        if(trimmed && !algorithmTypes.includes(trimmed)) {
                                            // 새 유형 추가
                                            
                                            // 유형 재호출
                                            setAlgorithmTypeReload(!algorithmTypeReload);
                                            // 입력 초기화 및 선택
                                            setAlgorithmTypes([...algorithmTypes, trimmed]);
                                            // 선택 초기화
                                            setAlgorithmTypeSelect(trimmed);
                                        }
                                    }}
                                >
                                    +
                                </button>
                            </>
                        )}
                    </div> */}
                </div>
                <div className="regist-field">
                    <label htmlFor="algorithmContents" className="regist-label">
                        알고리즘 내용
                    </label>
                    {/* 도건 : 여기에 리치 텍스트 에디터 들어감 */}
                </div>
                <div className="regist-field">
                    <label htmlFor="algorithmTags" className="regist-label">
                        알고리즘 태그
                    </label>
                    <textarea id="algorithmTags" name="algorithmTags" placeholder="#태그 #태그" rows={2} className="regist-textarea" />
                </div>
                <div className="regist-row">
                    <button type="submit" className="regist-submit mr-auto">
                        등록하기
                    </button>
                    <button
                        type="button"
                        className="regist-cancel ml-auto"
                        onClick={() => window.location.href = `${process.env.PUBLIC_URL}/study/algorithm`}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AlgorithmRegistPage;