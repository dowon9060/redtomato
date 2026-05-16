import { PageHero } from "../components/pageMotion.jsx";
import MenuCatalog from "../components/MenuCatalog.jsx";

export default function MenuPage() {
  return (
    <main className="menu-page-root">
      <PageHero
        eyebrow="Menu"
        title="메뉴"
        desc="토마토의 완성은 소스와 도우 위에서, 한 끼의 완성은 사이드와 함께합니다. 빨간 토마토 피자의 라인업을 모두 만나 보세요."
      />
      <MenuCatalog />
    </main>
  );
}
