// import { Link } from 'react-router-dom';
import '../../index.css';
import '../../App.css';

import { useCallback, useEffect, useState } from 'react';

// 이미지
import logo from '../../images/logo.png';//로고
// 디자인
import HamburgerComponent from './HamburgerComponent';
import { getMenu } from '../../api/MainAPI';
import { Link, useNavigate } from 'react-router-dom';

//API : MenuDTO
const initMenuDTO = {
    dtoList: [],
    maxSubMenuCount: 0,
};

// 헤더
const HeaderComponent = () => {
    //API : 메뉴
    const [menuDTO, setMenuDTO] = useState(initMenuDTO);
    useEffect(() => {
        getMenu().then(data => {
            console.log(data);
            setMenuDTO(data);
        });
    }, []);

    //상세메뉴 여부
    const [ShowDropMenu, setShowDropMenu] = useState(false);
    const showDropMenu = () => {
        setShowDropMenu(true);
    };
    const hideDropMenu = () => {
        setShowDropMenu(false);
    };

    const navigate = useNavigate();
    //이벤트 생성 : List 클릭
    const handleClickMenu = useCallback((menu) => {
        switch (menu) {
            case -1:
                navigate({ pathname: '/' });
                break;
        };
    });

    return (
        <div className='header'>
            {/* 로고 */}
            <Link to='/' className='logo'>
                <img alt='logo' src={logo}/>
            </Link>

            {/* 메뉴 */}
            <nav className='menu'>
                {/* 드랍메뉴 배경 */}
                {/* 
                origin-top : scale-y가 0에서 100으로 변경시 기준을 top으로 잡아 아래로만 늘어나도록 함 
                scale-y-0 : 현재 객체의 y크기 0%
                scale-y-100 : 현재 객체의 y크기 100%
                */}
                <div className={`dropmenuBackground transition-all duration-500 ease-in-out transform origin-top 
                ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                    onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                    {(() => {
                        // 여기서 for문 사용 가능!
                        const elements = [];
                        for (let i = 0; i < menuDTO.maxSubMenuCount; i++) {
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
                {menuDTO.dtoList.map(menu =>
                    <div className='menuContent group'
                        key={menu.id}
                        onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                        {menu.name}
                        <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                        {/* 상세메뉴 */}
                        <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top
                        ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                            {menu.sub_menus.map(sub_menu =>
                                <div className='bg-myMainColor-300 bg-opacity-0 rounded-md w-full 
                                text-center
                                hover:bg-opacity-80 transition-all duration-300'
                                    key={sub_menu.id}>
                                    <Link to={`${menu.link}${sub_menu.link}`}>{sub_menu.name}</Link>
                                </div>
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