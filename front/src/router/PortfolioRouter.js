import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const PersonalPage = lazy(() => import("../pages/portfolio/PersonalPage"));
const UtobizPage = lazy(() => import("../pages/portfolio/UtobizPage"));
const ARTPage = lazy(() => import("../pages/portfolio/ARTPage"));

const PortfolioRouter = () => {
    return [
        {
            // Navigate : 마치 링크를 클릭한 것처럼 다른 페이지로 이동
            //            어떤 조건이 만족되었을 때 특정 페이지로 강제로 보내버리고 싶을 때
            path:"",
            element:<Navigate replace to="#personal"></Navigate>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"personal",
            element:<Suspense fallback={Loading}><PersonalPage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"utobiz",
            element:<Suspense fallback={Loading}><UtobizPage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"art",
            element:<Suspense fallback={Loading}><ARTPage/></Suspense>
        },
    ];
};

export default PortfolioRouter;