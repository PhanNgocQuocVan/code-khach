import React from 'react';

const HeroSection = () => {
  const keyFeatures = [
    "Giáo trình chuẩn ĐH Ngôn Ngữ Bắc Kinh",
    "Slide sinh động - Dễ học dễ nhớ dễ ứng dụng",
    "Sĩ số lớp siêu nhỏ 1-2-8 - Giáo viên sửa lỗi cho tới khi dùng được",
    "Học mọi lúc mọi nơi từ 9 - 23 giờ mỗi ngày",
    "Học phí chỉ từ 100K/ buổi"
  ];

  return (
    <section className="bg-red-600 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Khóa học Tiếng Trung sỉ số nhỏ phát triển toàn diện Nghe - Nói - Đọc - Viết - Dịch
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Cam kết thành thạo giao tiếp chỉ sau 6 tháng
        </p>

        <div className="flex justify-center mb-10">
          <ul className="text-left space-y-4 max-w-2xl">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 shadow-lg transform hover:scale-105">
          ĐĂNG KÝ HỌC THỬ NGAY
        </button>
      </div>
    </section>
  );
};

export default HeroSection;