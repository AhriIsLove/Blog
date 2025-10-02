import axios from "axios";//Terminal : yarn add axios

export const API_SERVER_HOST = 'http://localhost:8089';
// export const API_SERVER_HOST = 'http://43.200.181.141:8089';

export const prefix = `${API_SERVER_HOST}/hobby`;

//게임 등록 요청
let isPostGameRegist = false; // 중복 호출 방지
export const postGameRegist = async () => {
    if(isPostGameRegist) return;
    isPostGameRegist = true;

    try{
        // 이미지 포함을 위한 formData 객체 생성
        const formData = new FormData();

        // JSON 데이터를 gameDTO라는 이름으로 추가
        const gameData = {
            name: "Leageue of Legends",
            type: "MOBA",
        };
        formData.append("gameDTO", new Blob([JSON.stringify(gameData)], {
            type: "application/json"
        }));

        // 이미지 파일 추가
        formData.append("imageFile", null);
        
        // 요청
        const res = await axios.post(`${prefix}/game/regist`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        return res.data;
    } catch (error) {
        console.error('로그 전송 실패:', error);
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

        console.log(res.data);

        return res.data;
    } catch (error) {
        console.error('게임 목록 조회 실패:', error);
        throw error;
    } finally {
        isGetGameList = false;
    }
};