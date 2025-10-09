import axios from "axios";//Terminal : yarn add axios

export const API_SERVER_HOST = 'http://localhost:8089';
// export const API_SERVER_HOST = 'http://43.200.181.141:8089';

export const prefix = `${API_SERVER_HOST}/hobby`;

//게임 등록 요청
let isPostGameRegist = false; // 중복 호출 방지
export const postGameRegist = async (formData) => {
    if(isPostGameRegist) return;
    isPostGameRegist = true;

    try{
        // 요청
        const res = await axios.post(`${prefix}/game/regist`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        return res.data;
    } catch (error) {
        throw error;
    } finally {
        isPostGameRegist = false;
    }
};

//게임 목록 요청
let isGetGameList = false; // 중복 호출 방지
export const getGameList = async (page=0, size=10) => {
    if(isGetGameList) return;
    isGetGameList = true;

    try{
        const res = await axios.get(`${prefix}/game/list`, {
            params: { page, size }
        });

        // console.log(res.data);

        return res.data;
    } catch (error) {
        console.error('게임 목록 조회 실패:', error);
        throw error;
    } finally {
        isGetGameList = false;
    }
};

//게임 상세 요청
let isGetGameDetail = false; // 중복 호출 방지
export const getGameDetail = async (gameId) => {
    if(isGetGameDetail) return;
    isGetGameDetail = true;

    try{
        const res = await axios.get(`${prefix}/game/detail`, {
            params: { gameId }
        });

        return res.data;
    } catch (error) {
        console.error('게임 상세 조회 실패:', error);
        throw error;
    } finally {
        isGetGameDetail = false;
    }
};

//게임 수정 요청
let isPutGameEdit = false; // 중복 호출 방지
export const putGameEdit = async (formData) => {
    if(isPutGameEdit) return;
    isPutGameEdit = true;
    try{
        const res = await axios.put(`${prefix}/game/edit`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    } catch (error) {
        throw error;
    } finally {
        isPutGameEdit = false;
    }
};