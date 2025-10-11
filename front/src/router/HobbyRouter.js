import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";
import LoginComponent from "../components/container/LoginComponent";

const Loading = <div>Loading...</div>
const GameListPage = lazy(() => import("../pages/hobby/GameListPage"));
const GameRegistPage = lazy(() => import("../pages/hobby/GameRegistPage"));
const GamePage = lazy(() => import("../pages/hobby/GamePage"));
const GameEditPage = lazy(() => import("../pages/hobby/GameEditPage"));
const CollectPage = lazy(() => import("../pages/hobby/CollectPage"));

const HobbyRouter = () => {
    return [
        {
            path: "",
            element: <Navigate replace to="game" />
        },
        {
            path: "game",
            element: (
                <Suspense fallback={Loading}><GameListPage /></Suspense>
            )
        },
        {
            path: "game/regist",
            element: sessionStorage.getItem("auth") === "admin" ? (
                <Suspense fallback={Loading}><GameRegistPage /></Suspense>
            ) : (
                <Suspense fallback={Loading}><LoginComponent /></Suspense>
            )
        },
        {
            path: "game/:gameId",
            element: (
                <Suspense fallback={Loading}><GamePage /></Suspense>
            )
        },
        {
            path: "game/edit/:gameId",
            element: sessionStorage.getItem("auth") === "admin" ? (
                <Suspense fallback={Loading}><GameEditPage /></Suspense>
            ) : (
                <Suspense fallback={Loading}><LoginComponent /></Suspense>
            )
        },
        {
            path: "collect",
            element: (
                <Suspense fallback={Loading}><CollectPage /></Suspense>
            )
        },
    ];
};

export default HobbyRouter;