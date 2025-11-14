import React from "react";
import { Clock, Users, MessageCircle, Calendar } from "lucide-react";
import promoImg from "../assets/section1.png";
import web10 from "../assets/WEB-10.png";
import bg from "../assets/bg.png";
import nguoi from "../assets/nguoi.png";

const problems = [
  {
    title: "Quá bận rộn",
    description:
      "Công việc chồng chéo, tâm trí không tập trung, đang học dở bỏ ngang thì lãng phí.",
    icon: Clock,
  },
  {
    title: "Phức tạp & Đông đúc",
    description:
      "Mặt chữ phức tạp, ngữ pháp nhiều, lớp học đông không được dạy sát sao, sợ không thể tiếp thu được.",
    icon: Users,
  },
  {
    title: "Thiếu người đồng hành",
    description:
      "Không có người đồng hành, cô giáo dạy xong để đấy, sợ học xong vẫn không giao tiếp được.",
    icon: MessageCircle,
  },
  {
    title: "Thời gian không phù hợp",
    description:
      "Thời gian rảnh không phù hợp lịch học trung tâm, học online thì sợ không hiệu quả.",
    icon: Calendar,
  },
];

const ProblemsSection = () => {
  return (
    <section
      className="py-20 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${web10})` }}
    >
      <div className="container mx-auto max-w-5xl mb-10">
        <h1
          className="text-4xl md:text-4xl font-extrabold text-center uppercase"
          style={{
            backgroundImage:
              "linear-gradient(rgb(82, 187, 139), rgb(230, 255, 244))",
            lineHeight: 1.6,
            color: "rgb(1, 166, 90)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "1px rgb(1, 166, 90)", // Kết hợp width và color
            WebkitTextFillColor: "transparent",
          }}
        >
          Khóa học Tiếng Trung sỉ số nhỏ phát triển toàn diện Nghe - Nói - Đọc -
          Viết - Dịch
        </h1>
      </div>
      <div className="relative w-[1300px] m-auto md:h-145 rounded-xl overflow-hidden mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${promoImg})` }}
        />

        <div className="absolute bottom-0 left-40 flex items-center justify-center">
          <button className="transform rounded-full cursor-pointer bg-orange-500 text-white font-extrabold px-8 py-3 text-lg shadow-lg animate-zoom">
            HỌC THỬ NGAY HÔM NAY
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bạn thấy cơ hội lương cao thưởng tốt với tiếng Trung nhưng... <br />
          <span className="text-green-600">Ngại bắt đầu với Tiếng Trung?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="bg-gray-200 relative h-full min-h-[400px] rounded-2xl flex items-center justify-center">
              <img className="w-full h-full object-cover" src={bg} alt="" />
              <img
                className="w-full h-full object-contain absolute bottom-0"
                src={nguoi}
                alt=""
              />
            </div>
          </div>

          {/* --- CỘT NHỎ BÊN PHẢI (chiếm 1/3) --- */}
          {/* Chúng ta dùng 'flex flex-col gap-6' để xếp chồng các 'problems' 
    lên nhau theo chiều dọc.
  */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {/* Đây là code .map() nguyên bản của bạn, 
      được đặt bên trong cột bên phải.
    */}
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-green-200 hover:shadow-lg transition"
                >
                  {/* Icon Container */}
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl">
                      <IconComponent size={32} className="text-green-600" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h3 className="text-center text-3xl font-extrabold text-white uppercase">
          CƠ HỘI không đến từ SUY NGHĨ mà sẽ dành cho người BẮT ĐẦU NGAY!!
        </h3>
      </div>
    </section>
  );
};

export default ProblemsSection;
