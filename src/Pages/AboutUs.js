import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./stylePage.css";

function AboutUs() {
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3)); // Adjusted to ensure at least three images displayed
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const images = [
    { path: "/images/gas.jpg", text: "خدمات النفط و الغاز" },
    { path: "/images/workers.jpg", text: "توريد كافة أنواع العمالة" },
    {
      path: "/images/under.jpg",
      text: "أعمال اللحام بالقوس الكهربائي تحت الماء",
    },
    {
      path: "/images/work6.jpg",
      text: "بناء وحدات خدمية متنوعة ( فنادق خدمية)",
    },
    { path: "/images/equ.jpg", text: "توريد معدات ميكانيكية (مضخات)" },
    { path: "/images/work9.jpg", text: "صيانة خطوط النفط و الغاز" },
    { path: "/images/chemicals.jpg", text: "توريد المواد الكميائية" },
    { path: "/images/work7.jpg", text: "بناء وحدات خدمية متنوعة و مستشفيات" },
    { path: "/images/towers.jpg", text: "انشاء أبراج مراقبة" },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>من نحن</title>
        <link rel="canonical" href="https://Marinetop.net/about-us" />
      </Helmet>

      <div className="about-us mt-5">
        <h1 className=" text-center fw-bolder">من نحن</h1>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <hr className="hr" />
        </div>

        <div className="d-flex justify-content-center  mt-4 ">
          <h5 className=" text-dark text-center w-75  ">
            <span className="fw-bolder fs-4 "> مارين توب </span>

            شركة للخدمات البحرية والبترولية والمقاولات العامة هي شركة مصرية
            تأسست عام 1997. تتخصص الشركة في إنشاء المشروعات الصغيرة والكبيرة
            الحجم وساهمت بشكل ملحوظ في نجاح المشروعات الكبيرة. توفر الشركة توريد
            العمالة الماهرة وتركيب المعدات الكهربائية والميكانيكية وأعمال خطوط
            أنابيب الغاز ومتطلبات السلامة مثل الحواجز والأسوار والأسلاك الشائكة
            وبوابات الكاميرات والتخطيط والبناء ومعسكرات الإقامة وأعمال الحفر
            وتسوية الأراضي.الشركة حاصلة على ترخيص النفايات البيئية وتتعامل مع
            النفايات السائلة والصلبة الخطرة وغير الخطرة. بالإضافة إلى ذلك، فإنها
            توفر خدمات النقل، وصيانة الحدائق، ومكافحة القوارض، والعمليات
            البحرية، وتموين السفن، وصيانتها
          </h5>
        </div>

        <div className="our-work ">
          <h2 className="mt-5 text-center fw-bolder pt-5  ">
            خدماتنا و أنشطتنا
          </h2>
          <div className="d-flex flex-column align-items-center  justify-content-center ">
            <hr className="hr1" />
          </div>

          <div className="work-item">
            {images.slice(startIndex, startIndex + 3).map((image, index) => (
              <div key={index} className="">
                <div>
                  <div className="containers">
                    <div className="img-div">
                      <img src={image.path} className="work-img" alt="" />
                    </div>
                    <div className="overlay">
                      <div className="text ">
                        <h5 className="text-center">{image.text}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between mt-5">
            <button className="ms-4 bg-transparent " onClick={handlePrevious}>
              <img src="/images/leftArrow.jpg" alt="" />
            </button>
            <button className="me-4 bg-transparent " onClick={handleNext}>
              <img src="/images/rightArrow.webp" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
