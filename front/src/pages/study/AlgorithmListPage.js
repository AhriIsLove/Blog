import { useNavigate } from 'react-router-dom';

const AlgorithmListPage = () => {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        // 이동 경로는 프로젝트 라우터에 맞게 변경하세요.
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
                        <th>작성일</th>
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
                        <td>2024-06-01</td>
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
                        <td>2024-06-02</td>
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
                        <td>2024-06-03</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AlgorithmListPage;