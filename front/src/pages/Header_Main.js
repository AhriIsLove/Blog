// import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';

import { useEffect, useState } from 'react';

// 이미지
import logo from '../images/logo.png';//로고
// 디자인
import HamburgerComponent from '../components/header/HamburgerComponent';
import { getMenu } from '../api/MainAPI';

//API : MenuDTO
const initMenuDTO = [{
    id: 0,
    name: '',
    parent_id:0
}];

// 헤더
const Header_Main = () => {
    //API : 메뉴
    const [menuDTO, setMenuDTO] = useState([...initMenuDTO]);
    useEffect(() => {
        getMenu().then(data => {
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

    return (
        <div className='header'>
            {/* 로고 */}
            <img alt='logo' src={logo} className='logo'></img>

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
                    <br />
                    <br />
                    <br />
                </div>
                {/* 
                group : group-hover 제어용
                - 자식태그가 group-hover사용 가능하게 함
                - group-hover:w-full : hover시 w-full 적용 */}
                <div className='menuContent' /> {/* 공백 */}

                {/* 메뉴 */}
                {menuDTO.map(menu => 
                    <div className='menuContent group' 
                    key={menu.id}
                    onMouseOver={showDropMenu} onMouseOut={hideDropMenu}>
                        {menu.name}
                        <span className='ani_line duration-300 group-hover:top-[95%] group-hover:opacity-100'></span>
                        {/* 상세메뉴 */}
                        <div className={`dropmenu transition-all duration-500 ease-in-out transform origin-top 
                        ${ShowDropMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                            인물소개<br />
                            인물소개<br />
                            인물소개<br />
                        </div>
                    </div>
                )}

                <HamburgerComponent></HamburgerComponent>
            </nav>
        </div>
    );
};

export default Header_Main;