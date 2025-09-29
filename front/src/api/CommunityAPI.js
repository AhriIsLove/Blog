import axios from "axios";//Terminal : yarn add axios

export const API_SERVER_HOST = 'http://localhost:8089';

export const prefix = `${API_SERVER_HOST}/community`;

//서버에게 목록 요청
export const postUserLogRegist = async () => {
    // console.log("postUserLogRegist 호출됨");

    // 사용자 IP 가져오기
    const ipRes = await axios.get('https://api.ipify.org?format=json');
    const ip = ipRes.data.ip;
    const actionDate = new Date().toISOString();
    const res = await axios.post(`${prefix}/userlog/regist`, {
        ip: ip,
        action: "접속",
        actionDate: actionDate
    });

    // console.log('postUserLogRegist res.data : ' , res.data);

    return res.data;
};