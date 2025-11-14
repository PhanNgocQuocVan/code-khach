import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        {/* Logo hoặc Tên Thương Hiệu */}
        <div className="text-2xl font-bold text-blue-700">
          <a href="/">Tên Trung Tâm</a>
        </div>

        {/* Nút Call-to-Action */}
        <nav>
          <button className="bg-yellow-400 text-blue-800 font-bold py-2 px-6 rounded-full text-base hover:bg-yellow-300 transition duration-300 shadow transform hover:scale-105">
            Đăng Ký Học Thử
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;