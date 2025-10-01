import { motion } from "framer-motion";

/* DropShowHamburgerMenu 
    - true : 드랍 메뉴 열기
    - false : 드랍 메뉴 닫기 */
export const DesignDropMenu = ({ DropShowHamburgerMenu, id}) => {
    return (
        <div>
            <motion.svg
                className="w-10 h-10 p-2 text-myMainColor-900 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <motion.line
                    initial={{ x1:6, y1:6, x2:18, y2:12 }}
                    animate={DropShowHamburgerMenu === id ? { x1:18, y1:6, x2:12, y2:18 } : { x1:6, y1:6, x2:18, y2:12 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.line
                    initial={{ x1:6, y1:18, x2:18, y2:12 }}
                    animate={DropShowHamburgerMenu === id ? { x1:6, y1:6, x2:12, y2:18 } : { x1:6, y1:18, x2:18, y2:12 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.svg>
        </div>
    );
};
