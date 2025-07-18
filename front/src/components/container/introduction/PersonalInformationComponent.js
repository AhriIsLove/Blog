const PersonalInformationComponent = () => {

    return (
        <div>
            <table border="1">
                <tr>
                    <td rowSpan={4}>사진</td>
                    <td rowSpan={4}></td>
                    <td>이름</td>
                    <td>안도건</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                <tr>
                    {/* <td>사진</td> */}
                    {/* <td></td> */}
                    <td>영문</td>
                    <td>An DoGeun</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                <tr>
                    {/* <td>사진</td> */}
                    {/* <td></td> */}
                    <td>한자</td>
                    <td>安度建</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>
                <tr>
                    {/* <td>사진</td> */}
                    {/* <td></td> */}
                    <td>나이</td>
                    <td>35</td>
                    <td>생년월일</td>
                    <td>1993.09.19</td>
                </tr>
            </table>
            <table className="border-2">
                <tr>
                    <td>주소</td>
                    <td>서울 송파구 송파대로 345</td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>dgan123@naver.com</td>
                </tr>
                <tr>
                    <td>TEL</td>
                    <td>010-2944-3756</td>
                </tr>
                <tr>
                    <td>유투브</td>
                    <td>https://www.youtube.com/@AhriLove</td>
                </tr>
            </table>
        </div>
    );
};

export default PersonalInformationComponent;