// import axios from "axios";//Terminal : yarn add axios
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