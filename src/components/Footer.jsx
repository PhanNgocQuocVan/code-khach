import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#053927] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column: Logo & Social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="ALOHA Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-bold text-lg">ALOHA Language School</div>
                <div className="text-xs text-green-200">
                  Trung Tâm Tiếng Trung
                </div>
              </div>
            </div>

            <div className="text-sm text-green-100 mt-2">
              <div className="font-semibold mb-1">Liên hệ với chúng tôi</div>
              <div className="font-bold text-green-300">
                HOTLINE 02486857468
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="p-2 bg-green-500 hover:bg-green-400 rounded-full inline-flex items-center justify-center transition transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-green-500 hover:bg-green-400 rounded-full inline-flex items-center justify-center transition transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 15l5.2-3L10 9v6zm11-3c0-1.2-.1-2.3-.3-3.4-.2-1-.9-1.8-1.9-2C17.6 6 12 6 12 6s-5.6 0-6.8.6c-1 .2-1.6 1-1.9 2C3.1 9.7 3 10.8 3 12s.1 2.3.3 3.4c.2 1 1 1.8 1.9 2C6.4 18 12 18 12 18s5.6 0 6.8-.6c1-.2 1.6-1 1.9-2 .2-1.1.3-2.2.3-3.4z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-green-500 hover:bg-green-400 rounded-full inline-flex items-center justify-center transition transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zM18.5 6.1a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: EMAIL */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-green-100 mb-3">EMAIL:</h4>
            <p className="text-sm text-green-200 word-wrap">
              Support.AlohaSchool.edu.vn
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-green-100 mb-3">
                VĂN PHÒNG
              </h4>
              <address className="not-italic text-sm text-green-200 leading-relaxed">
                Tầng 05 Tòa nhà Phương Nga, <br />
                Lô B15D13 Khu Đô thị mới
                <br />
                Cầu Giấy, Phường Dịch Vọng,
                <br />
                Quận Cầu Giấy, Hà Nội
              </address>
            </div>
          </div>

          {/* Right Column: Company Info */}
          <div className="text-center md:text-right">
            <div className="mb-6">
              <h4 className="text-lg font-bold text-green-100 mb-2">
                ALOHA Language School
              </h4>
              <p className="text-sm text-green-200">
                Đăng ký ngay để nhận ưu đãi và lộ trình học cá nhân hóa từ các
                giáo viên chuyên nghiệp.
              </p>
            </div>
            <div className="text-xs text-green-300 pt-4 border-t border-green-700">
              &copy; {new Date().getFullYear()} ALOHA Language School. All
              rights reserved.
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-green-700 pt-4 text-center text-xs text-green-300">
          <p>Powered by ALOHA | Học tiếng Trung tự tin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
