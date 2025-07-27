import HeaderComponent from "../components/header/HeaderComponent";

const BasicLayout = ({ children }) => {
    return (
        <>
            {/* 
            1. 화면 전체
            1-1. 상위 항목과의 관계
            1-2. 높이
            1-3. 위치
            1-4. 크기
            1-5. 배경

            2. 텍스트

            3. 상호작용

            4. 애니메이션

            5. 하위 항목과의 관계

            */}

            {/*
            hidden md:flex
            relative h-full items-center justify-center flex-1
            md:text-base lg:text-xl xl:text-3xl font-extrabold text-myMainColor-950  
            */}

            {/* 헤더 */}
            {/* sticky : 헤더 상단 고정(고정하기위해 위치(top), 크기(w) 고정 필요) */}
            <div className="sticky top-0 w-full
            z-10 
            bg-myMainColor-50 ">
                <HeaderComponent></HeaderComponent>
            </div>

            {/* 메인 */}
            <div className="flex flex-row flex-1">
                {/* 사이드-좌 */}
                <div className="w-1/12">

                </div>

                {/* 컨테이너 */}
                <div className="relative 
                z-0 
                top-0 w-10/12 h-screen 
                bg-myMainColor-50 
                flex items-center justify-center">
                    {children}
                </div>

                {/* 사이드-우 */}
                <div className="w-1/12">

                </div>
            </div>
        </>
    )
}

export default BasicLayout;