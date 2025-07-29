const SelfintroductionComponent = () => {
    return (
        <div className="relative w-full h-full
        max-w-[700px]
        flex flex-col gap-5">
            <div className='w-full
            text-5xl text-myFontColor-900 
            flex flex-row'>
                <div className="w-6 h-6 bg-myFontColor-900 rounded-full my-auto mx-2"></div>
                자기소개서
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader text-start">나의 과거(동기)</td>
                    </tr>
                    <tr>
                        <td className="tableData">왜 프로그래머를 선택하게 되었나</td>
                    </tr>
                </tbody>
            </table>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader text-start">장점 부각</td>
                    </tr>
                    <tr>
                        <td className="tableData">나의 장점은 진실성</td>
                    </tr>
                </tbody>
            </table>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader text-start">단점 보완</td>
                    </tr>
                    <tr>
                        <td className="tableData">저의 단점은 </td>
                    </tr>
                </tbody>
            </table>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader text-start">나의 미래(포부)</td>
                    </tr>
                    <tr>
                        <td className="tableData">미래에는 AI를 개발 및 활용할 줄 알며 게임을 개발하고 싶다.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SelfintroductionComponent;