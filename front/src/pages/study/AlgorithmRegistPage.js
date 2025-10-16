import { postAlgorithmRegist } from "../../api/StudyAPI";
import Swal from "sweetalert2";
import React, { useState } from 'react';
import RichTextEditor from "../../components/container/RichTextEditor";

const AlgorithmRegistPage = () => {
    // Rich Text Editor 내용 상태
    const [editorContent, setEditorContent] = useState('');
    // Rich Text Editor 내용 핸들러
    const handleEditorChange = (content) => {
        setEditorContent(content);
        console.log("Editor Content:", content); // 디버그용 출력
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
//        const formData = new FormData();

        // console.log("Editor Content:", editorContent); // 디버그용 출력

        // JSON 데이터를 studyDTO라는 이름으로 추가
        const studyData = {
            title: form.algorithmTitle.value,
            // type: form.algorithmType.value,
            content: editorContent,
            // tags: form.algorithmTags.value
        };

        try {
            await postAlgorithmRegist(studyData);
            await Swal.fire({
                icon: 'success',
                title: '등록이 완료되었습니다.',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = `${process.env.PUBLIC_URL}/study/algorithm`;
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: '등록에 실패했습니다.',
                text: '다시 시도해 주세요.',
                confirmButtonText: '확인'
            });
        }
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
                    <label htmlFor="algorithmTitle" className="regist-label">
                        알고리즘 제목 <span className="regist-required">*</span>
                    </label>
                    <input type="text" id="algorithmTitle" name="algorithmTitle" placeholder="알고리즘 제목을 입력하세요" className="regist-input" required />
                </div>
                <div className="regist-field">
                    <label htmlFor="algorithmType" className="regist-label">
                        알고리즘 유형
                    </label>
                    {/* 도건 : 공부 유형 들어가야 함 */}
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
                    <RichTextEditor value={editorContent} onChange={handleEditorChange} />
                </div>
                <div className="regist-field">
                    <label htmlFor="algorithmTags" className="regist-label">
                        알고리즘 태그
                    </label>
                    {/* 도건 : 공부 태그 들어가야 함 */}
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