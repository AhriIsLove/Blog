import axios from "axios";//Terminal : yarn add axios

export const API_SERVER_HOST = 'http://localhost:8081';

export const prefix = `${API_SERVER_HOST}/introduction`;

//서버에게 목록 요청
export const getInfo = async () => {
    const res = await axios.get(`${prefix}/info`);

    console.log('getInfo res.data : ' , res.data);

    return res.data;
};