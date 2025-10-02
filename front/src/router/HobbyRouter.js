import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const GamePage = lazy(() => import("../pages/hobby/GamePage"));
const GameRegistPage = lazy(() => import("../pages/hobby/GameRegistPage"));
const CollectPage = lazy(() => import("../pages/hobby/CollectPage"));

const HobbyRouter = () => {

    return [
        {
            path: "",
            element: <Navigate replace to="game" />
        },
        {
            path: "game",
            element: <Suspense fallback={Loading}><GamePage /></Suspense>
        },
        {
            path: "game/regist",
            element: <Suspense fallback={Loading}><GameRegistPage /></Suspense>
        },
        {
            path: "collect",
            element: <Suspense fallback={Loading}><CollectPage /></Suspense>
        },
    ];
};

export default HobbyRouter;