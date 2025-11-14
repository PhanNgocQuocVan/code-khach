import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-700 to-red-600 shadow-lg sticky top-0 z-50 border-b-4 border-yellow-400">
      <div className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        {/* Logo hoặc Tên Thương Hiệu */}
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>
            <span>Tên Trung Tâm</span>
          </a>
        </div>

        {/* Nút Call-to-Action */}
        <nav>
          <button className="bg-yellow-400 text-red-700 font-bold py-2 px-6 rounded-full text-base hover:bg-yellow-300 transition duration-300 shadow transform hover:scale-105">
            Đăng Ký Học Thử
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;