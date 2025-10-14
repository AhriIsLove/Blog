import axios from "axios";//Terminal : yarn add axios
import { API_SERVER_HOST } from "./MainAPI";

export const prefix = `${API_SERVER_HOST}/community`;

//서버에게 목록 요청
let isPostUserLogRegistting = false; // 중복 호출 방지
export const postUserLogRegist = async (pathname) => {
    if(isPostUserLogRegistting) return;
    isPostUserLogRegistting = true;

    try{
        // 사용자 IP 가져오기
        // const ipRes = await axios.get('https://api.ipify.org?format=json');
        // const ip = ipRes.data.ip;
        const actionDate = new Date().toISOString();
        const res = await axios.post(`${prefix}/userlog/regist`, {
            // ip: ip,
            action: pathname,
            actionDate: actionDate
        });

        return res.data;
    } catch (error) {
        console.error('로그 전송 실패:', error);
        throw error;
    } finally {
        isPostUserLogRegistting = false;
    }
};