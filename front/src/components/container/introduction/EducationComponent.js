const EducationComponent = () => {
    return (
        <div className="relative w-full h-full mt-5
        flex flex-col gap-5">
            <div className='flex flex-row'>
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="tableData" >이름</td>
                            <td className="tableData" colSpan={3}>123</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >영문</td>
                            <td className="tableData" colSpan={3}>123</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >한자</td>
                            <td className="tableData" colSpan={3}>123</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >나이</td>
                            <td className="tableData" >123</td>
                            <td className="tableData" >생년월일</td>
                            <td className="tableData" >123</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EducationComponent;