import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";
import LoginComponent from "../components/container/LoginComponent";

const Loading = <div>Loading...</div>
const AlgorithmListPage = lazy(() => import("../pages/study/AlgorithmListPage"));
const AlgorithmRegistPage = lazy(() => import("../pages/study/AlgorithmRegistPage"));
const AlgorithmPage = lazy(() => import("../pages/study/AlgorithmPage"));
const AlgorithmEditPage = lazy(() => import("../pages/study/AlgorithmEditPage"));
const MoneyPage = lazy(() => import("../pages/study/MoneyPage"));
const TermPage = lazy(() => import("../pages/study/TermPage"));
const MistakePage = lazy(() => import("../pages/study/MistakePage"));

const StudyRouter = () => {
    return [
        {
            path:"",
            element:<Navigate replace to="it"></Navigate>
        },
        {
            path:"it",
            element:<Suspense fallback={Loading}><AlgorithmListPage/></Suspense>
        },
        {
            path: "it/regist",
            element: sessionStorage.getItem("auth") === "admin" ? (
                <Suspense fallback={Loading}><AlgorithmRegistPage /></Suspense>
            ) : (
                <Suspense fallback={Loading}><LoginComponent /></Suspense>
            )
        },
        {
            path:"it/:id",
            element:<Suspense fallback={Loading}><AlgorithmPage/></Suspense>
        },
        {
            path: "it/edit/:algorithmId",
            element: sessionStorage.getItem("auth") === "admin" ? (
                <Suspense fallback={Loading}><AlgorithmEditPage /></Suspense>
            ) : (
                <Suspense fallback={Loading}><LoginComponent /></Suspense>
            )
        },
        {
            path:"money",
            element:<Suspense fallback={Loading}><MoneyPage/></Suspense>
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