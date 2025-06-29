export const Design_Hamburger = () => {
    return(
        // w-6 h-6 : 크기 설정
        // strokeLinecap : 선의 끝 포인트 마감 처리
        // strokeLinejoin : 선이 만나는 포인트 마감 처리
        // viewBox : SVG 요소의 영역 좌표 선언
        // d : 경로 모양 정의(className과 비슷)
        // M4 6 : 4,6좌표로 이동
        // h16 : 수평 16 이동
        <svg className="w-10 h-10 text-gray-500" fill="none" 
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        viewBox="0 0 24 24" stroke="currentColor">
            <path d="
            M4 6 h16 
            M4 12 h16 
            M4 18 h16"></path>
        </svg>
    );
};
