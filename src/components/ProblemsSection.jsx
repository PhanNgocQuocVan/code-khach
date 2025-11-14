import React from "react";
import { ExternalLink, Settings } from "lucide-react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const problems = [
  {
    title: "Quá bận rộn",
    description:
      "Công việc chồng chéo, tâm trí không tập trung, đang học dở bỏ ngang thì lãng phí.",
  },
  {
    title: "Phức tạp & Đông đúc",
    description:
      "Mặt chữ phức tạp, ngữ pháp nhiều, lớp học đông không được dạy sát sao, sợ không thể tiếp thu được.",
  },
  {
    title: "Thiếu người đồng hành",
    description:
      "Không có người đồng hành, cô giáo dạy xong để đấy, sợ học xong vẫn không giao tiếp được.",
  },
  {
    title: "Thời gian không phù hợp",
    description:
      "Thời gian rảnh không phù hợp lịch học trung tâm, học online thì sợ không hiệu quả.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-green-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bạn thấy cơ hội lương cao thưởng tốt với tiếng Trung nhưng... <br />
          <span className="text-green-600">Ngại bắt đầu với Tiếng Trung?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => {
            const images = [img1, img2, img3, img4];
            const backgroundImage = images[index];

            return (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg group"
              >
                {/* Background Image Container */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2 drop-shadow-lg">
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed drop-shadow-md">
                    {problem.description}
                  </p>
                </div>

                {/* Optional: Video/Action Icon */}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  Your video
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-green-500 hover:text-white transition">
                  <ExternalLink size={20} />
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-center text-2xl font-extrabold text-green-800 uppercase">
          CƠ HỘI không đến từ SUY NGHĨ mà sẽ dành cho người BẮT ĐẦU NGAY!!
        </h3>
      </div>
    </section>
  );
};

export default ProblemsSection;
