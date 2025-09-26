import { useState } from "react";

const PersonalPage = () => {
    //화면 리턴
    const projects = [
        {
            name: "AssemERP",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>컴퓨터 조립 판매 ERP</b><br />
                            컴퓨터 조립 업체의 업무 효율성과 데이터 관리를 향상시키기 위해 ERP 시스템을 개발하였습니다.<br />
                            품목 관리, 재고 관리, 조립 공정, 주문 처리, 거래처 관리, 월마감 등 전반적인 비즈니스 프로세스를 하나의 플랫폼에서 체계적으로 운영할 수 있도록 지원합니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2, 3, 4, 5].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/AssemERP_${num}.png`}
                                    alt={`AssemERP 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li><b>품목 및 재고 관리</b></li>
                            <li>조립 공정 관리</li>
                            <li>주문 및 거래처 관리</li>
                            <li><b>월마감 및 통계</b></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">사용 기술</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>Language : Java</li>
                            <li>Tool : Eclipse</li>
                            <li>Framework : Spring Boot</li>
                            <li>Library : JPA, MyBatis, Lombok, JSP, jQuery, BootStrap, AJAX</li>
                            <li>DataBase : Oracle</li>
                            <li>형상 관리 : github</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            Oracle DB와의 연동을 통해 안정적인 데이터 관리를 구현하였으며, 함수/프로시저/패키지/트리거/스케쥴링을 활용하여 복잡한 ERP 비즈니스 로직 처리를 성공적으로 수행하였습니다.
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <ul className="list-disc ml-8 text-myFontColor-700">
                                <li><b>기술</b><p>Java/Spring 기반으로 ERP 핵심인 재고 관리 프로세스를 성공적으로 구축하여, 엔터프라이즈 시스템 개발 역량을 향상시켰습니다.</p></li>
                                <li><b>팀워크</b><p>짧은 시간 안에 내 프로젝트 완수를 위해 기능적 우선순위를 명확히 하고, 합리적인 조율을 통해 실질적 제약 속 최적 결과를 도출하는 협업 능력을 길렀습니다.</p></li>
                                <li><b>문제해결</b><p>웹 시스템의 동시 접속 안정성 문제를 기본 원리와 설계 패턴에 충실한 아키텍처 구현으로 해결하며, 안정적인 서비스 구축 역량을 입증했습니다.</p></li>
                                <li><b>지식</b><p>WEB 기술과 ERP의 핵심인 재고/물류 관리 프로세스에 대한 비즈니스 지식을 습득하였습니다.</p></li>
                            </ul>
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://github.com/ppodong-bro/Team_OB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://github.com/ppodong-bro/Team_OB
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "MSTD",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>MetalSlug Tower Defense</b><br />
                            <b>메탈슬러그 타워 디펜스</b><br />
                            플레이어가 다양한 타워를 전략적으로 설치해 끊임없이 몰려오는 적의 공격을 막는 방어형 전략 게임입니다. <br/>
                            자원을 효율적으로 관리하고 적의 예상 경로와 타워의 공격 범위를 고려한 미로를 설계하여 방어 전략을 수립하는 과정에서 오는 성취감을 제공합니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/MSTD_${num}.png`}
                                    alt={`MSTD 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>레벨/맵 디자인</li>
                            <li>UI/UX</li>
                            <li>타워 로직</li>
                            <li>유닛 로직</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            개발하는 과정에서 미래 변화에 유연하게 대응하고, 지속적인 콘텐츠 추가와 기능 개선이 용이하도록 시스템 전반에 걸쳐 모듈화 전략을 적극적으로 도입하여 게임의 확장성을 높였습니다.
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <ul className="list-disc ml-8 text-myFontColor-700">
                                <li><b>기술</b><p>재사용 가능한 템플릿 객체 구조 활용으로 UI/UX 구현 효율성과 최적화 기술 역량을 성장시켰습니다. 이를 통해 코드 재사용성과 유지보수성을 높이는 설계 역량을 강화했습니다.</p></li>
                                <li><b>문제해결</b><p>초반 지루한 플레이를 극복하기 위해 사용자 관점의 레벨 디자인 연구를 하여 플레이 다양성 증대 방안을 모색하며 게임 기획 역량을 향상시켰습니다.</p></li>
                            </ul>
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.youtube.com/watch?v=Lu75F75O-A8&t=6s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.youtube.com/watch?v=Lu75F75O-A8&t=6s
                            </a>
                        </p>
                    </section>
                </div>
            ),
        },
        {
            name: "Righteous Crime",
            details: (
                <div className="space-y-4 text-base">
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">프로젝트 개요</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <b>정의로운 범죄</b><br />
                            플레이어가 몰입감 넘치는 3D 환경에서 적을 피해 임무를 수행하는 게임입니다. <br />
                            실시간 전투와 AI 적군 구현, 다양한 잠입 기술 등 핵심 기능을 통해 긴장감과 재미를 극대화하는 데 중점을 두었습니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {[1, 2].map(num => (
                                <img
                                    key={num}
                                    src={`/images/Portfolio/Righteous Crime_${num}.png`}
                                    alt={`Righteous Crime 프로젝트 스크린샷 ${num}`}
                                    className="rounded shadow max-w-xs w-full"
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">주요 기능</h3>
                        <ul className="list-disc ml-8 text-myFontColor-700">
                            <li>스토리 기획</li>
                            <li>레벨/3D 맵 디자인</li>
                            <li>적군 AI</li>
                            <li>객체 상호작용</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">결과 및 성과</h3>
                        <p className="ml-4 text-myFontColor-700">
                            적의 시야/청각 범위, 경계 상태 전환, 순찰 패턴, 협동 및 보고 시스템 등 다층적인 AI 행동 로직을 설계하고, 행동 트리와 상태 머신과 같은 AI 아키텍처를 도입하여 복잡한 AI 로직을 효율적으로 관리하여 향후 기능 확장 및 유지보수 용이성을 확보하였습니다.
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">성장 경험</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <ul className="list-disc ml-8 text-myFontColor-700">
                                <li><b>기술</b><p>C# 객체 지향 및 Unity 엔진 활용 심화로 복잡한 게임 로직 구현 기술 역량을 성장시켰습니다.</p></li>
                                <li><b>팀워크</b><p>팀 목표를 위한 의견 조율과 상호 양보의 중요성을 체득하며 효율적인 협업 능력을 길렀습니다.</p></li>
                                <li><b>문제해결</b><p>기능추가에 몰입한 나머지 재시도/재시작과 같은 초기화에 대한 처리가 늦어지는 문제가 발생하였고 기능 외 UI/UX 및 최적화의 중요성을 깨닫고 분석/설계 단계부터 포괄적으로 고려하는 시야를 넓혔습니다.</p></li>
                            </ul>
                        </p>
                    </section>
                    <section>
                        <h3 className="font-semibold text-myFontColor-800 mb-1">상세보기</h3>
                        <p className="ml-4 text-myFontColor-700">
                            <a
                                href="https://www.youtube.com/watch?v=WWVOWPSs9RY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://www.youtube.com/watch?v=WWVOWPSs9RY
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
                개인/팀 프로젝트
            </div>
            <div className="mt-4 text-base text-myFontColor-700 text-center max-w-xl">
                개인 및 팀 프로젝트의 포트폴리오를 소개하는 공간입니다. 각 프로젝트의 개요, 주요 기능, 사용 기술, 개발 과정, 그리고 결과와 느낀점을 간단히 정리하였습니다.
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

export default PersonalPage;