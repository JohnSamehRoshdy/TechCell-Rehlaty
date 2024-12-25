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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 < cards.length ? prevIndex + 4 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : cards.length - 4
    );
  };

  return (
    <div className="py-8 px-6">
      {/* Header with pagination arrows (only on larger screens) */}
      <div className="hidden sm:flex items-center justify-between mb-6">
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
          <h3 className="text-xl font-bold text-right mb-2 text-gray-500">
            قم بزيارة العالم
          </h3>
          <h2 className="text-4xl font-bold text-right">الرحلات التي نقدمها</h2>
        </div>
      </div>

      {/* Cards Container */}
      <div className="block sm:flex gap-4  justify-center  ">
        {cards
          .slice(
            currentIndex,
            currentIndex +
              (window.matchMedia("(min-width: 640px)").matches ? 4 : 1)
          )
          .map(({ id, title, description, imgSrc }) => (
            <div
              key={id}
              className="relative flex-shrink-0 w-full sm:w-1/4 bg-white  rounded-lg overflow-hidden h-[500px] mb-4"
            >
              <div
                className="h-full bg-cover bg-center "
                style={{
                  backgroundImage: `url(${imgSrc})`,
                }}
              ></div>

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
