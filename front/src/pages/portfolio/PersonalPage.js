const PersonalPage = () => {
    //화면 리턴
    return (
        <div className="w-full 
        flex flex-col items-center">
            <div className="text-3xl font-bold text-myFontColor-950">
                개인/팀 포트폴리오
            </div>
            
            <div>
                <div className="text-xl font-semibold mt-6 mb-2">AssemERP</div>
                <ul className="list-disc list-inside text-base ml-4">
                    <li>1. 프로젝트 개요</li>
                    <li>2. 주요 기능</li>
                    <li>3. 사용 기술</li>
                    <li>4. 개발 과정</li>
                    <li>5. 결과 및 느낀점</li>
                </ul>
            </div>
        </div>
    );
}

export default PersonalPage;