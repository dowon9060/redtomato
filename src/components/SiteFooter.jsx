import { Link } from "react-router-dom";
import { businessLegal, businessName, franchiseInquiryHotline } from "../data/siteContent";
import { Reveal } from "./pageMotion.jsx";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Reveal type="up">
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <strong>{businessName}</strong>
            <p className="footer-tagline">이름처럼 선명한 맛, 감각적인 한 판.</p>
          </div>

          <div className="footer-links">
            <Link to="/bangto">빨토 히스토리</Link>
            <Link to="/menu">메뉴</Link>
            <Link to="/franchise">창업 문의</Link>
            <Link to="/store">매장</Link>
          </div>
        </div>

        <div className="container footer-legal">
          <dl className="footer-legal-list">
            <div className="footer-legal-item">
              <dt>상호</dt>
              <dd>{businessLegal.tradeName}</dd>
            </div>
            <div className="footer-legal-item">
              <dt>대표</dt>
              <dd>{businessLegal.representative}</dd>
            </div>
            <div className="footer-legal-item">
              <dt>사업자등록번호</dt>
              <dd>{businessLegal.registrationNumber}</dd>
            </div>
            <div className="footer-legal-item footer-legal-item--wide">
              <dt>주소</dt>
              <dd>{businessLegal.address}</dd>
            </div>
            <div className="footer-legal-item">
              <dt>창업 문의</dt>
              <dd>
                <a className="footer-hotline" href={franchiseInquiryHotline.telHref}>
                  {franchiseInquiryHotline.display}
                </a>
              </dd>
            </div>
          </dl>
          <p className="footer-copy">© {year} {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </Reveal>
  );
}
