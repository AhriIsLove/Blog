import { useState } from "react";

const ARTPage = () => {
    //화면 리턴
    const projects = [
        {
            name: "MMS",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>Multi-Party Collaborative Military Training System</b><br />
                            <b>이음 5G 기반 실감형 다자간 협업 군사교육 훈련 시스템</b><br />
                            5G 특화망 사업으로 전용 주파수를 사용하여 수요처가 필요한 특정 공간 및 시설에서 최첨단 5G 서비스를 구현하였습니다. <br />
                            다양한 지형 및 날씨 환경을 시뮬레이션 할 수 있는 시나리오가 부여되어 특정 상황대처, 임무수행, 협동훈련 등 다양한 훈련이 가능합니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2].map(num => (
                                <img
                                    key={num}
                                    src={`${process.env.PUBLIC_URL}/images/Portfolio/MMS_${num}.png`}
                                    alt={`MMS 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>
                                <b>협업 훈련</b>
                                <ul className="list-[circle] ml-8">
                                    <li><b>교육 통제</b></li>
                                    <li><b>사용자 관리</b></li>
                                    <li><b>교육이력 관리</b></li>
                                    <li><b>시나리오 관리</b></li>
                                    <li><b>훈련 진행 상황 모니터링</b></li>
                                </ul>
                            </li>
                            <li>
                                개인 훈련
                                <ul className="list-[circle] ml-8">
                                    <li>관람 모드</li>
                                    <li>연습 모드</li>
                                    <li>사격 모드</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>서버 : 교육생 위치/회전 데이터, 총기 위치/회전 데이터, 이벤트 데이터를 관리</b></li>
                            <li><b>교관용 통제기 : 특정 상황대처, 임무수행, 협동훈련 시나리오를 생성/부여하고, 교육생을 통제하고, 훈련 결과를 기록 및 시각화</b></li>
                            <li>교육생용 훈련기 : 교육생 위치/회전 데이터, 총기 위치/회전 데이터, 이벤트 데이터를 송수신하여 VR화면으로 출력하고, 상호작용</li>
                            <li>모형 총기 : 총기 위치/회전 데이터와 총기 격발 이벤트 데이터를 교육생용 훈련기에게 송신</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C#</li>
                            <li>Tool : Visual Studio, Unity</li>
                            <li>Framework : .Net</li>
                            <li>Library : WPF</li>
                            <li>DataBase : MariaDB</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            20인 이상 동시 참여가 가능한 VR 훈련 환경에서 교육생 및 장비의 위치/회전, 이벤트 데이터 등 대용량 데이터를 실시간으로 수집 및 처리하며 시스템의 안정성과 훈련 몰입도를 극대화하였습니다.
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>20인 이상의 VR 위치/행동 데이터를 실시간으로 송수신 및 가공 후 표시를 하기 위한 대용량 데이터 처리 기술 역량을 키웠습니다.</p></li>
                            <li><b>팀워크</b><p>대용량 데이터의 안정적인 통신을 위해 각 모듈의 데이터 흐름과 처리 방식을 면밀히 공유하고, 병목 현상 방지 전략을 함께 수립하며 기술적 협업 역량을 강화하였습니다.</p></li>
                            <li><b>문제해결</b><p>대용량 데이터 처리 속도 지연 문제 발생 시, 지연된 데이터를 과감히 버리고 항상 최신 데이터만 사용하여 시스템의 실시간성을 확보했습니다.</p></li>
                            <li><b>지식</b><p>초고속 이음 5G 기반의 대용량 통신 데이터를 효율적으로 처리하는 기술을 습득했습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.youtube.com/watch?v=MFVkS4LPinc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.youtube.com/watch?v=MFVkS4LPinc
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "JSMS",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>Joint Spectrum Management System</b><br />
                            <b>합동 전파 관리 시스템</b><br />
                            국군지휘통신사령부에서 군 전파자원을 효율적으로 관리하고, 전파(스펙트럼)에 대한 간섭분석업무를 시스템화하여 최적의 주파수 운영여건을 보장하기 위한 주파수 획득 및 관리 자동화 시스템입니다. <br />
                            전ㆍ평시 국방분야의 주파수 소요판단, 획득 및 관리를 위해 합참부터 작전사 및 군단급 주파수 관련 부서에서 운용합니다.<br/>
                            B2 및 U3에 서버를 이중화하여 구성합니다<br/>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1].map(num => (
                                <img
                                    key={num}
                                    src={`${process.env.PUBLIC_URL}/images/Portfolio/JSMS_${num}.png`}
                                    alt={`JSMS 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>전파자원(군 승인주파수, 부대별 운용주파수, 제한주파수 등) 관리</b></li>
                            <li><b>통합 스펙트럼 DB(스펙트럼 측정, 무선국/장비제원 현황 등) 관리</b></li>
                            <li><b>전파간섭분석(3D GIS 기반 전파분석, 지형분석, 동적시뮬레이션) 수행</b></li>
                            <li><b>주파수 정책지원(주파수 소요제기 ~ 사용승인까지의 프로세스 관리)을 수행</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>B2/U3 서버</b></li>
                            <li><b>B2/U3 DB 미들웨어</b></li>
                            <li><b>클라이언트</b></li>
                            <li>WEB</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C#, JAVA</li>
                            <li>Tool : Visual Studio, Eclipse</li>
                            <li>Framework : .Net, 전자정부프레임워크</li>
                            <li>Library : WPF</li>
                            <li>DataBase : Oracle, MariaDB</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>DB 스위칭을 위한 DB 미들웨어를 개발하여 서비스 장애 및 서비스 중단 예방</li>
                            <li>Oracle &lt;-&gt; MariaDB 마이그레이션 개발 DB간 동기화를 진행하여 데이터 일관성 유지</li>
                            <li>암호화 적용 및 유지보수를 통해 보안성 강화</li>
                            <li>Hwp 오토메이션을 활용한 보고서 작성 기능 구현으로 사용자 편의성 증대</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>폐쇄적 군 환경에서 JSMS 유지보수를 통해 보안 규정 준수 및 네트워크 환경에 최적화된 통신 시스템 개발 역량을 향상시켰습니다.</p></li>
                            <li><b>팀워크</b><p>현장 사용자 소통으로 요구사항 조율의 중요성을 깨닫고, PM 협의를 통해 효율적으로 프로젝트를 이끄는 협업 역량을 강화했습니다.</p></li>
                            <li><b>문제해결</b><p>보안 제약으로 인한 데이터 전달 문제를 현장 직접 개발로 해결하며, 제한된 환경에서 최적의 솔루션을 찾는 문제 해결 능력을 향상시켰습니다.</p></li>
                            <li><b>지식</b><p>군 부대 특수 네트워크 환경 및 군사 통신 시스템에 대한 깊이 있는 실무 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                </div>
            ),
        },
        {
            name: "VR 드론",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>Drone Simulator</b><br />
                            <b>VR 드론 시뮬레이터</b><br />
                            드론 비행의 동역학 특성과 실제 드론 비행환경을 가상현실에 적용하여 사용자가 실감할 수 있는 비행훈련용 드론 시뮬레이션입니다.<br />
                            드론 조작 튜토리얼, 드론 자격증 시험 코스, 드론 축구 등 다양한 컨텐츠를 제공하여 사용자의 드론 조작 능력을 향상시킵니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2].map(num => (
                                <img
                                    key={num}
                                    src={`${process.env.PUBLIC_URL}/images/Portfolio/DS_${num}.png`}
                                    alt={`DS 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>
                                VR 드론 볼 파티
                                <ul className="list-[circle] ml-8">
                                    <li>로비</li>
                                    <li>드론 축구</li>
                                    <li>드론 농구</li>
                                    <li>폭탄돌리기</li>
                                    <li>코인먹기</li>
                                    <li>깃발뺏기</li>
                                </ul>
                            </li>
                            <li>
                                VR 드론 시뮬레이션
                                <ul className="list-[circle] ml-8">
                                    <li>기술 훈련</li>
                                    <li>GPS 모드</li>
                                    <li>드론 자격 시험</li>
                                    <li>드론 방제 기능</li>
                                    <li>PID 설정</li>
                                    <li>드론 커스터마이징</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">아키텍처</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>서버</li>
                            <li>VR 훈련기</li>
                            <li><b>무선 중계기</b></li>
                            <li><b>RC 컨트롤러</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C++, C#</li>
                            <li>Tool : Visual Studio, Unity</li>
                            <li>OS : Linux, Windows</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>‘무선 환경에서의 VR 드론 비행 시뮬레이터 시스템 구성 방안 연구’ 논문 작성 및 발표하여 우수 발표 논문상을 수상</li>
                            <li>Linux기반 임베디드 환경에서 컨트롤러와 VR 드론과의 무선 데이터 중계 시스템 구축하여 시스템의 확장성, 유연성, 휴대성 증대</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>Linux 기반 임베디드 환경에서 컨트롤러와 VR 드론과의 무선 데이터 중계 시스템을 구축하여 Linux기반의 역량을 향상시켰습니다.</p></li>
                            <li><b>팀워크</b><p>프로토타입 공유와 사용자 피드백을 빠르게 반영하는 사용자 중심의 개발 프로세스를 통해 프로젝트 완성도를 높였습니다.</p></li>
                            <li><b>문제해결</b><p>다양한 컨트롤러 연동의 데이터 호환성 문제를 각 수신기 맞춤형 데이터 관리로 해결하며, 복잡한 인터페이스 통합 능력을 향상시켰습니다.</p></li>
                            <li><b>지식</b><p>Linux, 아두이노/라즈베리파이, Wifi AP, 3D Print, 드론 비행 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.youtube.com/watch?v=x36_q993xKw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.youtube.com/watch?v=x36_q993xKw
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "PZATM/RBIA",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>Protected Zone Analysis Tools Management</b><br />
                            <b>보호 영역 분석 도구 관리</b><br />
                            <b>Radar Boundary Integrated Analysis</b><br />
                            <b>라이다 영역 통합 분석</b><br />
                            전파 분석 및 감지 시스템으로 GIS 및 건물 데이터를 기반으로 국내 좌표간 전파 송수신 가능 여부 분석 시스템입니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2].map(num => (
                                <img
                                    key={num}
                                    src={`${process.env.PUBLIC_URL}/images/Portfolio/PZATM,RBIA_${num}.png`}
                                    alt={`PZATM/RBIA 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>패스프로파일 분석(전파가 건물이나 산 같은 장애물에 가려지지 않고 잘 통하는지 경로를 분석)</b></li>
                            <li><b>무선국 설정(전파를 쏘거나 받는 장비인 무선국의 위치 및 성능 설정)</b></li>
                            <li><b>안테나 패턴/마스크 패턴 설정(전파를 어디로 얼만큼 보낼지 또는 특정 영역에서 전파가 얼마나 줄어드는지 설정)</b></li>
                            <li><b>환경 설정(대기 오염도/습도 등)</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C++, C#</li>
                            <li>Tool : Visual Studio</li>
                            <li>Framework : .Net</li>
                            <li>Library : MFC, WPF</li>
                            <li>형상 관리 : svn</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>기존 C++/MFC 기반의 시스템을 분석하여 C#/WPF 기반의 시스템으로 재 구축으로 시스템 안정성 확보</li>
                            <li>2D•3D GIS 시각화 기능 구현으로 사용자 편의성 확보</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>C++기반의 MFC 프로젝트를 C#기반의 WPF 프로젝트로 재구성 및 고도화하여 코드 이해력과 실전 적용 기술을 향상시켰습니다.</p></li>
                            <li><b>팀워크</b><p>정확한 데이터 입출력 인터페이스 수립의 중요성을 체감하며, 소통을 통해 협업 성공을 위한 체계적 설계 능력을 강화하였습니다.</p></li>
                            <li><b>문제해결</b><p>C++ 사내 라이브러리와 C# WPF 연동 문제를 C#용 인터페이스 추가로 해결하여, 이종 기술 간의 복합적인 통합 문제 해결 능력을 성장시켰습니다.</p></li>
                            <li><b>지식</b><p>C++ 라이브러리 관리 기술, 전파 분석 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.i-art.co.kr/bbs/board.php?bo_table=sub0301&wr_id=42"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.i-art.co.kr/bbs/board.php?bo_table=sub0301&wr_id=42
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "위성망 분석",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>위성망 분석</b><br />
                            위성망 국제 등록 및 혼신조정을 위한 위성망 분석 및 업무 관리 시스템입니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1].map(num => (
                                <img
                                    key={num}
                                    src={`${process.env.PUBLIC_URL}/images/Portfolio/위성망 분석_${num}.png`}
                                    alt={`위성망 분석 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>위성 궤도 계산 및 시각화</b></li>
                            <li><b>위성/무선국 설정(안테나/마스크 패턴)</b></li>
                            <li><b>혼신조정 분석(위성 운용 중 국가간 전파 간섭 조정)</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : C++</li>
                            <li>Tool : VirtualBox, Qt, Visual Studio</li>
                            <li>Framework : .Net, Qt</li>
                            <li>Library : Qt</li>
                            <li>DataBase : MSSQL</li>
                            <li>OS : Windows 98</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>VirtualBox 기반 Windows 98 VM 환경 레거시 시스템의 주요 기능 오류를 성공적으로 식별 및 해결하여 시스템 안정성 확보</li>
                            <li>신규 DB 연결 기능 추가를 통해 시스템의 확장성 부여</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>기술</b><p>Win98 VM 환경 유지보수를 통해 C++과 Qt 기반의 코드 분석 및 디버깅 역량을 고도화했습니다.</p></li>
                            <li><b>팀워크</b><p>실 사용자와 직접 소통하여 비기술적 요구사항을 정확히 식별하고 구현하며, 사용자 중심의 설득력 있는 소통 능력을 강화했습니다.</p></li>
                            <li><b>문제해결</b><p>레거시 시스템의 디버깅 난관을 자체 전략 구축으로 극복하며, 레거시 환경에서의 문제 해결 능력을 성장시켰습니다.</p></li>
                            <li><b>지식</b><p>VM관리 기술, 위성망에 대한 지식을 습득하였습니다.</p></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.i-art.co.kr/bbs/board.php?bo_table=sub0301&wr_id=43"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.i-art.co.kr/bbs/board.php?bo_table=sub0301&wr_id=43
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
                ART 프로젝트
            </div>
            <div className="mt-4 text-base text-myFontColor-700 text-center px-4 md:px-20 lg:px-40">
                ART는 전파분석 및 GIS 분야의 국산화된 핵심 기술을 기반으로 지식기반의 XR 시뮬레이션 플랫폼을 도입하여 시스템 분야 글로벌 기술의 트렌드를 선도하는 기업입니다. <br />
                ART에서 진행한 주요 프로젝트들을 소개합니다.
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

export default ARTPage;