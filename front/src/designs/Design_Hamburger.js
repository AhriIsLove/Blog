// npm install framer-motion
// yarn add framer-motion
import { motion } from "framer-motion";

{/* ShowHamburgerMenu 
    - true : 햄버거 메뉴 열기
    - false : 햄버거 메뉴 닫기 */}
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
        </div>
    );
};
