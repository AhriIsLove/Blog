const SearchComponent = () => {
    const handleChange = (e) => {
        //e.target.value에 따라 검색해서 자동완성 도움을 준다

    };
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            //e.target.value에 따라 검색한다.
            console.log(e.target.value);
        }
    };

    return (
        <div className='relative w-1/3'>
            <input className='w-full py-2 pl-10 bg-white border rounded-lg 
            text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-myPointColor-500'
                type='text'
                placeholder='검색어를 입력하세요'
                onChange={handleChange}
                onKeyDown={handleEnter}></input>
            {/* 돋보기 */}
            <div className='absolute 
            inset-y-0 left-0 pl-3
            flex items-center '>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
            </div>
        </div>
    );
};

export default SearchComponent;