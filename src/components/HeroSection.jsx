import React from "react";

const HeroSection = () => {
  const keyFeatures = [
    "Nhân ngày Nhà giáo Việt Nam, ALOHA xin gửi triệu lời tri ân sâu sắc đến các thầy cô giáo đã luôn tận tâm, nhiệt huyết và đồng hành cùng học viên trên hành trình chinh phục tri thức",
  ];

  return (
    <section className="py-20 px-4 bg-green-50 bg-banner relative">
      {/* Overlay to make text stand out */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center justify-center">
            <h1
              className="text-4xl text-center md:text-6xl font-extrabold mb-4
                         text-white
                         [text-shadow:4px_4px_0_#35b14a,7px_7px_0_#0f7c3d]"
            >
              ALOHA HSK Online
            </h1>
            <h2
              className="text-2xl text-center md:text-3xl font-bold mb-8
                         text-white
                         [text-shadow:3px_3px_0_#35b14a,5px_5px_0_#0f7c3d]"
            >
              Tháng tri ân - Sale bội phần
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 w-full text-center
                         text-white drop-shadow-md"
              // Giữ text-shadow đơn giản cho đoạn văn
            >
              {keyFeatures[0]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
