import Design_TreeBranch from "../../../designs/Design_TreeBranch";
import { getMenu, getMenuOne, getSubMenus, prefix } from "../../../api/MainAPI";
import { useEffect, useState } from "react";

const SearchResultComponent = ({ searchKeyword, searchResult }) => {
    {/* 부모의 메뉴 */ }
    const [parentMenuDataMap, setParentDataMap] = useState({});
    {/* 자식의 메뉴 */ }
    const [childMenuDataMap, setChildDataMap] = useState({});
    useEffect(() => {
        {/* 부모의 메뉴 가져오기 */ }
        const fetchParentMenus = async () => {
            const tempMap = {};

            // 비동기 요청들을 배열에 저장
            const fetches = searchResult.dtoList.map(async (menu) => {
                if (menu.parent_id) {
                    const data = await getMenuOne(menu.parent_id);
                    tempMap[menu.parent_id] = data.name;
                }
            });

            // 모든 요청이 완료될 때까지 기다림
            await Promise.all(fetches);

            setParentDataMap(tempMap);
        };
        {/* 자식의 메뉴 가져오기 */ }
        const fetchChildMenus = async () => {
            const tempMapSub = {};

            // 비동기 요청들을 배열에 저장
            const fetches = searchResult.dtoList.map(async (menu) => {
                if (menu.id) {
                    const data = await getSubMenus(menu.id);
                    tempMapSub[menu.id] = data.dtoList;
                }
            });

            // 모든 요청이 완료될 때까지 기다림
            await Promise.all(fetches);

            setChildDataMap(tempMapSub);
        };

        if (searchResult.dtoList.length > 0) {
            fetchParentMenus();
            fetchChildMenus();
        }
        // 검색결과가 변경되면
    }, [searchResult.dtoList]);

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
                    const parentData = parentMenuDataMap[menu.parent_id];
                    const childData = childMenuDataMap[menu.id];
                    return (
                        <div key={key} className="my-4 p-4 border-2 border-myPointColor-400 
                        text-myMainColor-950">
                            <div className="items-center
                            flex flex-row">
                                <div className="w-11/12">
                                    <div className="text-xs">
                                        {parentData ? parentData : ""}
                                    </div>
                                    <div className="flex flex-row">
                                        {parentData ? <Design_TreeBranch></Design_TreeBranch> : <></>}
                                        <div>
                                            <div className="text-3xl">
                                                {menu.name}
                                            </div>
                                            <div className="flex flex-row justify-center">
                                                {Array.isArray(childData) && childData.length > 0 ? <Design_TreeBranch></Design_TreeBranch> : <></>}
                                                <div className="content-center mt-2 
                                                text-xs
                                                flex flex-row">
                                                    {/* 여기에 자식 메뉴들 */}
                                                    {Array.isArray(childData) && childData.length > 0 ? childData.map((submenu, subindex) => (
                                                        <div key={subindex}>{submenu.name}{subindex !== childData.length - 1 ? ',' : ''}</div>
                                                    )) : <></>}
                                                </div>
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