import React from "react";
// Import các icon từ Lucide như bạn yêu cầu
import {
  Facebook,
  Youtube,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png"; // Giả sử bạn có logo ở đây

const Footer = () => {
  // Lấy màu nền xanh đậm từ ảnh của bạn
  const footerBgColor = "#002B1A";

  return (
    <footer
      style={{ backgroundColor: footerBgColor }}
      className="text-gray-300 py-12 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Bố cục lưới 4 cột - phức tạp và đầy đủ hơn */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Cột 1: Logo và Mạng xã hội */}
          <div>
            {/* Đây là thẻ <img> để bạn tự thêm link logo */}
            <img
              src={logo}
              alt="ALOHA Language School Logo"
              className="w-36 mb-4 p-2 rounded-md object-cover transform scale-125"
            />
            <p className="text-sm mb-4 pr-4">
              Trung tâm tiếng Trung cam kết thành thạo giao tiếp chỉ sau 6
              tháng.
            </p>
            {/* Icons Mạng xã hội */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh (Về chúng tôi) */}
          <div>
            <h5 className="font-bold text-white text-lg mb-4">Về Chúng Tôi</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Đội ngũ giáo viên
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Phương pháp giảng dạy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh (Hỗ trợ) */}
          <div>
            <h5 className="font-bold text-white text-lg mb-4">Thông Tin</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Các khóa học
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Thông tin liên hệ (Lấy từ ảnh) */}
          <div>
            <h5 className="font-bold text-white text-lg mb-4">Liên Hệ</h5>
            <p className="font-semibold text-white mb-3">
              ALOHA Language School
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>HOTLINE: 02486857468</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>EMAIL: Support.AlohaSchool.edu.vn</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>
                  Tầng 05 Tòa nhà Phương Nga, Lô B15D13 Khu Đô thị mới Cầu Giấy,
                  Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hàng Copyright ở dưới cùng */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ALOHA Language School. Mọi quyền
            được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
