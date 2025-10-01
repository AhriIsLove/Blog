// import { Link } from 'react-router-dom';
import '../../index.css';
import '../../App.css';

import { useState } from 'react';

// 이미지
import logo from '../../images/logo.png';//로고
// 디자인
import HamburgerComponent from './HamburgerComponent';
import { Link } from 'react-router-dom';

// 메뉴 데이터
import { MenuComponent } from './MenuComponent';

// 헤더
const HeaderComponent = () => {
    //상세메뉴 여부
    const [ShowDropMenu, setShowDropMenu] = useState(false);
    const showDropMenu = () => {
        setShowDropMenu(true);
    };
    const hideDropMenu = () => {
        setShowDropMenu(false);
    };

    return (
        <div className='h-16 md:h-20 lg:h-24
        flex flex-row items-center'>
            {/* 로고 */}
            {/* object-contain : 이미지 잘림 없이 채우기 */}
            <Link to='/' className='h-16 md:h-20 lg:h-24 w-auto
            object-contain 
            flex '>
                <img alt='logo' src={logo} />
            </Link>

            {/* 메뉴 */}
            <nav className='h-full w-full ml-auto md:gap-6 lg:gap-9 
            cursor-default 
            flex items-center justify-center'>
                {/* 드랍메뉴 배경 */}
                {/* 
                origin-top : scale-y가 0에서 100으로 변경시 기준을 top으로 잡아 아래로만 늘어나도록 함 
                scale-y-0 : 현재 객체의 y크기 0%
                scale-y-100 : 현재 객체의 y크기 100%
                */}
                <div className={`dropMenuContent fixed left-0 top-16 md:top-20 lg:top-24 w-screen h-auto bg-myMainColor-300/50 
                transition-all duration-500 ease-in-out transform origin-top 
                ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                    onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    {(() => {
                        // 이렇게 for문 사용 가능!
                        const elements = [];
                        for (let i = 0; i < MenuComponent.maxSubMenuCount; i++) {
                            elements.push(<br key={i} />);
                        }
                        return elements;
                    })()}
                </div>
                {/* 
                group : group-hover 제어용
                - 자식태그가 group-hover사용 가능하게 함
                - group-hover:w-full : hover시 w-full 적용 */}
                <div className='menuContent' /> {/* 공백 */}

                {/* 메뉴 */}
                {MenuComponent.dtoList.map(menu =>
                    <div className='menuContent group'
                        key={menu.id}
                        onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                        {menu.name}
                        {/* 
                        transition-all : 모든 속성에 대해 transition 적용
                        duration-300 : 	300ms 동안 애니메이션
                        left-0 top-[0%] : 시작 위치(-20% 안보임)
                        w-[100%] h-[5px] : 라인 크기
                        group-hover:top-[100%] : 끝 위치(120% 안보임) */}
                        <span className='absolute left-0 w-[100%] h-[5px] bg-myMainColor-300  
                        duration-300 
                        top-[0%] opacity-0
                        group-hover:top-[95%] group-hover:opacity-100'></span>
                        {/* 상세메뉴 */}
                        <div className={`absolute left-0 top-full w-full h-auto
                        cursor-pointer
                        transition-all duration-500 ease-in-out transform origin-top
                        ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} 
                        flex flex-col items-center justify-center`}>
                            {menu.sub_menus.map(sub_menu =>
                                <Link
                                    className='dropMenuContent rounded-md w-full bg-myMainColor-300 
                                    text-center 
                                    transition-all duration-300 
                                    bg-opacity-0 
                                    hover:bg-opacity-80 '
                                    key={sub_menu.id}
                                    to={`${menu.link}${sub_menu.link}`}
                                >
                                    {sub_menu.name}
                                </Link>
                            )}
                        </div>
                    </div>
                )}

                <HamburgerComponent></HamburgerComponent>
            </nav>
        </div>
    );
};

export default HeaderComponent;