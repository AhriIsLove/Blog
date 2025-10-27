import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";
import LoginComponent from "../components/container/LoginComponent";

const Loading = <div>Loading...</div>
const ItListPage = lazy(() => import("../pages/study/ItListPage"));
const ItRegistPage = lazy(() => import("../pages/study/ItRegistPage"));
const ItPage = lazy(() => import("../pages/study/ItPage"));
const ItEditPage = lazy(() => import("../pages/study/ItEditPage"));
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
            element:<Suspense fallback={Loading}><ItListPage/></Suspense>
        },
        {
            path: "it/regist",
            element: sessionStorage.getItem("auth") === "admin" ? (
                <Suspense fallback={Loading}><ItRegistPage /></Suspense>
            ) : (
                <Suspense fallback={Loading}><LoginComponent /></Suspense>
            )
        },
        {
            path:"it/:id",
            element:<Suspense fallback={Loading}><ItPage/></Suspense>
        },
        {
            path: "it/edit/:itId",
            element: sessionStorage.getItem("auth") === "admin" ? (
                <Suspense fallback={Loading}><ItEditPage /></Suspense>
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