import { Link } from "react-router-dom";
import { Reveal } from "./pageMotion.jsx";

export default function SiteFooter() {
  return (
    <Reveal type="up">
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>빨간 토마토 피자</strong>
            <p>이름처럼 선명한 맛, 감각적인 한 판.</p>
          </div>

          <div className="footer-links">
            <Link to="/">빨토</Link>
            <Link to="/menu">메뉴</Link>
            <Link to="/franchise">창업문의</Link>
            <Link to="/store">매장</Link>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
