import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const clients = [
    { id: 1, logo: "/images/logo1.jpg", alt: "Company 1" }, 
    { id: 2, logo: "/images/logo2.jpg", alt: "Company 2" },
    { id: 3, logo: "/images/logo3.jpg", alt: "Company 3" },
    { id: 4, logo: "/images/logo4.jpg", alt: "Company 4" },
    { id: 5, logo: "/images/logo5.jpg", alt: "Company 5" },
    { id: 5, logo: "/images/logo6.jpg", alt: "Company 5" },
    { id: 5, logo: "/images/logo7.jpg", alt: "Company 5" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="ourClients" dir="rtl">
      <h2 className="section-title text-center fw-bolder">عملائنا الكرام</h2>
      <p className="section-description mt-5 mb-5" style={{ fontSize: "20px" }}>
        نحن نفخر بالتعاون مع بعض الشركات الأكثر شهرة في الصناعة. وفيما يلي بعض
        عملائنا الكرام الذين يثقون بنا في أعمالهم.
      </p>
      <Slider {...sliderSettings} className="clients-slider">
        {clients.map((client) => (
          <div key={client.id} className="client-slide">
            <img src={client.logo} alt={client.alt} className="client-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;