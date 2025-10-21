import axios from "axios";//Terminal : yarn add axios
import { API_SERVER_HOST } from "./MainAPI";

export const prefix = `${API_SERVER_HOST}/study`;

//알고리즘 등록 요청
let isPostAlgorithmRegist = false; // 중복 호출 방지
export const postAlgorithmRegist = async (formData) => {
    if(isPostAlgorithmRegist) return;
    isPostAlgorithmRegist = true;

    try{
        // 요청
        const res = await fetch(`${prefix}/algorithm/regist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        return data;
        // return res.data;
    } catch (error) {
        throw error;
    } finally {
        isPostAlgorithmRegist = false;
    }
};

//알고리즘 목록 요청
let isGetAlgorithmList = false; // 중복 호출 방지
export const getAlgorithmList = async (page=0, size=10) => {
    if(isGetAlgorithmList) return;
    isGetAlgorithmList = true;

    try{
        const res = await axios.get(`${prefix}/algorithm/list`, {
            params: { page, size }
        });

        // console.log(res.data);

        return res.data;
    } catch (error) {
        console.error('알고리즘 목록 조회 실패:', error);
        throw error;
    } finally {
        isGetAlgorithmList = false;
    }
};

//알고리즘 상세 요청
let isGetAlgorithmDetail = false; // 중복 호출 방지
export const getAlgorithmDetail = async (id) => {
    if(isGetAlgorithmDetail) return;
    isGetAlgorithmDetail = true;

    try{
        const res = await axios.get(`${prefix}/algorithm/detail`, {
            params: { id }
        });
        return res.data;
    } catch (error) {
        console.error('알고리즘 상세 조회 실패:', error);
        throw error;
    } finally {
        isGetAlgorithmDetail = false;
    }
};