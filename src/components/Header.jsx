import React from "react";
import logoHeader from "../assets/logoheader.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-green-600">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoHeader}
              alt="ALOHA Language School"
              className="h-12 object-contain"
            />
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-bold text-green-700">ALOHA</span>
              <span className="text-xs text-gray-600">LANGUAGE SCHOOL</span>
            </div>
          </a>
        </div>

        {/* Center: Main Title (matching the attachment) */}
        <div className="flex-1 text-center px-4">
          <div className="hidden sm:block text-sm md:text-base">
            <div className="font-bold text-green-700">
              Tăng ngay bộ Giáo trình HSK
            </div>
            <div className="text-xs text-gray-700">
              Tăng thêm ứng dụng học tiếng Trung Hanzii
            </div>
          </div>
        </div>

        {/* Right: Icons and CTA */}
        <div className="flex items-center gap-3">
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-full text-sm transition duration-300 shadow-lg transform hover:scale-105">
            Đăng Ký Ngay
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
