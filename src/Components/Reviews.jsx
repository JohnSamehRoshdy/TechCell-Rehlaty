import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const reviews = [
  {
    id: 1,
    name: "محمد الأحمد",
    review:
      "كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة لي من فترة طويلة. أنصح بالتعامل مع شركة رحلتي بدون تردد.",
    stars: 5,
    img: "./photos/rev1.jfif", // Replace with an actual image URL
  },
  {
    id: 2,
    name: "ماهر عبد اللطيف",
    review:
      "تقدم شركة رحلتي خدمات مناسبة جدًا لرجال الأعمال. هذا ما ساعدني في رحلتي وجعلني أختصر جدًا من مشاكل الحجوزات.",
    stars: 5,
    img: "./photos/rev2.jfif",
  },
  {
    id: 3,
    name: "أسامة الأبيض",
    review:
      "يمكنني القول أنني قمت بقضاء أفضل رحلة عائلة على الإطلاق. كان الفنادق رائعة وخطة السفر ممتازة جدًا ومريحة.",
    stars: 5,
    img: "./photos/rev3.jfif",
  },
  {
    id: 4,
    name: "محمد صلاح",
    review:
      "كانت تجربة مميزة مع خدمات رائعة قضيت أفضل إجازة لي من فترة طويلة. أنصح بالتعامل مع شركة رحلتي بدون تردد.",
    stars: 5,
    img: "./photos/rev1.jfif", // Replace with an actual image URL
  },
  {
    id: 5,
    name: "عمر مرموش",
    review:
      "تقدم شركة رحلتي خدمات مناسبة جدًا لرجال الأعمال. هذا ما ساعدني في رحلتي وجعلني أختصر جدًا من مشاكل الحجوزات.",
    stars: 5,
    img: "./photos/rev2.jfif",
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < reviews.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div id="reviews" className="p-6">
      <h2 className="text-xl font-semibold text-center text-gray-500 mb-2">
        قالوا عننا
      </h2>
      <h1 className="text-4xl font-bold text-center mb-6">
        آراء مجموعة من عملائنا
      </h1>
      <div className="hidden md:flex justify-center gap-4 ">
        {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
          <div
            key={review.id}
            className="bg-purple-50 p-4 rounded-lg w-1/3 text-right "
          >
            <div className="text-yellow-500 text-xl mb-2  ">
              {"★".repeat(review.stars)}
            </div>
            <div className="flex items-center  md:justify-end gap-2 mb-4">
              <div>
                <h3 className="font-bold text-xl">{review.name}</h3>
              </div>
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="hidden md:flex justify-center mt-4 gap-4">
        <button
          onClick={prevSlide}
          className=" bg-purple-500 text-white border border-white rounded-full shadow-xl hover:shadow-lg disabled:opacity-50 flex items-center justify-center w-10 h-10"
          disabled={currentIndex === 0}
        >
          <MdKeyboardArrowLeft className="text-4xl" />
        </button>
        <button
          onClick={nextSlide}
          className=" bg-purple-500 text-white border border-white rounded-full shadow-xl hover:shadow-lg disabled:opacity-50 flex items-center justify-center w-10 h-10"
          disabled={currentIndex + 3 >= reviews.length}
        >
          <MdKeyboardArrowRight className="text-4xl" />
        </button>
      </div>

      {/* Responsive layout */}
      <div className="md:hidden space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-purple-100 p-4 rounded-lg shadow-md text-right"
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <div className="text-yellow-500">
                  {"★".repeat(review.stars)}
                </div>
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
