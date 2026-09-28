import { businessLegal } from "./siteContent.js";

/** 창업 문의 — 개인정보 수집·이용 동의 */
export const franchiseInquiryPrivacyConsent = {
  checkboxLabel: "[필수] 개인정보 수집·이용에 동의합니다.",
  details: [
    {
      title: "수집 항목",
      body: "이름, 연락처, 희망 지역",
    },
    {
      title: "수집·이용 목적",
      body: "창업(가맹) 문의 상담, 담당자 연락 및 문의 이력 관리",
    },
    {
      title: "보유·이용 기간",
      body: "문의 처리 완료 후 1년, 또는 관련 법령에 따른 보존 기간",
    },
    {
      title: "개인정보 처리자",
      body: `${businessLegal.tradeName} (대표 ${businessLegal.representative})`,
    },
    {
      title: "동의 거부 권리",
      body: "동의를 거부할 수 있으나, 거부 시 창업 문의 접수 및 상담 연결이 제한될 수 있습니다.",
    },
  ],
};
