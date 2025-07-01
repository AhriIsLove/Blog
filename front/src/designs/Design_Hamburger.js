import { motion } from "framer-motion";

export const Design_Hamburger = ({ ShowHamburgerMenu }) => {
    return (
        <div>
            <motion.svg
                className="w-10 h-10 text-gray-500 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                {/* ShowHamburgerMenu == true : 햄버거 메뉴 오픈*/}
                <motion.line
                    x1="4"
                    y1="6"
                    x2="20"
                    y2="6"
                    animate={ShowHamburgerMenu ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.line
                    x1="4"
                    y1="12"
                    x2="20"
                    y2="12"
                    animate={ShowHamburgerMenu ? { scale:0 } : { scale:1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.line
                    x1="4"
                    y1="18"
                    x2="20"
                    y2="18"
                    animate={ShowHamburgerMenu ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.svg>

            {/* {ShowHamburgerMenu === true ? 
            // w-6 h-6 : 크기 설정
            // strokeLinecap : 선의 끝 포인트 마감 처리
            // strokeLinejoin : 선이 만나는 포인트 마감 처리
            // viewBox : SVG 요소의 영역 좌표 선언
            // d : 경로 모양 정의(className과 비슷)
            // M4 6 : 4,6좌표로 이동
            // h16 : 수평 16 이동
            <svg className="w-10 h-10 text-gray-500" fill="none" 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            viewBox="0 0 24 24" stroke="currentColor">
                <path d="
                M4 6 h16 
                M4 12 h16 
                M4 18 h16"></path>
            </svg>
            :
            <svg className="w-10 h-10 text-gray-500" fill="none" 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            viewBox="0 0 24 24" stroke="currentColor">
                <path d="
                M4 6 h16 
                M4 12 h16 
                M4 18 h16"></path>
            </svg>} */}


            {/* 참고 소스 */}
            {/* <svg width="100" height="100" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="red"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="251.2"
                        to="0"
                        dur="2s"
                        fill="freeze"
                    />
                </circle>
            </svg> */}
        </div>
    );
};
