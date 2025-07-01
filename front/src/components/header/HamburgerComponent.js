import { useEffect, useState } from "react";
import { Design_Hamburger } from "../../designs/Design_Hamburger"

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
        if(DropShowHamburgerMenu === index){
            setDropShowHamburgerMenu(-1);
        }
        else{
            setDropShowHamburgerMenu(index);
        }
    };
    //항상
    useEffect(() => {
        console.log()
        const handleResize = () => {
            //sm:햄버거메뉴 닫기
            if(window.innerWidth >= 640) {
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
                <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(0)}>
                    인물소개<br />
                    <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 0 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                        인물소개1<br />
                        인물소개2<br />
                        인물소개3<br />
                    </div>
                </div>
                <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(1)}>
                    포트폴리오<br />
                    <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 1 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                        포트폴리오1<br />
                        포트폴리오2<br />
                        포트폴리오3<br />
                    </div>
                </div>
                <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(2)}>
                    공부<br />
                    <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 2 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                        공부1<br />
                        공부2<br />
                        공부3<br />
                    </div>
                </div>
                <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(3)}>
                    취미<br />
                    <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 3 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                        취미1<br />
                        취미2<br />
                        취미3<br />
                    </div>
                </div>
                <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(4)}>
                    커뮤니티<br />
                    <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 4 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                        커뮤니티1<br />
                        커뮤니티2<br />
                        커뮤니티3<br />
                    </div>
                </div>
            </div>
            <div className="hamburger" onClick={showHamburgerMenu}>
                <Design_Hamburger ShowHamburgerMenu={ShowHamburgerMenu}></Design_Hamburger>
            </div>
        </div>
    );
};

export default HamburgerComponent;