import { Link } from "react-router-dom";
import '../index.css';

const BasicMenu = () => {
    return (
        <nav id="navbar" className="flex bg-blue-300">
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white font-bold">
                    <li className="menu">
                        <span className="ani_line">
                            <Link to={'/'}>Main</Link>
                        </span>
                    </li>
                    <li className="menu">
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </div>
            {/* justify-end : flex 종료 */}
            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                <div className="text-white text-sm m-1 rounded border-2">
                    Login
                </div>
            </div>
        </nav>
    )
}

export default BasicMenu;