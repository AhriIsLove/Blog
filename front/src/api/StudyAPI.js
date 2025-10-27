import axios from "axios";//Terminal : yarn add axios
import { API_SERVER_HOST } from "./MainAPI";

export const prefix = `${API_SERVER_HOST}/study`;

//IT 등록 요청
let isPostItRegist = false; // 중복 호출 방지
export const postItRegist = async (formData) => {
    if(isPostItRegist) return;
    isPostItRegist = true;

    try{
        // 요청
        const res = await fetch(`${prefix}/it/regist`, {
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
        isPostItRegist = false;
    }
};

//IT 목록 요청
let isGetItList = false; // 중복 호출 방지
export const getItList = async (page=0, size=10) => {
    if(isGetItList) return;
    isGetItList = true;

    try{
        const res = await axios.get(`${prefix}/it/list`, {
            params: { page, size }
        });

        // console.log(res.data);

        return res.data;
    } catch (error) {
        console.error('IT 목록 조회 실패:', error);
        throw error;
    } finally {
        isGetItList = false;
    }
};

//IT 상세 요청
let isGetItDetail = false; // 중복 호출 방지
export const getItDetail = async (id) => {
    if(isGetItDetail) return;
    isGetItDetail = true;

    try{
        const res = await axios.get(`${prefix}/it/detail`, {
            params: { id }
        });
        return res.data;
    } catch (error) {
        console.error('IT 상세 조회 실패:', error);
        throw error;
    } finally {
        isGetItDetail = false;
    }
};

//IT 수정 요청
let isPutItEdit = false; // 중복 호출 방지
export const putItEdit = async (formData) => {
    if(isPutItEdit) return;
    isPutItEdit = true;
    try{
        // 요청
        const res = await axios.put(`${prefix}/it/edit`, formData);
        return res.data;
    } catch (error) {
        throw error;
    } finally {
        isPutItEdit = false;
    }
};

//IT 삭제 요청
let isDeleteIt = false; // 중복 호출 방지
export const deleteIt = async (id) => {
    if(isDeleteIt) return;
    isDeleteIt = true;

    try{
        const res = await axios.delete(`${prefix}/it/delete`, {
            params: { id }
        });
        return res.data;
    } catch (error) {
        console.error('IT 삭제 실패:', error);
        throw error;
    } finally {
        isDeleteIt = false;
    }
};