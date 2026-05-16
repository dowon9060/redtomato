import { PageHero, Reveal, SectionTitle } from "../components/pageMotion.jsx";
import FranchiseHighlight from "../components/FranchiseHighlight.jsx";
import FranchiseInquiryForm from "../components/FranchiseInquiryForm.jsx";

export default function FranchisePage() {
  return (
    <>
      <PageHero
        eyebrow="Franchise"
        title="창업 문의"
        desc="브랜드 성장과 매장 운영을 함께 만들어가고 싶은 분들을 위해 상담을 받고 있습니다."
      />

      <FranchiseHighlight />

      <section className="section section-soft franchise-page-form-section">
        <div className="container franchise-page-shell">
          <Reveal type="up">
            <SectionTitle
              eyebrow="Inquiry"
              title="문의 남기기"
              desc="내용 접수 후 담당 배정까지 하루~이틀이 소요될 수 있습니다."
              align="center"
            />
          </Reveal>

          <Reveal type="up" delay={0.06}>
            <div className="franchise-page-card">
              <FranchiseInquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
