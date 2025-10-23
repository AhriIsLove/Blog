import React, { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAlgorithmDetail, deleteAlgorithm } from '../../api/StudyAPI';
import LoginComponent from '../../components/container/LoginComponent';

const AlgorithmPage = () => {
    const [algorithm, setAlgorithm] = React.useState({
            title: '', 
            type: '', 
            content: '',
            tags: ''
        });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAlgorithmDetail(id).then(data => {
            if (data !== undefined) {
                setAlgorithm(data);
                console.log('알고리즘 상세 데이터:', data);
            }
        });
    }, [id]);

    // 권한 로그인 모달 상태
    const [showLogin, setShowLogin] = React.useState(false);
    // 삭제 대기 상태
    const [pendingDelete, setPendingDelete] = React.useState(false);
    // 삭제 확인 및 실제 삭제 함수
    const handleDeleteStudyConfirm = useCallback(async () => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            const result = await deleteAlgorithm(algorithm.id);
            if(result) {
                alert("삭제되었습니다.");
                window.location.href = `${process.env.PUBLIC_URL}/study/algorithm`;
            } else {
                alert("삭제에 실패했습니다.");
            }
        }
    }, [algorithm.id]);
    // 로그인 모달이 닫힌 후, 권한이 admin이고 삭제 대기중이면 삭제 진행
    useEffect(() => {
        if (!showLogin && pendingDelete && sessionStorage.getItem("auth") === "admin") {
            (async () => {
                await handleDeleteStudyConfirm();
                setPendingDelete(false);
            })();
        } else if (!showLogin && pendingDelete) {
            // 로그인 실패 또는 취소 시 대기 해제
            setPendingDelete(false);
        }
    }, [showLogin, pendingDelete, algorithm.id, handleDeleteStudyConfirm]);

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-4xl px-4">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-gray-900">{algorithm?.title}</h1>
                    <div className="flex gap-2">
                        <button className="regist-list mb-0" onClick={() => navigate(-1)}>목록</button>
                        <button className="regist-submit" onClick={() => navigate(`/study/algorithm/edit/${id}`)}>수정</button>
                        <button className="regist-delete ml-0" onClick={ async () => {
                                if (sessionStorage.getItem("auth") !== "admin") {
                                    setShowLogin(true);
                                    setPendingDelete(true); // 삭제 창 띄우기 위해 대기 상태로 설정(showLogin가 false가 되는 시점에 useEffect에서 삭제 진행)
                                    return;
                                }
                                // 삭제 확인
                                await handleDeleteStudyConfirm();
                            }}>삭제</button>
                    </div>
                </div>

                <div className="mb-4 flex items-center gap-4">
                    <span className="inline-block bg-myPointColor-100 text-myPointColor-700 px-3 py-1 rounded-full text-sm font-medium">{algorithm?.type}</span>
                </div>

                <div className="bg-white shadow rounded-lg p-6 prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: algorithm?.content || '<p>내용이 없습니다.</p>' }} />
                </div>

                <div className="mb-4 flex items-center gap-4">
                    {algorithm.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {(algorithm.tags || '')
                                .split('#')
                                .filter(Boolean)
                                .map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block bg-myPointColor-100 text-myPointColor-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        #{t}
                                    </span>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        {/* 로그인 모달 */}
        {showLogin && (
            <LoginComponent onClose={() => setShowLogin(false)} />
        )}
        </div>
    );
}

export default AlgorithmPage;