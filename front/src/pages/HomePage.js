import SearchComponent from "../components/container/SearchComponent";
import BasicLayout from "../layouts/BasicLayout";

const HomePage = () => {
    //화면 리턴
    return (
        <BasicLayout>
            {/* children */}
            <SearchComponent/>
        </BasicLayout>
    );
}

export default HomePage;