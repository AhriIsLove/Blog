import { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { getItList } from "../../api/StudyAPI";

const ItListPage = () => {
    // IT 목록
    const [its, setIts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    // 페이지 번호 상태 (0-based)
    const [page, setPage] = useState(0);
    // const [size, setSize] = useState(10);
    const [size] = useState(10);
    const [hasMore, setHasMore] = useState(false);

    // IT 데이터 로드 함수
    // page가 변경될 때마다 호출되도록 useCallback 사용
    const loadItData = useCallback(() => {
        // API에서 데이터 가져오기
        getItList(page, size).then(data => {
            if(data === undefined){
                // console.log('데이터 형식이 올바르지 않습니다:', data);
                setIts([]);
                setHasMore(false);
            }
            else{
                // console.log('데이터 로드 성공:', data);
                setIts(data.items);
                setTotalCount(data.totalCount);
                setTotalPages(data.totalPages);
                setHasMore(page + 1 < data.totalPages);
            }
        });
    }, [page, size]);
    // 초기 데이터 로딩
    useEffect(() => {
        loadItData();
    }, [loadItData]);

    const navigate = useNavigate();

    // IT 선택 시 상세 페이지로 이동
    const handleRowClick = (id) => {
        navigate(`/study/it/${id}`);
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
            <div className="pb-3 text-5xl underline underline-offset-8">IT</div>
            <div className="w-full flex justify-end">
                <button
                    className="my-4 px-4 py-2 bg-myPointColor-700 text-white rounded hover:bg-myPointColor-400 transition-colors"
                    onClick={() => navigate('/study/it/regist')}
                >
                    새 IT 공부 등록
                </button>
            </div>
            {/* 페이징 컨트롤 */}
            <div className="w-full flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">총 {totalCount} 항목 (페이지 {page + 1})</div>
                <div className="flex items-center gap-2">
                    <button
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        onClick={() => setPage(p => Math.max(0, p - 1))}
                        disabled={page === 0}
                    >
                        Prev
                    </button>
                    <button
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        onClick={() => {
                            // go to next page but not beyond totalPages-1
                            setPage(p => {
                                const maxIndex = Math.max(0, (totalPages ? totalPages - 1 : (hasMore ? p + 1 : p)));
                                const next = Math.min(maxIndex, p + 1);
                                return next;
                            });
                        }}
                        disabled={!hasMore}
                    >
                        Next
                    </button>
                    <div className="flex items-center gap-1">
                        <input
                            type="number"
                            name="pageInput"
                            // value={page + 1}
                            min={1}
                            className="w-20 px-2 py-1 border rounded"
                            placeholder="page"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    const v = parseInt(e.target.value, 10);
                                    if (!isNaN(v) && v > 0) {
                                        const target = Math.min(Math.max(1, v), Math.max(1, totalPages || v));
                                        setPage(target - 1);
                                        e.target.value = target;
                                    }
                                }
                            }}
                        />
                        <button className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" onClick={() => {
                            const pageInput = document.querySelector('input[name="pageInput"]');
                            const v = parseInt(pageInput.value, 10);
                            if (!isNaN(v) && v > 0) {
                                const target = Math.min(Math.max(1, v), Math.max(1, totalPages || v));
                                setPage(target - 1);
                                pageInput.value = target;
                            }
                        }}>이동</button>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-auto mt-4">
                <table className="min-w-full bg-white rounded-lg shadow-md border border-myPointColor-100" cellPadding="12">
                    <thead>
                        <tr className="bg-myPointColor-500 text-white">
                            <th className="py-3 px-4 text-center w-16">#</th>
                            <th className="py-3 px-4 text-center w-40">타입</th>
                            <th className="py-3 px-4 text-center">제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        {its.map((algo, index) => (
                            <tr
                                key={algo.id}
                                role="button"
                                tabIndex={0}
                                className="cursor-pointer odd:bg-white even:bg-gray-50 hover:bg-myPointColor-50"
                                onClick={() => handleRowClick(algo.id)}
                                onKeyDown={(e) => handleRowKeyDown(e, algo.id)}
                            >
                                <td className="py-3 px-4 text-center align-middle">{index + 1}</td>
                                <td className="py-3 px-4 text-center align-middle text-sm text-gray-700">{algo.type}</td>
                                <td className="py-3 px-4 align-middle text-gray-900">{algo.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItListPage;