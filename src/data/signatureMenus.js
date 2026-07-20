function menuAssetUrl(directory, filename) {
  return `/${encodeURIComponent(directory)}/${encodeURIComponent(filename)}`;
}

/** 홈 인기 메뉴 — 전체 menuCatalog 빌드 없이 경량 로드 */
export const signatureMenus = [
  {
    id: "signature-1",
    name: "베이컨체다쉬림프",
    eng: "",
    desc: "",
    image: menuAssetUrl("시그니쳐메뉴", "베이컨쉬프림피자.jpg"),
  },
  {
    id: "signature-2",
    name: "쉬림프큐브스테이크",
    eng: "",
    desc: "",
    image: menuAssetUrl("시그니쳐메뉴", "쉬프림큐브스테이크피자.jpg"),
  },
  {
    id: "signature-3",
    name: "스윗고구마무스",
    eng: "",
    desc: "",
    image: menuAssetUrl("시그니쳐메뉴", "스윗고구마무스피자.jpg"),
  },
  {
    id: "signature-4",
    name: "체다치즈후라이",
    eng: "",
    desc: "",
    image: menuAssetUrl("시그니쳐메뉴", "체다치즈프라이피자.jpg"),
  },
  {
    id: "signature-5",
    name: "핫칠리쉬림프올인",
    eng: "",
    desc: "",
    image: menuAssetUrl("시그니쳐메뉴", "핫칠리쉬프림올인피자.jpg"),
  },
];
