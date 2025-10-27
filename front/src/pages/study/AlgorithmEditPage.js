import { putAlgorithmEdit, getAlgorithmDetail } from "../../api/StudyAPI";
import Swal from "sweetalert2";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RichTextEditor from "../../components/container/RichTextEditor";
import {getCommon, postCommonRegist} from '../../api/MainAPI';

const AlgorithmEditPage = () => {
    // useParams 훅으로 URL 파라미터 가져오기
    const { algorithmId } = useParams();
    const [algorithm, setAlgorithm] = React.useState({
        id: algorithmId,
        title: '', 
        type: '', 
        content: '', 
        tags: ''
    });

    // 알고리즘 상세 정보
    useEffect(() => {
        // console.log("algorithmId:", algorithmId);
        getAlgorithmDetail(algorithmId).then(data => {
            if (data !== undefined) {
                // 알고리즘 정보 설정
                setAlgorithm(data);
                setAlgorithmTypeSelect(data.type);
                setEditorContent(data.content);
            } else {
                // console.log("데이터가 undefined임");
            }
        });
    }, [algorithmId]);

    // 장르 가져오기 getCommon
    const [algorithmTypes, setAlgorithmTypes] = React.useState([]); // 모든 장르
    const [algorithmTypeReload, setAlgorithmTypeReload] = React.useState(false); // 장르 재호출용
    const [algorithmTypeSelect, setAlgorithmTypeSelect] = React.useState(""); // 선택된 장르
    const [algorithmTypeInput, setAlgorithmTypeInput] = React.useState("");
    React.useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await getCommon(1/*select용*/, 3/*공부 유형*/);
                // console.log('유형 목록:', res);
                if(res) {
                    const names = res.map(item => item.name);
                    // console.log('유형 이름들:', names);
                    setAlgorithmTypes(prev => {
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
    }, [algorithmTypeReload]);

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
        const formData = new FormData();

        // JSON 데이터를 studyDTO라는 이름으로 추가
        const studyData = {
            id: algorithmId,
            title: form.algorithmTitle.value,
            type: form.algorithmType.value,
            content: editorContent,
            tags: form.algorithmTags.value
        };
        formData.append("studyDTO", new Blob([JSON.stringify(studyData)], {
            type: "application/json"
        }));

        try {
            await putAlgorithmEdit(formData);
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
                    <input type="text" id="algorithmTitle" name="algorithmTitle" placeholder="알고리즘 제목을 입력하세요" className="regist-input" required
                    value={algorithm.title ?? ''} onChange={(e) => setAlgorithm({ ...algorithm, title: e.target.value })} />
                </div>
                <div className="regist-field">
                    <label htmlFor="algorithmType" className="regist-label">
                        알고리즘 유형
                    </label>
                    <div className="flex gap-2 items-center">
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
                                            postCommonRegist(1/*select용*/, 3/*공부유형*/, algorithmTypes.length + 1/*ID*/, trimmed);
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
                    </div>
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
                    <textarea id="algorithmTags" name="algorithmTags" placeholder="#태그 #태그" rows={2} className="regist-textarea" value={algorithm.tags ?? ''} onChange={(e) => setAlgorithm({ ...algorithm, tags: e.target.value })} />
                </div>
                <div className="regist-row">
                    <button type="submit" className="regist-submit mr-auto">
                        수정하기
                    </button>
                    <button
                        type="button"
                        className="regist-cancel ml-auto"
                        onClick={() => window.location.href = `${process.env.PUBLIC_URL}/study/it/${algorithmId}`}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AlgorithmEditPage;