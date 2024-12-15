import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
function Footer() {
  return (
    <>
      <div className="">
        <div className="footer">
          <div>
            <div>
              <h2 className="fw-bolder">اتصل بنا</h2>
              <div className="d-flex align-items-center ">
                <img src="/images/location.png" width={"20px"} alt="" />
                <p className="mt-4 me-2">دمياط: فارسكور - شارع 5 حديث </p>
              </div>
              <div className="d-flex align-items-center ">
                <img src="/images/mail.png" width={"20px"} alt="" />
                <p className="mt-3 me-2">Marinetop2.services@gmail.com</p>
              </div>
              <div className="d-flex align-items-center ">
                <img src="/images/phone.png" width={"20px"} alt="" />
                <p className="mt-3 me-2">01025050102 - 01204348040</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="fw-bolder">معلومات</h2>
            <p className="mt-4">سياسة الخصوصية</p>
            <p>شروط الخدمة</p>
          </div>
          <div>
            <h2 className="fw-bolder">حساب</h2>
            <p className="mt-3">بحث</p>
            <p>معلومات عنا</p>
            <p>التعلميات</p>
            <p>اتصل بنا</p>
          </div>
          <div>
            <h2 className="fw-bolder">شركات</h2>
            <p className="mt-4">الشركات المدرجة</p>
            <p>دفتر الشركات</p>
            <p>الأرباح</p>
            <p>المعاملات الداخلية</p>
          </div>
        </div>
        <div className="reserved-copy">
          <h5 className="" style={{ marginRight: "" }}>
            جميع الحقوق محفوظة بواسطة مارين توب 2024 ©{" "}
          </h5>
        </div>
      </div>
    </>
  );
}
export default Footer;
