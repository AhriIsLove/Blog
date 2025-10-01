import axios from "axios";//Terminal : yarn add axios

export const API_SERVER_HOST = 'http://localhost:8089';
// export const API_SERVER_HOST = 'http://43.200.181.141:8089';

export const prefix = `${API_SERVER_HOST}/blog`;

//서버에게 목록 요청
export const getMenu = async () => {
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

//서버에게 메뉴 요청
export const getMenuOne = async (id) => {
    const res = await axios.get(`${prefix}/menu/${id}`);

    // console.log('getMenus res.data : ' , res.data);

    return res.data;
    // return null;
    // 반환되는 데이터타입
    // dtoList: [],
    // maxSubMenuCount: 0,
};

//서버에게 메뉴 요청
export const getSubMenus = async (id) => {
    const res = await axios.get(`${prefix}/submenus/${id}`);

    // console.log('getMenus res.data : ' , res.data);

    return res.data;
    // return null;
    // 반환되는 데이터타입
    // dtoList: [],
    // maxSubMenuCount: 0,
};

export const getSearch = async (keyword) => {
    const res = await axios.get(`${prefix}/search/${keyword}`);

    return res.data;
    // 반환되는 데이터타입
    // dtoList: [],
    // maxSubMenuCount: 0,
};

export const getImage = async(filename) => {
    const res = await axios.get(`${prefix}/image/${filename}`);

    return res.data;
}