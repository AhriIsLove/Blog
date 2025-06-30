// import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';

import { useEffect, useState } from 'react';

// 이미지
import logo from '../images/logo.png';//로고
// 디자인
import { Design_Hamburger } from '../designs/Design_Hamburger';

// 헤더
const Header_Main = () => {
    //상세메뉴 여부
    const [ShowDropMenu, setShowDropMenu] = useState(false);
    const showDropMenu = () => {
        setShowDropMenu(true);
    };
    const hideDropMenu = () => {
        setShowDropMenu(false);
    };

    //햄버거메뉴 여부
    const [ShowHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const showHamburgerMenu = () => {
        if(ShowHamburgerMenu){
            setShowHamburgerMenu(false);
        }
        else{
            setShowHamburgerMenu(true);
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
    //햄버거메뉴 상세메뉴 여부
    const [DropShowHamburgerMenu, setDropShowHamburgerMenu] = useState(-1);
    const showDropHamburgerMenu = (index) => {
        if(DropShowHamburgerMenu == index){
            setDropShowHamburgerMenu(-1);
        }
        else{
            setDropShowHamburgerMenu(index);
        }
    };

    return (
        <div className='header'>
            {/* 로고 */}
            <img alt='logo' src={logo} className='logo'></img>
            
            {/* 메뉴 */}
            <nav className='menu'>
                {/* 드랍메뉴 */}
                {/* 
                origin-top : scale-y가 0에서 100으로 변경시 기준을 top으로 잡아 아래로만 늘어나도록 함 
                scale-y-0 : 현재 객체의 y크기 0%
                scale-y-100 : 현재 객체의 y크기 100%
                */}
                <div className={`dropmenuBackground transition-all duration-500 ease-in-out transform origin-top 
                ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    <br/>
                    <br/>
                    <br/>
                </div>
                {/* 
                group : group-hover 제어용
                - 자식태그가 group-hover사용 가능하게 함
                - group-hover:w-full : hover시 w-full 적용 */}
                <div className='menuContent'/> {/* 공백 */}
                <div className='menuContent group' onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    인물소개
                    <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                    {/* 상세메뉴 */}
                    <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top 
                    ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                        인물소개<br/>
                        인물소개<br/>
                        인물소개<br/>
                    </div>
                </div>
                <div className='menuContent group' onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    포트폴리오
                    <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                    {/* 상세메뉴 */}
                    <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top 
                    ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                        포트폴리오<br/>
                        포트폴리오<br/>
                        포트폴리오<br/>
                    </div>
                </div>
                <div className='menuContent group' onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    공부
                    <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                    {/* 상세메뉴 */}
                    <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top 
                    ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                        공부<br/>
                        공부<br/>
                        공부<br/>
                    </div>
                </div>
                <div className='menuContent group' onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    취미
                    <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                    {/* 상세메뉴 */}
                    <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top 
                    ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                        취미<br/>
                        취미<br/>
                        취미<br/>
                    </div>
                </div>
                <div className='menuContent group' onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    커뮤니티
                    <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                    {/* 상세메뉴 */}
                    <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top 
                    ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                        커뮤니티<br/>
                        커뮤니티<br/>
                        커뮤니티<br/>
                    </div>
                </div>

                {/* framer-motion 이라는 라이브러리로 애니메이션 구현 가능하대요 나중에 물어봅시다*/}

                <div className={`hamburgerBackground transition-all duration-500 ease-in-out transform origin-right 
                    ${ShowHamburgerMenu ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}>
                    <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(0)}>
                        인물소개<br/>
                        <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 0 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                            인물소개1<br/>
                            인물소개2<br/>
                            인물소개3<br/>
                        </div>
                    </div>
                    <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(1)}>
                        포트폴리오<br/>
                        <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 1 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                            포트폴리오1<br/>
                            포트폴리오2<br/>
                            포트폴리오3<br/>
                        </div>
                    </div>
                    <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(2)}>
                        공부<br/>
                        <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 2 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                            공부1<br/>
                            공부2<br/>
                            공부3<br/>
                        </div>
                    </div>
                    <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(3)}>
                        취미<br/>
                        <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 3 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                            취미1<br/>
                            취미2<br/>
                            취미3<br/>
                        </div>
                    </div>
                    <div className='hamburgerContent' onClick={() => showDropHamburgerMenu(4)}>
                        커뮤니티<br/>
                        <div className={`hamburgerContentDetail overflow-hidden transition-all duration-300 ease-in-out transform origin-top
                        ${DropShowHamburgerMenu === 4 ? "opacity-100 scale-y-100 max-h-full" : "opacity-0 scale-y-0 max-h-0"}`}>
                            커뮤니티1<br/>
                            커뮤니티2<br/>
                            커뮤니티3<br/>
                        </div>
                    </div>
                </div>
                <button className='hamburger' onClick={showHamburgerMenu}>
                    <Design_Hamburger/>
                </button>
            </nav>

        </div>
        



        // <nav id='navbar' className='flex bg-blue-300'>
        //     <div className='w-4/5 bg-gray-500'>
        //         <ul className='flex p-4 text-white font-bold'>
        //             <button className='relative px-8 py-3 bg-white border-2 border-black text-black font-semibold rounded overflow-hidden cursor-pointer'>
        //                 <span className='absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 z-0'>
        //                     {/* <Link className='content' to={'/'}>Main</Link> */}
        //                 </span>
        //                 <span className='relative z-10 group-hover:text-white transition-colors duration-300'>
        //                     Main
        //                 </span>
        //             </button>
        //             <li className='menu'>
        //                 <Link to={'/about'}>About</Link>
        //             </li>
        //         </ul>
        //     </div>
        //     {/* justify-end : flex 종료 */}
        //     <div className='w-1/5 flex justify-end bg-orange-300 p-4 font-medium'>
        //         <div className='text-white text-sm m-1 rounded border-2'>
        //             Login
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header_Main;