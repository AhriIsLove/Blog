import { Outlet, useLocation } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const PortfolioPage = () => {
    // 현재 URL 가져오기
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '');

    //화면 리턴
    return (
        <BasicLayout>
            <div className="w-full 
            flex flex-col items-center">
                <div className="pb-3 
                text-5xl underline underline-offset-8">포트폴리오</div>

                <ul class="w-full my-10 rounded-full p-1 border-2 border-myPointColor-300
                text-center text-myFontColor-950 bg-myMainColor-100  
                grid grid-flow-col">
                    <li>
                        <a href="personal" class={`flex justify-center py-4 
                        text-2xl font-bold
                            ${currentPath === 'portfolio/personal' ? 'bg-white rounded-full shadow text-myFontColor-950' : ''}`}>개인/팀</a>
                    </li>
                    <li>
                        <a href="utobiz" class={`flex justify-center py-4 
                        text-2xl font-bold
                            ${currentPath === 'portfolio/utobiz' ? 'bg-white rounded-full shadow text-myFontColor-950' : ''}`}>Utobiz</a>
                    </li>
                    <li>
                        <a href="art" class={`flex justify-center py-4 
                        text-2xl font-bold
                            ${currentPath === 'portfolio/art' ? 'bg-white rounded-full shadow text-myFontColor-950' : ''}`}>ART</a>
                    </li>
                </ul>
                
                <Outlet />
            </div>
        </BasicLayout>
    );
}

export default PortfolioPage;