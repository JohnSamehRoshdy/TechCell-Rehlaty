import { useState, useEffect } from "react";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { BsMouseFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled at all
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="hero-section"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('./photos/Hero.jpg')" }}
    >
      {/* Navbar */}
      <nav
        className={`navbar fixed z-10 top-0 w-full flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
          isScrolled
            ? "bg-white shadow-md" // Background color after scrolling
            : "bg-gradient-to-b from-black/50 to-transparent" // Default background
        }`}
      >
        {/* Logo */}
        <div
          className={`text-xl font-bold md:flex hidden items-center ${
            isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
          }`}
        >
          <div className="me-2">
            <HiMiniPlayCircle />
          </div>
          <div>يوتيوب</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#contact"
              className={`hover:text-yellow-500 ${
                isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
              }`}
            >
              اتصل بنا
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className={`hover:text-yellow-500 ${
                isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
              }`}
            >
              آراء العملاء
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={`hover:text-yellow-500 ${
                isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
              }`}
            >
              الأسعار
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`hover:text-yellow-500 ${
                isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
              }`}
            >
              الخدمات
            </a>
          </li>
          <li>
            <a
              href="#trips"
              className={`hover:text-yellow-500 ${
                isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
              }`}
            >
              الرحلات
            </a>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black text-2xl bg-white p-1 rounded-lg"
        >
          ☰
        </button>
        <a
          href="hero-section"
          className={`text-xl font-bold flex p-1 ${
            isScrolled ? "text-yellow-500 drop-shadow-md" : "text-white"
          }`}
        >
          <div>.رحلاتى</div>
        </a>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed z-20 top-14 left-6 bg-black/70 text-white py-4 px-6 rounded-lg space-y-4 md:hidden">
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
        <p className="mt-4 text-lg md:text-xl p-2">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان وخدمات مخصصة لك
          ولعائلتك
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-full shadow-md hover:bg-yellow-600 flex">
          <div className="bg-white text-black rounded-full p-1 text-lg flex items-center justify-center me-3">
            <MdKeyboardArrowLeft />
          </div>
          <div>احجز الآن</div>
        </button>

        {/* Add the white arrow image */}
        <div className="mt-12 flex flex-col items-center">
          <img
            src="./photos/arrow1.png" // Replace this with the actual path to your image
            alt="White arrow"
            className="w-32 h-32 absolute md:left-[38%] md:top-[48%] rotate-12 left-[10%] top-[55%] " // Adjust size as needed
          />
          <p className="text-lg mt-4">تابع للأسفل</p>
          <div className="mt-2 rounded-full flex items-center justify-center">
            <a
              href="#trips"
              className="mt-4 w-12 h-12 flex justify-center items-center rounded-full animate-bounce"
            >
              <BsMouseFill size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
