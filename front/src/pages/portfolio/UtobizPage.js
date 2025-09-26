import { useState } from "react";

const UtobizPage = () => {
    //화면 리턴
    const projects = [
        {
            name: "수리온",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>수리온 정비 훈련 시스템</b><br />
                            VR기반의 능동형 다자간 동시 팀워크 교육훈련체계로 수리온(KUH-1) 일일정비 점검절차 및 시동/정지 절차 교육 훈련 시스템입니다.<br />
                            VR기반의 교육 환경으로 훈련 비용을 절감하고, 생동감 있는 교육 환경을 통해 훈련생의 동기부여 및 몰입감이 뛰어난 콘텐츠를 제공하며, 
                            다자간 동시 협업 훈련으로 팀 단위 절차 행동을 통한 훈련생의 상호 의사소통 및 실시간 피드백으로 교육 효과를 증대시킵니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2, 3].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/수리온_${num}.png`}
                                    alt={`수리온 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>
                                <b>일일정비 점검절차</b>
                                <p>1~6구역까지 구역별 2명(4명) 팀 단위 정비 훈련 가능</p>
                            </li>
                            <li>
                                <b>시동/정지 절차</b>
                                <p>비행 전, 시동 전, 시동, 비행 후 각종 기기의 정상작동 여부 점검 훈련 가능</p>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>서버 : 교육생 위치/회전 데이터, 시나리오 데이터, 이벤트 데이터를 관리</b></li>
                            <li><b>교관용 통제기 : 교육을 위한 시나리오를 생성/부여하고, 교육생의 훈련 상황을 모니터링</b></li>
                            <li>교육생용 훈련기 : 교육생 위치/회전 데이터, 시나리오 데이터, 이벤트 데이터를 받아 VR화면으로 출력 및 상호작용</li>
                            <li><b>훈련 결과 분석 : 훈련 결과를 분석 및 시각화하고, 교관이 시나리오 생성 시 추천</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C++, C#</li>
                            <li>Tool : Qt Creator, Unity</li>
                            <li>Framework : Qt</li>
                            <li>Library : Qt</li>
                            <li>DataBase : SQLite</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>DB 설계 및 구축을 통하여 교육생의 강점/약점을 축적 및 맞춤형 훈련 시나리오를 추천하는 기능을 추가해 교육 효율성 상승</li>
                            <li>훈련 데이터의 체계적 관리 및 장기 분석을 통하여 교육생 숙련도 변화 추적 및 훈련 효과성 검증으로 신뢰도 증가</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>프로젝트 전반의 분석 과정 참여를 통해 시스템 이해력과 분석력은 물론, 명확한 기술 문서 작성 능력까지 종합적인 개발 역량을 성장시켰습니다.</p></li>
                            <li><b>팀워크</b><p>PM 회의에 참여하며 프로젝트의 큰 그림을 이해하고, 다양한 요구사항을 유연하게 조율하는 역량을 키웠습니다.</p></li>
                            <li><b>문제해결</b><p>고객 요구사항을 정확히 이해하고 팀원에게 명확히 전달하며, 복잡한 요구사항 분석부터 팀 조율까지 주도하여 프로젝트를 완료하였습니다.</p></li>
                            <li><b>지식</b><p>헬기 작동 및 정비에 대한 지식과 훈련 시스템에 대한 흐름을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.utobiz.co.kr/theme/cont_basic/contents/file/sub_03d.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.utobiz.co.kr/theme/cont_basic/contents/file/sub_03d.php
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "운반용 단말 자동시험 장비",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            위성과 신호를 송수신 하기 위한 운반용 단말 장비의 성능 검증을 위한 자동시험 장비입니다.<br/>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/운반용 단말 자동시험 장비_${num}.png`}
                                    alt={`운반용 단말 자동시험 장비 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <p className="ml-4 text-myFontColor-700">
                            신호 발생기와 운반용 단말, 운반용 단말과 신호수신기간의 신호를 주고 받으며 송수신된 신호의 패턴/진폭/파장 등을 분석하고, 노이즈/손실 등을 계산하여 정상적인 송수신이 가능한지 검증
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>신호 발생기</li>
                            <li>신호 수신기</li>
                            <li>RF 매트릭스</li>
                            <li>운반용 단말</li>
                            <li><b>운반용 단말 자동시험 장비</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C#</li>
                            <li>Tool : Visual Studio</li>
                            <li>Framework : .Net</li>
                            <li>Library : WPF</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            위성 송수신 장비 및 고도화된 RF 분석 관련 개념들을 빠르게 습득하고 완벽하게 이해하여 운반용 단말의 성능을 정밀하게 검증하는 자동시험 시스템의 정확성 확보
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>C# 및 WPF 기반 자동화 시스템 구현을 통해 MVVM 패턴 이해를 심화하고, 다중 스레드 처리를 통한 시스템 최적화 역량을 성장시켰습니다.</p></li>
                            <li><b>팀워크</b><p>다양한 외부 기업들과의 소통 및 기록 관리의 중요성을 체감하며, 복잡한 협업 속에서 효과적인 소통 기술을 향상시켰습니다.</p></li>
                            <li><b>문제해결</b><p>방대한 데이터 검증 시간 문제 해결을 위해 기록 데이터를 가공, 검증 시간을 단축하여 데이터 기반의 효율적 프로세스 구축 역량을 성장시켰습니다.</p></li>
                            <li><b>지식</b><p>위성 신호 송수신 기술 및 분석에 대한 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.hanwhasystems.com/kr/business/defense/space/space_index.do"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.hanwhasystems.com/kr/business/defense/space/space_index.do
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "VR 테이저건",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>VR 테이저건 훈련 시스템</b><br />
                            가상현실에서 좁은 공간에서도 실전처럼 실제 상황에 대비한 테이저건 훈련을 할 수 있는 시스템입니다.<br />
                            국민과 경찰관의 안전확보를 위해 실전과 같은 테이저건 훈련이 필요하였으나 현장경찰관(교육생)의 훈련 기회가 턱없이 부족하여 좁은 공간에서도 실전처럼 실제 상황에 대비한 훈련을 할 수 있는 VR 테이저건 훈련 시스템입니다.<br />
                            은행강도, 지구대 급습 등 다양한 상황별 시나리오를 제공하여 교육생에게 실전과 같은 경험을 제공합니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2, 3, 4].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/테이저건_${num}.png`}
                                    alt={`테이저건 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>
                                <b>교관용 통제기</b>
                                <ul className="list-[circle] ml-8">
                                    <li><b>훈련 통제</b></li>
                                    <li><b>훈련 모니터링</b></li>
                                    <li><b>훈련 리뷰</b></li>
                                </ul>
                            </li>
                            <li>
                                교육생용 훈련기
                                <ul className="list-[circle] ml-8">
                                    <li>실내 사격 연습</li>
                                    <li>실외 사격 연습</li>
                                    <li>이동 사격 연습</li>
                                    <li>상황 훈련</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>서버</li>
                            <li><b>교관용 통제기</b></li>
                            <li>교육생용 훈련기</li>
                            <li>테이저건</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C++, C#</li>
                            <li>Tool : Qt Creator, Unity</li>
                            <li>Framework : Qt</li>
                            <li>Library : Qt</li>
                            <li>DataBase : SQLite</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <ul className="list-disc ml-8 text-myFontColor-700">
                                <li>실시간 훈련 상황 모니터링 및 녹화를 통해 훈련 상황 리뷰 기능 추가로 훈련 효과 증대</li>
                                <li>테이저건의 작동 원리, 안전 지침, 발사 시 준수사항 등 정교한 시뮬레이션 구현에 필요한 전문 지식을 습득하고 시스템 설계 및 개발에 적극 반영하여 시스템의 정확도 향상 및 훈련 효과 증대</li>
                            </ul>
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>C++(Qt) 기반 시뮬레이션 시스템과 C#(Unity) VR 콘텐츠 연동을 통해 이종 기술 통합 및 효율적 데이터 연동 역량의 고도화 기술 역량을 성장시켰습니다.</p></li>
                            <li><b>팀워크</b><p>이종 기술 연동 과정의 꾸준하고 밀도 있는 팀원 소통으로 복잡한 프로젝트를 안정적으로 이끌고 성공적인 통합을 구현했습니다.</p></li>
                            <li><b>문제해결</b><p>VR 통신 불안정 문제를 정확하고 단순화한 통신 규약 설정으로 해결하며, 대용량 데이터 전송 안정성을 확보하여 문제를 해결했습니다.</p></li>
                            <li><b>지식</b><p>VR, 테이저건 작동 원리 및 발사 시 주의사항에 대한 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.youtube.com/watch?v=L1ebU_m2j0k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.youtube.com/watch?v=L1ebU_m2j0k
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "대함 모의",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>ASSTS(Anti Ship Simulation Training System)</b><br />
                            <b>대함 모의 훈련 시스템</b><br />
                            소/중/대형함의 훈련으로 함정의 무기체계 모사 및 대함/대잠/대공 전술 훈련하는 시스템입니다.<br />
                            교관의 적 함정 배치에 따라 교육생들은 잠수함의 선원이 되어 각각 지휘관, 잠망경 관측자, 조타수, 음탐사, 어뢰사수 등 역할을 부여 받아 전투상황을 실전과 유사하게 모의하여 훈련합니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/대함모의_${num}.png`}
                                    alt={`대함모의 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>시나리오 설정</b></li>
                            <li><b>훈련 통제</b></li>
                            <li><b>훈련 기록/재연</b></li>
                            <li><b>자함 운용</b></li>
                            <li><b>함정 소음 음탐</b></li>
                            <li><b>어뢰 발사</b></li>
                            <li>잠망경</li>
                            <li>DRT 연동</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>서버</li>
                            <li><b>교관용 통제기</b></li>
                            <li><b>음탐 훈련기</b></li>
                            <li>조타 훈련기</li>
                            <li>잠망경 훈련기</li>
                            <li>DRT</li>
                            <li>상황판</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C++, C#</li>
                            <li>Tool : Qt Creator, Unity</li>
                            <li>Framework : Qt</li>
                            <li>Library : Qt</li>
                            <li>DataBase : SQLite</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <ul className="list-disc ml-8 text-myFontColor-700">
                                <li>해상 전술 및 무기체계를 정밀하게 M&S(Modeling & Simulation)로 구축하여, 훈련 정확성/효율성 증대</li>
                                <li>동시 다발적으로 발생하는 방대한 시뮬레이션 데이터와 다수의 훈련기(음탐, 조타, 잠망경 등) 간의 실시간 연동을 위해 다중 스레드 아키텍처를 설계하고 적용하여, 시스템의 응답성 및 처리 성능을 극대화하고 끊김 없는 안정성 확보</li>
                            </ul>
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>C++와 Qt 기반의 시뮬레이션 시스템 구현 및 사내 라이브러리 UTOESim™의 분석을 통해 코드 분석 역량을 성장시켰습니다.</p></li>
                            <li><b>팀워크</b><p>팀원 간의 투명한 업무 공유와 적극적인 소통을 통해 효율적인 협업을 이끌고 프로젝트를 안정적으로 완수하는 팀워크 역량을 강화하였습니다.</p></li>
                            <li><b>문제해결</b><p>초기 UTOESim™에 대한 이해 부족을 선임 연구원과 소통하고 이해하여 주어진 환경에 빠르게 적응하여 능동적으로 문제를 해결하였습니다.</p></li>
                            <li><b>지식</b><p>GIS, 잠수함의 승무원별 역할(음탐사의 역할), 소리(Sound)의 속도에 따른 피치(높낮이) 변동 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://gdlsys.co.kr/sub/sub02_05.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://gdlsys.co.kr/sub/sub02_05.php
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-3xl font-bold text-myFontColor-950">
                Utobiz 프로젝트
            </div>
            <div className="mt-4 text-base text-myFontColor-700 text-center px-4 md:px-20 lg:px-40">
                Utobiz는 'M&S 기반 AI+X의 결합'의 시뮬레이션 기반(M&S) 지능형 확장 현실(XR) 플랫폼으로 현실과 가상세계를 연결하며 연구/개발을 통하여 다가온 디지털 대전환 시대를 이끌어 나가는 기업입니다. <br />
                Utobiz에서 진행한 주요 프로젝트들을 소개합니다.
            </div>

            {/* 파일탭 스타일의 그룹박스 */}
            <div className="w-full mt-8 px-8">
                <div className="flex">
                    {projects.map((project, idx) => (
                        <button
                            key={project.name}
                            className={`relative px-6 py-2 -mb-px font-semibold transition-colors duration-200
                                ${selected === idx
                                    ? "border-b-0 text-myFontColor-950 bg-white rounded-t-tl rounded-t-tr shadow"
                                    : "border-b-0 text-gray-400 bg-gray-100 hover:text-myFontColor-950"
                                }
                                ${idx !== 0 ? "ml-0" : ""}
                                rounded-t
                                `}
                            style={{
                                zIndex: selected === idx ? 10 : 1,
                                borderTopLeftRadius: "0.5rem",
                                borderTopRightRadius: "0.5rem",
                                borderLeft: idx !== 0 ? "1px solid #e5e7eb" : "none",
                                marginLeft: idx !== 0 ? "0px" : "0px"
                            }}
                            onClick={() => setSelected(idx)}
                        >
                            <span className="flex items-center">
                                {project.name}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="bg-white shadow rounded-b px-6 py-6">
                    <div className="text-2xl font-semibold mb-2 text-myFontColor-950">
                        {projects[selected].name}
                    </div>
                    {projects[selected].details}
                </div>
            </div>
        </div>
    );
}

export default UtobizPage;