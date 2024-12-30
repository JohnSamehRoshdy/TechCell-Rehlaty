import { useState, useEffect } from "react";

const CardCarousel = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://travel.digital-vision-solutions.com/api/trips"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const trips = data.data;
        // console.log(trips);
        const formattedData = trips.map((item) => ({
          id: item.id,
          title: item.city,
          description: `${item.day_num} أيام بتكلفة ${item.cost} ريال`,
          imgSrc: item.image_link,
        }));
        setCards(formattedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

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

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Cards Container */}
      <div className="block sm:flex gap-4 justify-center">
        {cards
          .slice(
            currentIndex,
            currentIndex +
              (window.matchMedia("(min-width: 640px)").matches ? 4 : 1)
          )
          .map(({ id, title, description, imgSrc }) => (
            <div
              key={id}
              className="relative flex-shrink-0 w-full sm:w-1/4 bg-white rounded-lg overflow-hidden h-[500px] mb-4"
            >
              <div
                className="h-full bg-cover bg-center"
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
