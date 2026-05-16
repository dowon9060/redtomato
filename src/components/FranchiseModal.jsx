import { useEffect, useState } from "react";
import FranchiseInquiryForm from "./FranchiseInquiryForm.jsx";

export default function FranchiseModal({ open, onClose }) {
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (open) setFormKey((k) => k + 1);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="franchise-modal-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="닫기">
          &times;
        </button>

        <div className="modal-header">
          <p className="eyebrow">Franchise Inquiry</p>
          <h3 id="franchise-modal-title">가맹 문의하기</h3>
          <p className="modal-desc">
            아래 정보를 입력해주시면 담당자가 연락드립니다.
          </p>
        </div>

        <FranchiseInquiryForm key={formKey} onDismiss={onClose} />
      </div>
    </div>
  );
}
