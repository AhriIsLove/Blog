import { useEffect, useState } from "react";
import { Design_Hamburger } from "../../designs/Design_Hamburger"
import { getMenu } from "../../api/MainAPI";
import { Design_DropMenu } from "../../designs/Design_DropMenu";

//API : MenuDTO
const initMenuDTO = {
    dtoList: [],
    maxSubMenuCount: 0,
};

const HamburgerComponent = () => {
    //API : 메뉴
    const [menuDTO, setMenuDTO] = useState(initMenuDTO);
    useEffect(() => {
        getMenu().then(data => {
            setMenuDTO(data);
        });
    }, []);

    //햄버거메뉴 여부
    const [ShowHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const showHamburgerMenu = () => {
        if (ShowHamburgerMenu) {
            setShowHamburgerMenu(false);
        }
        else {
            setShowHamburgerMenu(true);
        }
    };
    //햄버거메뉴 상세메뉴 여부
    const [DropShowHamburgerMenu, setDropShowHamburgerMenu] = useState(-1);
    const showDropHamburgerMenu = (index) => {
        if (DropShowHamburgerMenu === index) {
            setDropShowHamburgerMenu(-1);
        }
        else {
            setDropShowHamburgerMenu(index);
        }
    };
    //항상
    useEffect(() => {
        console.log()
        const handleResize = () => {
            //sm:햄버거메뉴 닫기
            if (window.innerWidth >= 640) {
                setShowHamburgerMenu(false);
            }
        };
        //이벤트 등록
        window.addEventListener("resize", handleResize);
        //이벤트 실행
        handleResize();
        //이벤트 등록 해제
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="ml-auto">
            <div className={`hamburgerBackground transition-all duration-500 ease-in-out transform origin-right 
                    ${ShowHamburgerMenu ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}>
                {menuDTO.dtoList.map(menu =>
                    <div className='hamburgerContent'
                        onClick={() => showDropHamburgerMenu(menu.id)}
                        key={menu.id}>
                        <Design_DropMenu DropShowHamburgerMenu={DropShowHamburgerMenu} id={menu.id}></Design_DropMenu>
                        <div className="w-full">
                            <div className="
                            bg-myMainColor-400 bg-opacity-0 rounded-md w-full hover:bg-opacity-80 transition-all duration-300">
                                {menu.name}
                            </div>
                            {/* 상세메뉴 */}
                            <div className={`hamburgerContentDetail 
                            transition-all duration-300 ease-in-out transform origin-top
                            ${DropShowHamburgerMenu === menu.id ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                                {menu.sub_menus.map(sub_menu =>
                                    <div className="bg-myMainColor-400 bg-opacity-0 rounded-md w-full
                                        hover:bg-opacity-80 transition-all duration-300"
                                        key={sub_menu.id}>
                                        {sub_menu.name}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="hamburger" onClick={showHamburgerMenu}>
                <Design_Hamburger ShowHamburgerMenu={ShowHamburgerMenu}></Design_Hamburger>
            </div>
        </div>
    );
};

export default HamburgerComponent;