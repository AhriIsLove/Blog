import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlgorithmDetail } from '../../api/StudyAPI';

const AlgorithmPage = () => {
    const [algorithm, setAlgorithm] = React.useState({
            title: '', 
            type: '', 
            content: '',
            tags: ''
        });
    const { id } = useParams();

    useEffect(() => {
        getAlgorithmDetail(id).then(data => {
            if (data !== undefined) {
                setAlgorithm(data);
            } else {
                // console.log("데이터가 undefined임");
            }
        });
    }, [id]);

    //화면 리턴
    return (
        <div className="w-full flex flex-col items-center">
            <div className="pb-3 text-5xl">{algorithm?.title}</div>
            <div className="pb-3 text-5xl">{algorithm?.type}</div>
            <div>{algorithm?.content}</div>
            <div>{algorithm?.tags}</div>
        </div>
    );
}

export default AlgorithmPage;