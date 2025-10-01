import { Outlet } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const StudyPage = () => {
    //URL을 업데이트하고 기록 스택을 관리
    //페이지 이동을 하기 위한 변수 선언
    // const navigate = useNavigate();

    //화면 리턴
    return (
        <BasicLayout>
            <div className="text-3xl">StudyPage</div>
            <Outlet />
        </BasicLayout>
    );
}

export default StudyPage;