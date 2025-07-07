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
            <div className='flex flex-row p-3 border-2'>
                <div className="w-3/4">
                    <div className="">
                        상위메뉴
                    </div>
                    <div className="text-6xl">
                        메뉴
                    </div>
                    <div className="">
                        하위메뉴, 하위메뉴, 하위메뉴
                    </div>
                </div>
                <div className="w-1/4">
                    바로가기
                </div>
            </div>
        </div>
    );
};

export default SearchResultComponent;