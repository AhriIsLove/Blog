import { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { getAlgorithmList } from "../../api/StudyAPI";

const AlgorithmListPage = () => {
    // 알고리즘 목록
    const [algorithms, setAlgorithms] = useState([]);
    // 페이지 번호 상태
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    // 알고리즘 데이터 로드 함수
    // page가 변경될 때마다 호출되도록 useCallback 사용
    const loadAlgorithmData = useCallback(() => {
        // API에서 데이터 가져오기
        getAlgorithmList(page, size).then(data => {
            if (Array.isArray(data)) {
                setAlgorithms(prev => [...prev, ...data]);
                console.log(data); // 데이터 확인용 로그
            } else {
                console.error('데이터 형식이 올바르지 않습니다:', data);
            }
        });
    }, [page, size]);
    // 초기 데이터 로딩
    useEffect(() => {
        loadAlgorithmData();
    }, [loadAlgorithmData]);

    const navigate = useNavigate();

    // 알고리즘 선택 시 상세 페이지로 이동
    const handleRowClick = (id) => {
        navigate(`/study/algorithm/${id}`);
    };

    const handleRowKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRowClick(id);
        }
    };
    //화면 리턴
    return (
        <div className="w-full flex flex-col items-center">
            <div className="pb-3 text-5xl underline underline-offset-8">알고리즘</div>
            <div className="w-full flex justify-end">
                <button
                    className="mb-4 px-4 py-2 bg-myPointColor-700 text-white rounded hover:bg-myPointColor-400 transition-colors"
                    onClick={() => navigate('/study/algorithm/regist')}
                >
                    새 알고리즘 공부 등록
                </button>
            </div>
            <table className='w-full p-1 border-2 border-myPointColor-900' cellPadding="8">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>타입</th>
                        <th>제목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        role="button"
                        tabIndex={0}
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={() => handleRowClick(1)}
                        onKeyDown={(e) => handleRowKeyDown(e, 1)}
                    >
                        <td>1</td>
                        <td>정리</td>
                        <td>이진 탐색 알고리즘 정리</td>
                    </tr>
                    <tr
                        role="button"
                        tabIndex={0}
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={() => handleRowClick(2)}
                        onKeyDown={(e) => handleRowKeyDown(e, 2)}
                    >
                        <td>2</td>
                        <td>정리</td>
                        <td>DFS와 BFS 차이점</td>
                    </tr>
                    <tr
                        role="button"
                        tabIndex={0}
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={() => handleRowClick(3)}
                        onKeyDown={(e) => handleRowKeyDown(e, 3)}
                    >
                        <td>3</td>
                        <td>정리</td>
                        <td>DP(동적계획법) 기본 개념</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AlgorithmListPage;