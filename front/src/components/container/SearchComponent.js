import { useState } from "react";
import { getSearch } from "../../api/MainAPI";
import SearchResultComponent from "./home/SearchResultComponent";

//API : MenuDTO
const initMenuDTO = {
    dtoList: [],
    maxSubMenuCount: 0,
};

const SearchComponent = () => {
    const [keyword, setKeyword] = useState("");
    const [menuDTO, setMenuDTO] = useState(initMenuDTO);

    const handleChange = (e) => {
        //e.target.value에 따라 검색해서 자동완성 도움을 준다

    };
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            const searchWord = e.target.value;
            setKeyword(searchWord);
            if (!searchWord === "") {
                getSearch(searchWord).then(data => {
                    setMenuDTO(data);
                    console.log(data);
                });
            }
        }
    };

    return (
        <div className='relative w-2/3 h-full pt-20 md:pt-32'>
            <div className="relative">
                {/* 검색창 */}
                <input className='w-full py-2 pl-10 bg-white border rounded-lg 
            text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-myPointColor-500'
                    type='text'
                    placeholder='검색어를 입력하세요'
                    onChange={handleChange}
                    onKeyDown={handleEnter}></input>
                {/* 돋보기 */}
                <div className='absolute 
            top-0 left-0 pl-3 pt-3
            flex items-center '>
                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                    </svg>
                </div>
            </div>

            {/* 검색결과 */}
            {
                keyword !== "" ?
                    <SearchResultComponent searchKeyword={keyword} searchResult={menuDTO} />
                    :
                    <div></div>
            }
        </div>
    );
};

export default SearchComponent;