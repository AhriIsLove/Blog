import { useEffect, useState } from 'react';
import { getInfo } from '../../../api/IntroductionAPI';
import { prefix } from '../../../api/MainAPI';

const InfoComponent = () => {
    //API : InfoDTO
    const initInfoDTO = {
        infoId: "",
        e_name: "",
        c_name: "",
        age: 0,
        birth: "",
        profile: "",
        address: "",
        email: "",
        tel: "",
        link_youtube: "",
    };

    const [infoDTO, setInfoDTO] = useState(initInfoDTO);

    useEffect(() => {
        getInfo().then(data => {
            //이미지 경로 수정
            data.profile = prefix + "/image/" + data.profile;

            setInfoDTO(data);
        });
    }, []);

    return (
        <div className="relative w-full h-full mt-5
        max-w-[700px]
        flex flex-col gap-5">
            <div className='w-full mt-10
            text-5xl text-myFontColor-900 
            flex flex-row'>
                <div className="w-6 h-6 bg-myFontColor-900 rounded-full my-auto mx-2"></div>
                인적사항
            </div>
            <div className='flex flex-row'>
                <img className="tableData w-1/4 p-0"
                    alt="사진" src={infoDTO.profile ? infoDTO.profile : "default.png"}>
                </img>

                <table className="w-3/4">
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="tableData" >이름</td>
                            <td className="tableData" colSpan={3}>{infoDTO.infoId.name}</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >영문</td>
                            <td className="tableData" colSpan={3}>{infoDTO.e_name}</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >한자</td>
                            <td className="tableData" colSpan={3}>{infoDTO.c_name}</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableData" >나이</td>
                            <td className="tableData" >{infoDTO.age}</td>
                            <td className="tableData" >생년월일</td>
                            <td className="tableData" >{infoDTO.birth}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableData w-1/4" >주소</td>
                        <td className="tableData w-3/4" >{infoDTO.address}</td>
                    </tr>
                    <tr>
                        <td className="tableData" >이메일</td>
                        <td className="tableData" >{infoDTO.email}</td>
                    </tr>
                    <tr>
                        <td className="tableData" >TEL</td>
                        <td className="tableData" >{infoDTO.tel}</td>
                    </tr>
                    <tr>
                        <td className="tableData" >유투브</td>
                        <td className="tableData" >{infoDTO.link_youtube}</td>
                    </tr>

                </tbody>
            </table>
            <div className='w-full mt-10
            text-5xl text-myFontColor-900 
            flex flex-row'>
                <div className="w-6 h-6 rounded-full my-auto mx-2
                bg-myFontColor-900"></div>
                학력
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableData w-5/12">기간</td>
                        <td className="tableData w-5/12">학교명</td>
                        <td className="tableData w-2/12">전공</td>
                    </tr>
                    <tr>
                        <td className="tableData">2013.03 ~ 2020.02</td>
                        <td className="tableData">배재대학교</td>
                        <td className="tableData">게임공학과</td>
                    </tr>
                    <tr>
                        <td className="tableData">2009.03 ~ 2012.02</td>
                        <td className="tableData">단국대학교 사범대학 부속 고등학교</td>
                        <td className="tableData">게임공학과</td>
                    </tr>
                </tbody>
            </table>
            <div className='w-full mt-10
            text-5xl text-myFontColor-900 
            flex flex-row'>
                <div className="w-6 h-6 rounded-full my-auto mx-2
                bg-myFontColor-900"></div>
                경력
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableData w-3/12">기간</td>
                        <td className="tableData w-2/12">회사명</td>
                        <td className="tableData w-2/12">부서</td>
                        <td className="tableData w-2/12">직급</td>
                        <td className="tableData w-3/12">담당업무</td>
                    </tr>
                    <tr>
                        <td className="tableData">2013.03 ~ 2020.02</td>
                        <td className="tableData">에이알테크놀로지</td>
                        <td className="tableData">SW 개발팀</td>
                        <td className="tableData">대리</td>
                        <td className="tableData">SW 개발</td>
                    </tr>
                    <tr>
                        <td className="tableData">2013.03 ~ 2020.02</td>
                        <td className="tableData">유토비즈</td>
                        <td className="tableData">M&S 개발팀</td>
                        <td className="tableData">사원</td>
                        <td className="tableData">M&S 개발</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InfoComponent;