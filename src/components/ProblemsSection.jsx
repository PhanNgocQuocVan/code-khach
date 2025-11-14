import React from 'react';

const problems = [
  {
    title: "Quá bận rộn",
    description: "Công việc chồng chéo, tâm trí không tập trung, đang học dở bỏ ngang thì lãng phí."
  },
  {
    title: "Phức tạp & Đông đúc",
    description: "Mặt chữ phức tạp, ngữ pháp nhiều, lớp học đông không được dạy sát sao, sợ không thể tiếp thu được."
  },
  {
    title: "Thiếu người đồng hành",
    description: "Không có người đồng hành, cô giáo dạy xong để đấy, sợ học xong vẫn không giao tiếp được."
  },
  {
    title: "Thời gian không phù hợp",
    description: "Thời gian rảnh không phù hợp lịch học trung tâm, học online thì sợ không hiệu quả."
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Bạn thấy cơ hội lương cao thưởng tốt với tiếng Trung nhưng... <br />
          <span className="text-red-600">Ngại bắt đầu với Tiếng Trung?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl text-blue-700 mb-2">{problem.title}</h3>
              <p className="text-gray-700">{problem.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-center text-2xl font-extrabold text-blue-800 uppercase">
          CƠ HỘI không đến từ SUY NGHĨ mà sẽ dành cho người BẮT ĐẦU NGAY!!
        </h3>
      </div>
    </section>
  );
};

export default ProblemsSection;