import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Plans = () => {
  const cards = [
    {
      title: "خطة الاقتصادية",
      price: 260,
      description:
        "تقدم لك إمكانية زيارة بلدان العالم بأقل التكاليف الممكنة وبأفضل الخدمات",
      features: [
        "بطاقات سفر في الدرجة الاقتصادية",
        "حجز بفندق ثلاث نجوم",
        "وجبات إفطار يومية",
      ],
    },
    {
      title: "خطة عائلية",
      price: 520,
      description:
        "هذه الخطوة مناسبة جداً إن كنت ترغب في قضاء إجازتك مع العائلة",
      features: [
        "بطاقات سفر في الدرجة الأولى",
        "حجز بفندق أربع نجوم",
        "رحلات ميدانية بشكل يومي",
      ],
    },
    {
      title: "خطة رجال الأعمال",
      price: 850,
      description: "كونك شخص ذو ذوق خاص ستكون هذه الخطة هي ما يناسبك تماماً",
      features: [
        "بطاقات سفر بدرجة رجال الأعمال",
        "حجز بفندق خمس نجوم",
        "متابعة خاصة لإحتياجاتك",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-lg font-semibold text-right text-gray-500 mb-2">
        لا تقلق حول التكلفة
      </h2>
      <h1 className="text-3xl font-bold text-right mb-8">خطط تناسب ميزانيتك</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-[rgba(255,231,172,1)] rounded-lg p-6 transition duration-300 ease-in-out hover:bg-[rgba(70,54,139,1)] hover:shadow-lg hover:scale-105 w-11/12 md:w-auto mx-auto border border-black shadow-lg shadow-black"
            style={{ direction: "rtl" }}
          >
            <p className="mb-4 text-gray-800 group-hover:text-white transition duration-300">
              <span className="text-2xl font-bold group-hover:text-white">
                ${card.price}
              </span>{" "}
              <span>/للشخص</span>
            </p>
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white transition duration-300">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4 group-hover:text-white transition duration-300">
              {card.description}
            </p>
            <hr className="border-gray-300 mb-4 group-hover:border-white transition duration-300" />
            <ul className="list-none pl-0 text-gray-600 group-hover:text-white transition duration-300">
              {card.features.map((feature, i) => (
                <li
                  key={i}
                  className="mb-2 flex items-center group-hover:text-white transition duration-300"
                >
                  <FaCheck className="mr-2 text-green-500 group-hover:text-white" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-none text-black  font-bold py-2 px-28 rounded-2xl transition duration-300 hover:text-indigo-500 border border-black hover:border-white group-hover:text-white group-hover:border-white flex items-center justify-center mx-auto space-x-reverse space-x-3">
              <span>احجز الآن</span>
              <span className="bg-white text-black rounded-full p-1 text-xl flex items-center justify-center">
                <MdKeyboardArrowLeft />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
