import axios from "axios";//Terminal : yarn add axios
import { API_SERVER_HOST } from "./MainAPI";

export const prefix = `${API_SERVER_HOST}/study`;

//알고리즘 등록 요청
let isPostAlgorithmRegist = false; // 중복 호출 방지
export const postAlgorithmRegist = async (formData) => {
    if(isPostAlgorithmRegist) return;
    isPostAlgorithmRegist = true;

    try{
        console.log(formData);

        // 요청
        const res = await axios.post(`${prefix}/algorithm/regist`, formData);

        return res.data;
    } catch (error) {
        throw error;
    } finally {
        isPostAlgorithmRegist = false;
    }
};
