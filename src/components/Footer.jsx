import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-8 px-4 border-t-4 border-yellow-400">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Bạn có thể thêm các liên kết nhanh nếu muốn */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white">Chính sách</a>
          <a href="#" className="hover:text-white">Liên hệ</a>
          <a href="#" className="hover:text-white">Giới thiệu</a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tên Trung Tâm. Mọi quyền được bảo lưu.
        </p>
        <p className="text-xs mt-2">
          Website được thiết kế cho mục đích demo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;