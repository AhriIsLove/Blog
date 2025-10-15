import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const AlgorithmListPage = lazy(() => import("../pages/study/AlgorithmListPage"));
const AlgorithmRegistPage = lazy(() => import("../pages/study/AlgorithmRegistPage"));
const AlgorithmPage = lazy(() => import("../pages/study/AlgorithmPage"));
const NetworkPage = lazy(() => import("../pages/study/NetworkPage"));
const TermPage = lazy(() => import("../pages/study/TermPage"));
const MistakePage = lazy(() => import("../pages/study/MistakePage"));

const StudyRouter = () => {
    return [
        {
            path:"",
            element:<Navigate replace to="algorithm"></Navigate>
        },
        {
            path:"algorithm",
            element:<Suspense fallback={Loading}><AlgorithmListPage/></Suspense>
        },
        {
            path:"algorithm/regist",
            element:<Suspense fallback={Loading}><AlgorithmRegistPage/></Suspense>
        },
        {
            path:"algorithm/:id",
            element:<Suspense fallback={Loading}><AlgorithmPage/></Suspense>
        },
        {
            path:"network",
            element:<Suspense fallback={Loading}><NetworkPage/></Suspense>
        },
        {
            path:"term",
            element:<Suspense fallback={Loading}><TermPage/></Suspense>
        },
        {
            path:"mistake",
            element:<Suspense fallback={Loading}><MistakePage/></Suspense>
        },
    ];
};

export default StudyRouter;