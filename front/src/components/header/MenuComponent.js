// MenuComponent.js 파일 생성해서 데이터 저장하기
export const MenuComponent = {
        dtoList: [
        {
            id: 1,
            name: "인물소개",
            link: "/introduction",
            parent_id: null,
            search: [],
            sub_menus: [
            { id: 101, name: "인적사항", link: "/info#info", parent_id: 1, search: [], sub_menus: [] },
            { id: 102, name: "학력", link: "/info#education", parent_id: 1, search: [], sub_menus: [] },
            { id: 103, name: "경력", link: "/info#career", parent_id: 1, search: [], sub_menus: [] },
            { id: 104, name: "자격증", link: "/info#license", parent_id: 1, search: [], sub_menus: [] },
            { id: 106, name: "TMI", link: "/tmi", parent_id: 1, search: [], sub_menus: [] },
            ],
        },
        {
            id: 2,
            name: "포트폴리오",
            link: "/portfolio",
            parent_id: null,
            search: [],
            sub_menus: [
            { id: 201, name: "개인", link: "#personal", parent_id: 2, search: [], sub_menus: [] },
            { id: 202, name: "ART", link: "#art", parent_id: 2, search: [], sub_menus: [] },
            { id: 203, name: "Utobiz", link: "#utobiz", parent_id: 2, search: [], sub_menus: [] },
            ],
        },
        {
            id: 3,
            name: "공부",
            link: "/study",
            parent_id: null,
            search: [],
            sub_menus: [
            { id: 301, name: "알고리즘", link: "/algorithm", parent_id: 3, search: [], sub_menus: [] },
            // { id: 302, name: "네트워크", link: "/network", parent_id: 3, search: [], sub_menus: [] },
            // { id: 303, name: "용어", link: "/term", parent_id: 3, search: [], sub_menus: [] },
            // { id: 304, name: "오답노트", link: "/mistake", parent_id: 3, search: [], sub_menus: [] },
            ],
        },
        {
            id: 4,
            name: "취미",
            link: "/hobby",
            parent_id: null,
            search: [],
            sub_menus: [
            { id: 401, name: "게임", link: "/game", parent_id: 4, search: [], sub_menus: [] },
            { id: 402, name: "수집", link: "/collect", parent_id: 4, search: [], sub_menus: [] },
            ],
        },
        {
            id: 5,
            name: "커뮤니티",
            link: "/community",
            parent_id: null,
            search: [],
            sub_menus: [
            { id: 501, name: "자유게시판", link: "/board", parent_id: 5, search: [], sub_menus: [] },
            ],
        },
    ],
    maxSubMenuCount: 5,
};
