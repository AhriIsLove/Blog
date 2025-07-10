import axios from "axios";//Terminal : yarn add axios

export const API_SERVER_HOST = 'http://localhost:8081';

export const prefix = `${API_SERVER_HOST}/blog`;

//서버에게 목록 요청
export const getMenu = async() => {
    // axios : ajax와 비슷한 역할
    // get방식 API 요청
    // get방식은 URL로 요청됨
    const res = await axios.get(`${prefix}/menu`);

    // console.log('getMenus res.data : ' , res.data);

    return res.data;
    // 반환되는 데이터타입
    // dtoList: [],
    // maxSubMenuCount: 0,
};

//서버에게 목록 요청
export const getMenuOne = async() => {
    // 메뉴 ID로 메뉴 하나만 받는 API를 사용해야 해요
    // 여기서 부터 해야 해요
    // const res = await axios.get(`${prefix}/menu/read/{id}`);

    // console.log('getMenus res.data : ' , res.data);

    // return res.data;
    return null;
    // 반환되는 데이터타입
    // dtoList: [],
    // maxSubMenuCount: 0,
};

export const getSearch = async(keyword) => {
    const res = await axios.get(`${prefix}/search/${keyword}`);

    return res.data;
    // 반환되는 데이터타입
    // dtoList: [],
    // maxSubMenuCount: 0,
};