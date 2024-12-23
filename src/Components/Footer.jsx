import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-right">
        {/* Site Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">الموقع</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                شروط الاستخدام
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                بلغ عن مشكلة
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        <div>
          {/* Bookings */}
          <h4 className="text-lg font-bold text-white mb-4">الحجوزات</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                العروض الجديدة
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                تأكد من حجزك
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                الاشتراكات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                طرق السفر
              </a>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">خدماتنا</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                بطاقات الطيران
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                الرحلات البحرية
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                الفنادق
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                الرحلات البرية
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                تأمين الفيزا
              </a>
            </li>
          </ul>
        </div>
        {/* About Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">حول</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">
                الشركة
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                فرص العمل
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                المدونة{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">رحلاتي</h4>
          <p className="text-sm leading-6">
            شركة متخصصة في مجال السياحة والسفر تقدم خدمات تأمين الرحلات
            والحجوزات والفيزا لكل أنحاء العالم.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-center text-sm text-gray-500 mt-6">
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-yellow-500">
            <FaSquareFacebook />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaInstagramSquare />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaYoutube />
          </a>
        </div>
        <p>
          © 2023 جميع الحقوق محفوظة لموقع{" "}
          <span className="text-yellow-500">أحمد سكماني</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
