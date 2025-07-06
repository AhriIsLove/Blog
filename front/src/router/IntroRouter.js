import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const InfoPage = lazy(() => import("../pages/introduction/InfoPage"));
const EducationPage = lazy(() => import("../pages/introduction/EducationPage"));
const CareerPage = lazy(() => import("../pages/introduction/CareerPage"));
const LicensePage = lazy(() => import("../pages/introduction/LicensePage"));
const SelfIntroductionPagePage = lazy(() => import("../pages/introduction/SelfIntroductionPagePage"));
const TMIPage = lazy(() => import("../pages/introduction/TMIPage"));

const IntroRouter = () => {
    return [
        {
            // Navigate : 마치 링크를 클릭한 것처럼 다른 페이지로 이동
            //            어떤 조건이 만족되었을 때 특정 페이지로 강제로 보내버리고 싶을 때
            path:"",
            element:<Navigate replace to="info"></Navigate>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"info",
            element:<Suspense fallback={Loading}><InfoPage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"education",
            element:<Suspense fallback={Loading}><EducationPage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"career",
            element:<Suspense fallback={Loading}><CareerPage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"license",
            element:<Suspense fallback={Loading}><LicensePage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"selfintroduction",
            element:<Suspense fallback={Loading}><SelfIntroductionPagePage/></Suspense>
        },
        {
            // Suspense : 비동기 작업이 끝날 때까지 기다려주는 역할
            path:"tmi",
            element:<Suspense fallback={Loading}><TMIPage/></Suspense>
        },
    ];
};

export default IntroRouter;