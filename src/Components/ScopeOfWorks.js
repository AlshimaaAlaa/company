import React from "react";
import "./style.css";

function Scope() {
  return (
    <>
      <div className="workScope">
        <h1 className="text-center fw-bolder ">نطاق الأعمال</h1>
        <div className=" d-flex  justify-content-center ">
          <hr className="hr2" />
        </div>
        <div className="workScope__items">
          <div className="">
            <div className="workScope__item">
              <div className=" d-flex justify-content-center ">
                <img src="/images/Subcontractor.jpg" alt="Subcontractor" />
              </div>
              <div className="">
                <h5 className="text-center fw-bolder mt-4 mb-3 ">
                  مقاول من الباطن
                </h5>
                <p className="p-3">
                  تتعاون شركة مارين توب مع كبرى المؤسسات والشركات وتعمل معهم
                  كمقاول من الباطن في مشاريع ضخمة وتساهم بخبرتها وكفاءتها
                  وعمالتها ومعداتها في إنجاز هذه المشاريع
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="workScope__item">
              <div className=" d-flex justify-content-center ">
                <img
                  src="/images/Projectpartnership.jpg"
                  alt="Project partnership"
                />
              </div>
              <h5 className="text-center fw-bolder mt-4 mb-3">
                شراكة المشروعات
              </h5>
              <p className="p-3">
                تمتلك شركة مارين توب القدرات والكفاءات والخبرات اللازمة التي
                تؤهلها لتكون شريكاً في شركات محلية وعالمية وفي مشاريع مختلفة
                ومتنوعة تتعلق بمجال الخدمات الملاحية والبترولية
              </p>
            </div>
          </div>
          <div>
            <div className="workScope__item">
              <div className=" d-flex justify-content-center ">
                <img src="/images/Franchise areas.jpg" alt="Franchise areas" />
              </div>
              <h5 className="text-center fw-bolder mt-4 mb-3 ">
                مقاول عام رئيسي
              </h5>
              <p className="p-3">
                تفتخر شركة مارين توب بتنفيذ الأعمال الهندسية والإنشائية
                لمشاريعها، بما في ذلك الأعمال الهندسية لخطوط الغاز الطبيعي
                وإعداد التصاميم وتوريد وتركيب الخطوط وأعمال التشغيل والصيانة
                والدعم الفني واجراءات التراخيص وتوريد العمالة وغيرها من الخدمات
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Scope;
