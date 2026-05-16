import { useState } from "react";

export default function FranchiseInquiryForm({ onDismiss }) {
  const [form, setForm] = useState({ name: "", phone: "", region: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("가맹 문의 접수:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`modal-success franchise-inline-success${onDismiss ? "" : " franchise-inline-success--plain"}`}>
        <div className="modal-success-icon">&#10003;</div>
        <h3>문의가 접수되었습니다</h3>
        <p>빠른 시일 내에 연락드리겠습니다.</p>
        {onDismiss && (
          <button type="button" className="btn btn-primary" onClick={onDismiss}>
            확인
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="modal-form franchise-inline-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>이름</span>
        <input
          type="text"
          name="name"
          placeholder="홍길동"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-field">
        <span>연락처</span>
        <input
          type="tel"
          name="phone"
          placeholder="010-0000-0000"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-field">
        <span>희망 지역</span>
        <input
          type="text"
          name="region"
          placeholder="예) 서울 강남구"
          value={form.region}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className="btn btn-primary modal-submit">
        문의 등록
      </button>
    </form>
  );
}
