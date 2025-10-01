import DesignTreeBranch from "../../../designs/DesignTreeBranch";
import { getMenuOne, getSubMenus } from "../../../api/MainAPI";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                    tempMap[menu.parent_id] = data;
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
            {
                searchKeyword === "" ?
                    <></>
                    :
                    <div className='mt-10 mb-5 
                    text-md'>
                        '{searchKeyword}'에 대한 검색결과 {searchResult.dtoList.length}건
                    </div>
            }
            {/* 검색결과 */}
            {
                searchResult.dtoList.map((menu, index) => {
                    const key = index + 1;
                    const parentData = parentMenuDataMap[menu.parent_id];
                    const childData = childMenuDataMap[menu.id];
                    let link = "";
                    if (parentData) {
                        link = parentData.link + menu.link;
                    } else {
                        link = menu.link;
                    }
                    return (
                        <div key={key} className="my-4 border-2 border-myPointColor-400 
                        text-myMainColor-950">
                            <div className="h-24 items-center flex flex-row">
                                <div className="p-4 w-11/12">
                                    <div className="text-xs">
                                        {parentData ? parentData.name : ""}
                                    </div>
                                    <div className="flex flex-row">
                                        {parentData ? <DesignTreeBranch></DesignTreeBranch> : <></>}
                                        <div>
                                            <div className="text-3xl">
                                                {menu.name}
                                            </div>
                                            <div className="flex flex-row justify-center">
                                                {Array.isArray(childData) && childData.length > 0 ? <DesignTreeBranch></DesignTreeBranch> : <></>}
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
                                {/* {parentData.link}{menu.link} */}

                                <Link className="h-full w-1/12 bg-myPointColor-400
                                md:text-xl text-xs
                                flex flex-col items-center justify-center"
                                    to={`${link}`} onClick={(e) => { }}>
                                    <div className="whitespace-nowrap">바로</div>
                                    <div className="whitespace-nowrap">가기</div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SearchResultComponent;