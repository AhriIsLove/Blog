import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonalPage from "./portfolio/PersonalPage";
import UtobizPage from "./portfolio/UtobizPage";
import ARTPage from "./portfolio/ARTPage";
import BasicLayout from "../layouts/BasicLayout";

const PortfolioPage = () => {
    // 현재 URL 가져오기
    const location = useLocation();

    // 현재 hash 상태 관리
    const [currentHash, setCurrentHash] = useState(() => {
        if (window.location.hash) return window.location.hash;
        window.location.hash = '#personal';
        return '#personal';
    });

    // location이 변경될 때마다 hash 업데이트
    useEffect(() => {
        setCurrentHash(location.hash || '#personal');
    }, [location]);

    // hash 변경 감지 및 상태 업데이트
    useEffect(() => {
        const onHashChange = () => {
            setCurrentHash(window.location.hash || '#personal');
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return (
        <BasicLayout>
            <div className="w-full flex flex-col items-center">
                <div className="pb-3 text-5xl underline underline-offset-8">포트폴리오</div>
                <ul className="w-full my-10 rounded-full p-1 border-2 border-myPointColor-300
                text-center text-myFontColor-950 bg-myMainColor-100  
                grid grid-flow-col">
                    <li className="flex">
                        <button type="button"
                            className={`w-full flex justify-center items-center py-4 px-8 text-2xl font-bold rounded-full transition-colors duration-150
                            ${window.location.hash === '#personal' || window.location.hash === '' ? 'bg-white shadow text-myFontColor-950' : ''}`}
                            style={{ minWidth: '120px' }}
                            onClick={() => { window.location.hash = '#personal'; }}>
                            개인/팀
                        </button>
                    </li>
                    <li className="flex">
                        <button type="button"
                            className={`w-full flex justify-center items-center py-4 px-8 text-2xl font-bold rounded-full transition-colors duration-150
                            ${window.location.hash === '#utobiz' ? 'bg-white shadow text-myFontColor-950' : ''}`}
                            style={{ minWidth: '120px' }}
                            onClick={() => { window.location.hash = '#utobiz'; }}>
                            Utobiz
                        </button>
                    </li>
                    <li className="flex">
                        <button type="button"
                            className={`w-full flex justify-center items-center py-4 px-8 text-2xl font-bold rounded-full transition-colors duration-150
                            ${window.location.hash === '#art' ? 'bg-white shadow text-myFontColor-950' : ''}`}
                            style={{ minWidth: '120px' }}
                            onClick={() => { window.location.hash = '#art'; }}>
                            ART
                        </button>
                    </li>
                </ul>

                {(currentHash === '#personal' || currentHash === '' || !currentHash) && <PersonalPage />}
                {currentHash === '#utobiz' && <UtobizPage />}
                {currentHash === '#art' && <ARTPage />}
            </div>
        </BasicLayout>
    );
}

export default PortfolioPage;