import { Link } from "react-router-dom";
import { businessName } from "../data/siteContent";
import { Reveal } from "./pageMotion.jsx";

export default function SiteFooter() {
  return (
    <Reveal type="up">
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>{businessName}</strong>
            <p>이름처럼 선명한 맛, 감각적인 한 판.</p>
          </div>

          <div className="footer-links">
            <Link to="/bangto">빨토 히스토리</Link>
            <Link to="/menu">메뉴</Link>
            <Link to="/franchise">창업 문의</Link>
            <Link to="/store">매장</Link>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
