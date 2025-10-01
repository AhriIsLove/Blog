import { useEffect, useState } from "react";
import { DesignHamburger } from "../../designs/DesignHamburger"
import { DesignDropMenu } from "../../designs/DesignDropMenu";
import { Link } from "react-router-dom";

// 메뉴 데이터
import { MenuComponent } from './MenuComponent';

const HamburgerComponent = () => {
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
        const handleResize = () => {
            //md:햄버거메뉴 닫기
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
            <div className={`fixed left-1/4 top-0 w-3/4 h-screen p-10 bg-myMainColor-300 opacity-90 
            transition-all duration-500 ease-in-out transform origin-right 
            ${ShowHamburgerMenu ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"} 
            flex-row items-center`}>
                {MenuComponent.dtoList.map(menu =>
                    <div className='h-auto w-full 
                    text-3xl text-myMainColor-950 
                    cursor-pointer 
                    flex'
                        onClick={() => showDropHamburgerMenu(menu.id)}
                        key={menu.id}>
                        <DesignDropMenu DropShowHamburgerMenu={DropShowHamburgerMenu} id={menu.id}></DesignDropMenu>
                        <div className="w-full">
                            <div className="bg-myMainColor-400 bg-opacity-0 w-full rounded-md
                            transition-all duration-300 hover:bg-opacity-80">
                                {menu.name}
                            </div>
                            {/* 상세메뉴 */}
                            <div className={`ml-5
                            text-xl text-myMainColor-950 
                            transition-all duration-300 ease-in-out transform origin-top
                            ${DropShowHamburgerMenu === menu.id ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"} 
                            overflow-hidden`}>
                                {menu.sub_menus.map(sub_menu =>
                                    <div className="
                                    bg-myMainColor-400 bg-opacity-0 rounded-md w-full
                                        hover:bg-opacity-80 transition-all duration-300"
                                        key={sub_menu.id}>
                                        {/* e.stopPropagation() : 버블링 방지(부모의 onClick방지) */}
                                        <Link className="flex w-full" 
                                        to={`${menu.link}${sub_menu.link}`} onClick={(e) => {e.stopPropagation(); showHamburgerMenu();}}>{sub_menu.name}</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="relative md:hidden "
                onClick={showHamburgerMenu}>
                <DesignHamburger ShowHamburgerMenu={ShowHamburgerMenu}></DesignHamburger>
            </div>
        </div>
    );
};

export default HamburgerComponent;