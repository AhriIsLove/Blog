import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import IntroRouter from "./IntroRouter";
// import PortfolioRouter from "./PortfolioRouter";
import StudyRouter from "./StudyRouter";
import HobbyRouter from "./HobbyRouter";
import CommunityRouter from "./CommunityRouter";

//로딩 페이지 생성
const Loading = <div>Loading...</div>
//메인 페이지 가져오기
const HomePage = lazy(() => import("../pages/HomePage"));
const IntroductionPage = lazy(() => import("../pages/IntroductionPage"));
const PortfolioPage = lazy(() => import("../pages/PortfolioPage"));
const StudyPage = lazy(() => import("../pages/StudyPage"));
const HobbyPage = lazy(() => import("../pages/HobbyPage"));
const CommunityPage = lazy(() => import("../pages/CommunityPage"));

//createBrowserRouter : DispatcherServlet의 Controller 같은 친구
const root = createBrowserRouter([
    {
        //path : @mapping 같은 친구
        path:"",
        //element : return 같은 친구
        element:<Suspense fallback={Loading}><HomePage/></Suspense>,
        //Suspense : 로딩창 구현 및 로딩 개선
        // - fallback : 로딩창 호출
        // - lazy : 로딩 개선
    },
    {
        path:"introduction",
        element:<Suspense fallback={Loading}><IntroductionPage/></Suspense>,
        children:IntroRouter()
    },
    {
        path:"portfolio",
        element:<Suspense fallback={Loading}><PortfolioPage/></Suspense>
    },
    {
        path:"study",
        element:<Suspense fallback={Loading}><StudyPage/></Suspense>,
        children:StudyRouter()
    },
    {
        path:"hobby",
        element:<Suspense fallback={Loading}><HobbyPage/></Suspense>,
        children:HobbyRouter()
    },
    {
        path:"community",
        element:<Suspense fallback={Loading}><CommunityPage/></Suspense>,
        children:CommunityRouter()
    },
], {
    basename: "/Blog" // Blog 하위로 들어오는 경로 캐치
});

//외부 참조 허락
export default root;