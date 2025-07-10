import Design_TreeBranch from "../../../designs/Design_TreeBranch";
import { prefix } from "../../../api/MainAPI";

const SearchResultComponent = ({ searchKeyword, searchResult }) => {
    return (
        <div>
            <div className='mt-10 mb-5
            text-md'>
                '{searchKeyword}'에 대한 검색결과 {searchResult.dtoList.length}건
            </div>

            {/* 검색결과 */}
            {
                searchResult.dtoList.map((menu, index) => {
                    const key = index + 1;
                    return (
                        <div key={key} className="my-4 p-4 border-2 border-myPointColor-400 
                        text-myMainColor-950">
                            <div className="flex flex-row">
                                <div className="w-11/12">
                                    <div className="text-xs">
                                        {/* getMenu() 함수를 써야 합니다. */}
                                        {`${prefix}/menu/${menu.parent_id}`}
                                    </div>
                                    <div className="flex flex-row">
                                        <Design_TreeBranch></Design_TreeBranch>
                                        <div>
                                            <div className="text-3xl">
                                                {menu.name}
                                            </div>
                                            <div className="flex flex-row justify-center">
                                                <Design_TreeBranch></Design_TreeBranch>
                                                <div className="content-center mt-2 
                                    text-xs">이적사항,학력,이력,자격증,자기소개서,TMI</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/12">
                                    바로가기
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SearchResultComponent;