import { useEffect, useState } from 'react';
import { getInfo } from '../../../api/IntroductionAPI';
import { prefix } from '../../../api/MainAPI';
import { useLocation } from 'react-router-dom';

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

    // 앵커 위치로 스크롤
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    return (
        <div className="relative w-full h-full
        max-w-[700px]
        flex flex-col gap-5">
            <div className='w-full
            text-5xl text-myFontColor-900 
            flex flex-row
            scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24'
                id='info'>
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
                            <td className="tableHeader">이름</td>
                            <td className="tableData" colSpan={3}>{infoDTO.infoId.name}</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableHeader" >영문</td>
                            <td className="tableData" colSpan={3}>{infoDTO.e_name}</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableHeader" >한자</td>
                            <td className="tableData" colSpan={3}>{infoDTO.c_name}</td>
                            {/* <td></td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td></td>
                            <td className="tableHeader" >나이</td>
                            <td className="tableData" >{infoDTO.age}</td>
                            <td className="tableHeader" >생년월일</td>
                            <td className="tableData" >{infoDTO.birth}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader w-1/4" >주소</td>
                        <td className="tableData w-3/4" >{infoDTO.address}</td>
                    </tr>
                    <tr>
                        <td className="tableHeader" >이메일</td>
                        <td className="tableData" >{infoDTO.email}</td>
                    </tr>
                    <tr>
                        <td className="tableHeader" >TEL</td>
                        <td className="tableData" >{infoDTO.tel}</td>
                    </tr>
                    <tr>
                        <td className="tableHeader" >유투브</td>
                        <td className="tableData" >{infoDTO.link_youtube}</td>
                    </tr>

                </tbody>
            </table>
            <div className='w-full mt-10
            text-5xl text-myFontColor-900 
            flex flex-row
            scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24'
                id='education'>
                <div className="w-6 h-6 rounded-full my-auto mx-2
                bg-myFontColor-900"></div>
                학력
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader w-5/12">기간</td>
                        <td className="tableHeader w-5/12">학교명</td>
                        <td className="tableHeader w-2/12">전공</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2013.03 ~ 2020.02</td>
                        <td className="tableData text-center">배재대학교</td>
                        <td className="tableData text-center">게임공학과</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2009.03 ~ 2012.02</td>
                        <td className="tableData text-center">단국대학교 사범대학 부속 고등학교</td>
                        <td className="tableData text-center">게임공학과</td>
                    </tr>
                </tbody>
            </table>
            <div className='w-full mt-10
            text-5xl text-myFontColor-900 
            flex flex-row
            scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24'
                id='career'>
                <div className="w-6 h-6 rounded-full my-auto mx-2
                bg-myFontColor-900"></div>
                경력
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader w-3/12">기간</td>
                        <td className="tableHeader w-4/12">회사명</td>
                        <td className="tableHeader w-2/12">부서</td>
                        <td className="tableHeader w-1/12">직급</td>
                        <td className="tableHeader w-2/12">담당업무</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2013.03 ~ 2020.02</td>
                        <td className="tableData text-center">에이알테크놀로지</td>
                        <td className="tableData text-center">SW 개발팀</td>
                        <td className="tableData text-center">대리</td>
                        <td className="tableData text-center">SW 개발</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2013.03 ~ 2020.02</td>
                        <td className="tableData text-center">유토비즈</td>
                        <td className="tableData text-center">M&S 개발팀</td>
                        <td className="tableData text-center">사원</td>
                        <td className="tableData text-center">M&S 개발</td>
                    </tr>
                </tbody>
            </table>
            <div className='w-full mt-10
            text-5xl text-myFontColor-900 
            flex flex-row
            scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24'
                id='license'>
                <div className="w-6 h-6 rounded-full my-auto mx-2
                bg-myFontColor-900"></div>
                자격증
            </div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="tableHeader w-2/12">취득일자</td>
                        <td className="tableHeader w-5/12">자격증/교육명</td>
                        <td className="tableHeader w-5/12">발급기관</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2021.06.02</td>
                        <td className="tableData text-center">정보처리기사</td>
                        <td className="tableData text-center">한국산업인력공단</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2025.06.27</td>
                        <td className="tableData text-center">SQLD</td>
                        <td className="tableData text-center">한국데이터산업진흥원</td>
                    </tr>
                    <tr>
                        <td className="tableData text-center">2023.12.05</td>
                        <td className="tableData text-center">게임프로그래밍전문가</td>
                        <td className="tableData text-center">한국콘텐츠진흥원</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InfoComponent;