import logo from '../../../images/info_profile.png';//로고

const PersonalInformationComponent = () => {

    return (
        <div className="relative w-full h-full mt-5
        flex flex-col gap-5">
            <div className='flex flex-row'>
                <img className="tableData w-1/4 p-0"
                    alt="사진" src={logo}>
                </img>

                <table className="w-3/4">
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="tableData" >이름</td>
                            <td className="tableData" colSpan={3}>안도건</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >영문</td>
                            <td className="tableData" colSpan={3}>An DoGeun</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >한자</td>
                            <td className="tableData" colSpan={3}>安度建</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >나이</td>
                            <td className="tableData" >35</td>
                            <td className="tableData" >생년월일</td>
                            <td className="tableData" >1993.09.19</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableData" >주소</td>
                        <td className="tableData" >서울 송파구 송파대로 345</td>
                    </tr>
                    <tr>
                        <td className="tableData" >이메일</td>
                        <td className="tableData" >dgan123@naver.com</td>
                    </tr>
                    <tr>
                        <td className="tableData" >TEL</td>
                        <td className="tableData" >010-2944-3756</td>
                    </tr>
                    <tr>
                        <td className="tableData" >유투브</td>
                        <td className="tableData" >https://www.youtube.com/@AhriLove</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default PersonalInformationComponent;