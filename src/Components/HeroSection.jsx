import { useState } from "react";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { IoIosArrowDropleft } from "react-icons/io";
import { LuMouse } from "react-icons/lu";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('./photos/Hero.jpg')" }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/50 to-transparent">
        {/* Logo */}
        <div className="text-white text-xl font-bold flex">
          <HiMiniPlayCircle />
          <div>يوتيوب</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="#services" className="hover:text-yellow-500">
              الخدمات
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-yellow-500">
              الأسعار
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-yellow-500">
              آراء العملاء
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">
              اتصل بنا
            </a>
          </li>
        </ul>
        <div className="text-white text-xl font-bold flex">
          <div>.رحلاتى</div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 right-6 bg-black/70 text-white py-4 px-6 rounded-lg space-y-4 md:hidden">
          <a href="#services" className="block hover:text-yellow-500">
            الخدمات
          </a>
          <a href="#pricing" className="block hover:text-yellow-500">
            الأسعار
          </a>
          <a href="#reviews" className="block hover:text-yellow-500">
            آراء العملاء
          </a>
          <a href="#contact" className="block hover:text-yellow-500">
            اتصل بنا
          </a>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          سافر معنا إلى العالم
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان وخدمات مخصصة لك
          ولعائلتك
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-full shadow-md hover:bg-yellow-600 flex">
          <IoIosArrowDropleft />
          <div>احجز الآن</div>
        </button>
        <div className="mt-12 flex flex-col items-center">
          <p className="text-lg">تابع للأسفل</p>
          <div className="mt-2 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce">
              <LuMouse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
