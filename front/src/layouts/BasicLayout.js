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

            <div className="relative
            z-10 
            bg-myMainColor-50 ">
                <HeaderComponent></HeaderComponent>
            </div>

            <div className="absolute 
            z-0 
            top-0 w-full h-screen 
            bg-myMainColor-50 
            flex items-center justify-center">
                {children}
            </div>
        </>
    )
}

export default BasicLayout;