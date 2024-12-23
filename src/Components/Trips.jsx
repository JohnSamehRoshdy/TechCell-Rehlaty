import { useState } from "react";

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "الرياض",
      description: "2 أيام بتكلفة 1000 ريال",
      imgSrc: "./photos/ryiad.png",
    },
    {
      id: 2,
      title: "القاهرة",
      description: "3 أيام بتكلفة 1250 ريال",
      imgSrc: "./photos/cairo.png",
    },
    {
      id: 3,
      title: "دبي",
      description: "3 أيام بتكلفة 2500 ريال",
      imgSrc: "./photos/dubai.png",
    },
    {
      id: 4,
      title: "دمشق",
      description: "5 أيام بتكلفة 1500 ريال",
      imgSrc: "./photos/ryiad.png",
    },
    {
      id: 5,
      title: "ابوظبى",
      description: "2 أيام بتكلفة 1000 ريال",
      imgSrc: "./photos/dubai.png",
    },
    {
      id: 6,
      title: "الاقصر",
      description: "3 أيام بتكلفة 1250 ريال",
      imgSrc: "./photos/cairo.png",
    },
    {
      id: 7,
      title: "الاسكندرية",
      description: "3 أيام بتكلفة 2500 ريال",
      imgSrc: "./photos/istanbul.png",
    },
    {
      id: 8,
      title: "أسوان",
      description: "5 أيام بتكلفة 1500 ريال",
      imgSrc: "./photos/ryiad.png",
    },
    // Add more cards if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const step = window.innerWidth < 640 ? 1 : 4; // 4 cards for large screens, 1 for small screens
    setCurrentIndex((prevIndex) =>
      prevIndex + step < cards.length ? prevIndex + step : 0
    );
  };

  const prevSlide = () => {
    const step = window.innerWidth < 640 ? 1 : 4; // 4 cards for large screens, 1 for small screens
    setCurrentIndex((prevIndex) =>
      prevIndex - step >= 0 ? prevIndex - step : cards.length - step
    );
  };

  return (
    <div className="py-8 px-6">
      {/* Header with pagination arrows */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#8250;
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-right mb-2">
            قم بزيارة العالم
          </h3>
          <h2 className="text-4xl font-bold text-right">الرحلات التي نقدمها</h2>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex gap-4 overflow-hidden justify-center">
        {cards
          .slice(currentIndex, currentIndex + (window.innerWidth < 640 ? 1 : 4)) // Responsive: 1 card for mobile, 4 for larger screens
          .map(({ id, title, description, imgSrc }) => (
            <div
              key={id}
              className="relative flex-shrink-0 sm:w-1/5 bg-white shadow-lg rounded-lg overflow-hidden h-96" // Increased height and reduced width
            >
              {/* Image as background */}
              <div
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${imgSrc})`,
                }}
              ></div>

              {/* Overlay for text */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/90 p-4 rounded-2xl shadow-md">
                <h3 className="text-lg font-bold mb-2 text-right">{title}</h3>
                <p className="text-sm text-gray-600 text-right">
                  {description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardCarousel;
