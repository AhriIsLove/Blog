// import { Link } from "react-router-dom";
import '../index.css';
import '../App.css';

// 이미지
import logo from '../images/logo.png';//로고

// 헤더
const Header_Main = () => {
    return (
        <div className='header'>
            {/* 로고 */}
            <img alt="logo" src={logo} className="logo"></img>
            
            {/* 메뉴 */}
            <nav className='menu'>
                {/* 
                group : group-hover 제어용
                - 자식태그가 group-hover사용 가능하게 함
                - group-hover:w-full : hover시 w-full 적용 */}
                <div className="content"/> {/* 공백 */}
                <div className="content group">
                    인물소개
                    <span className="ani_line group-hover:animate-slideDown"></span>
                </div>
                <div className="content group">
                    포트폴리오
                    <span className="ani_line group-hover:animate-slideDown"></span>
                </div>
                <div className="content group">
                    공부
                    <span className="ani_line group-hover:animate-slideDown"></span>
                </div>
                <div className="content group">
                    취미
                    <span className="ani_line group-hover:animate-slideDown"></span>
                </div>
                <div className="content group">
                    커뮤니티
                    <span className="ani_line group-hover:animate-slideDown"></span>
                </div>
            </nav>
        </div>




        // <nav id="navbar" className="flex bg-blue-300">
        //     <div className="w-4/5 bg-gray-500">
        //         <ul className="flex p-4 text-white font-bold">
        //             <button className="relative px-8 py-3 bg-white border-2 border-black text-black font-semibold rounded overflow-hidden cursor-pointer">
        //                 <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 z-0">
        //                     {/* <Link className="content" to={'/'}>Main</Link> */}
        //                 </span>
        //                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        //                     Main
        //                 </span>
        //             </button>
        //             <li className="menu">
        //                 <Link to={'/about'}>About</Link>
        //             </li>
        //         </ul>
        //     </div>
        //     {/* justify-end : flex 종료 */}
        //     <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
        //         <div className="text-white text-sm m-1 rounded border-2">
        //             Login
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header_Main;