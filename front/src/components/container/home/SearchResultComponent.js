const SearchResultComponent = () => {
    return (
        <div>
            <div className='mt-10 mb-5
            text-2xl'>
                'XXX'에 대한 검색결과 XXX건
            </div>
            {/* 
            검색된 항목으로 map
            - 메뉴
            - 상위메뉴
            - 하위메뉴
            - 바로가기
            */}

            {/* 4행 4열 */}
            <div class="grid grid-cols-4 grid-rows-3 gap-4 p-4 border-2">
                {/* 1행 */}
                <div class="col-span-3 bg-blue-500 text-white text-center">상위메뉴</div>

                <div class="row-span-4 bg-blue-600 text-white text-center">바로가기</div>

                {/* 2행 */}
                <div class="row-span-2 bg-blue-400">ㄴ</div>
                <div class="col-span-2 bg-blue-500 text-white text-center">메뉴</div>

                {/* 3행 */}
                <div class="bg-blue-400">ㄴ</div>
                <div class="bg-blue-400 text-center">하위메뉴</div>
            </div>
        </div>
    );
};

export default SearchResultComponent;