import { postItRegist } from "../../api/StudyAPI";
import Swal from "sweetalert2";
import React, { useState } from 'react';
import RichTextEditor from "../../components/container/RichTextEditor";
import {getCommon, postCommonRegist} from '../../api/MainAPI';

const ItRegistPage = () => {
    // 장르 가져오기 getCommon
    const [itTypes, setItTypes] = React.useState([]); // 모든 장르
    const [itTypeReload, setItTypeReload] = React.useState(false); // 장르 재호출용
    const [itTypeSelect, setItTypeSelect] = React.useState(""); // 선택된 장르
    const [itTypeInput, setItTypeInput] = React.useState("");
    React.useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await getCommon(1/*select용*/, 3/*공부 유형*/);
                // console.log('유형 목록:', res);
                if(res) {
                    const names = res.map(item => item.name);
                    // console.log('유형 이름들:', names);
                    setItTypes(prev => {
                        // 기존 장르와 합치고 중복 제거
                        const combined = Array.from(new Set([...prev, ...names]));
                        return combined;
                    });
                }
            } catch (err) {
                console.error('유형 목록을 가져오는데 실패했습니다.', err);
            }
        };
        fetchGenres();
    }, [itTypeReload]);

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

        // JSON 데이터를 studyDTO라는 이름으로 추가
        const studyData = {
            title: form.itTitle.value,
            type: form.itType.value,
            content: editorContent,
            tags: form.itTags.value
        };

        try {
            await postItRegist(studyData);
            await Swal.fire({
                icon: 'success',
                title: '등록이 완료되었습니다.',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = `${process.env.PUBLIC_URL}/study/it`;
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
            <h2 className="regist-title">IT 공부 등록</h2>
            <button
                type="button"
                className="regist-list mr-auto"
                onClick={() => window.location.href = `${process.env.PUBLIC_URL}/study/it`}
            >
                목록
            </button>
            <form className="regist-form" onSubmit={handleSubmit}>
                <div className="regist-field">
                    <label htmlFor="itTitle" className="regist-label">
                        IT 제목 <span className="regist-required">*</span>
                    </label>
                    <input type="text" id="itTitle" name="itTitle" placeholder="IT 제목을 입력하세요" className="regist-input" required />
                </div>
                <div className="regist-field">
                    <label htmlFor="itType" className="regist-label">
                        IT 유형
                    </label>
                    <div className="flex gap-2 items-center">
                        <select
                            id="itType"
                            name="itType"
                            className="regist-input regist-select"
                            value={itTypeSelect}
                            onChange={e => setItTypeSelect(e.target.value)}
                            required
                        >
                            {itTypes.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                            <option value="__add_new">새 유형 추가...</option>
                        </select>
                        {itTypeSelect === "__add_new" && (
                            <>
                                <input
                                    type="text"
                                    placeholder="새 유형 입력"
                                    value={itTypeInput}
                                    onChange={e => setItTypeInput(e.target.value)}
                                    className="regist-input w-28"
                                />
                                <button
                                    type="button"
                                    className="regist-submit"
                                    onClick={() => {
                                        const trimmed = itTypeInput.trim();
                                        if(trimmed && !itTypes.includes(trimmed)) {
                                            // 새 유형 추가
                                            postCommonRegist(1/*select용*/, 3/*공부유형*/, itTypes.length + 1/*ID*/, trimmed);
                                            // 유형 재호출
                                            setItTypeReload(!itTypeReload);
                                            // 입력 초기화 및 선택
                                            setItTypes([...itTypes, trimmed]);
                                            // 선택 초기화
                                            setItTypeSelect(trimmed);
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
                    <label htmlFor="itContents" className="regist-label">
                        IT 내용
                    </label>
                    <RichTextEditor value={editorContent} onChange={handleEditorChange} />
                </div>
                <div className="regist-field">
                    <label htmlFor="itTags" className="regist-label">
                        IT 태그
                    </label>
                    <textarea id="itTags" name="itTags" placeholder="#태그 #태그" rows={2} className="regist-textarea" />
                </div>
                <div className="regist-row">
                    <button type="submit" className="regist-submit mr-auto">
                        등록하기
                    </button>
                    <button
                        type="button"
                        className="regist-cancel ml-auto"
                        onClick={() => window.location.href = `${process.env.PUBLIC_URL}/study/it`}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ItRegistPage;