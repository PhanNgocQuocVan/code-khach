import React from "react";

const HeroSection = () => {
  const keyFeatures = [
    "Giáo trình chuẩn ĐH Ngôn Ngữ Bắc Kinh",
    "Slide sinh động - Dễ học dễ nhớ dễ ứng dụng",
    "Sĩ số lớp siêu nhỏ 1-2-8 - Giáo viên sửa lỗi cho tới khi dùng được",
    "Học mọi lúc mọi nơi từ 9 - 23 giờ mỗi ngày",
    "Học phí chỉ từ 100K/ buổi",
  ];

  return (
    <section className="py-20 px-4 bg-green-50 bg-banner relative">
      {/* Overlay to make text stand out */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
              Khóa học Tiếng Trung sỉ số nhỏ phát triển toàn diện Nghe - Nói -
              Đọc - Viết - Dịch
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Cam kết thành thạo giao tiếp chỉ sau 6 tháng
            </p>

            <ul className="text-left space-y-3 max-w-2xl mx-auto md:mx-0 mb-6">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-300 mr-3 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-400 transition duration-300 shadow-lg transform hover:scale-105">
              ĐĂNG KÝ HỌC THỬ NGAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
