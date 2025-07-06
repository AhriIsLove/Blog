import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const BoardPage = lazy(() => import("../pages/community/BoardPage"));

const CommunityRouter = () => {
    return [
        {
            path:"",
            element:<Navigate replace to="board"></Navigate>
        },
        {
            path:"board",
            element:<Suspense fallback={Loading}><BoardPage/></Suspense>
        },
    ];
};

export default CommunityRouter;