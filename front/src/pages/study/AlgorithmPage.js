import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAlgorithmDetail } from '../../api/StudyAPI';

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
            }
        });
    }, [id]);

    const tags = algorithm.tags ? algorithm.tags.split(',').map(t => t.trim()).filter(Boolean) : [];

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-4xl px-4">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-gray-900">{algorithm?.title}</h1>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-myPointColor-700 text-white rounded" onClick={() => navigate(-1)}>목록</button>
                        <button className="px-3 py-1 bg-white border rounded" onClick={() => navigate(`/study/algorithm/edit/${id}`)}>수정</button>
                    </div>
                </div>

                <div className="mb-4 flex items-center gap-4">
                    <span className="inline-block bg-myPointColor-100 text-myPointColor-700 px-3 py-1 rounded-full text-sm font-medium">{algorithm?.type}</span>
                </div>

                <div className="bg-white shadow rounded-lg p-6 prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: algorithm?.content || '<p>내용이 없습니다.</p>' }} />
                </div>

                {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">#{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AlgorithmPage;