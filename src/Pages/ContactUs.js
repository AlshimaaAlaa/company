import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("contactus.titles")}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2
        className="fw-bolder mt-5 text-center"
        style={{ fontFamily: "Spectral" }}
      >
        التواصل مع الشركة
      </h2>
      <p className="text-center mt-3" style={{ fontFamily: "Spectral" , fontSize:"20px"}}>
        : نحن هنا لمساعدتك والإجابة على استفساراتك. يمكنك التواصل معنا باستخدام
        الطرق التالي
      </p>
      <div className="contact-us">
        <div className="item1">
          <div className="item1__image">
            <img src="/images/location.png" alt="" />
          </div>
          <div className="mt-5" dir="rtl">
            <h2 className="mb-3 fw-bolder">العنوان : </h2>
            <p>دمياط: فارسكور - شارع 5 حديث</p>
          </div>
        </div>
        <div className="item2">
          <div className="item2__image">
            <img src="/images/phone.png" alt="" />
          </div>
          <div className="mt-5" dir="rtl">
            <h2 className="mb-3 fw-bolder">رقم الهاتف : </h2>
            <p>01025050102 | 01204348040</p>
          </div>
        </div>
        <div className="item3">
          <div className="item3__image">
            <img src="/images/mail.png" alt="" />
          </div>
          <div className="mt-5" dir="rtl">
            <h2 className="mb-3 fw-bolder">البريد الألكتروني : </h2>
            <a href="mailto:Marinetop2.services@gmail.com">
              Marinetop2.services@gmail.com
            </a>
            <br />
            <a href="mailto:bosaty2013@gmail.com">bosaty2013@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
