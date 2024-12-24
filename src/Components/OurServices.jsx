const OurServices = () => {
  const services = [
    {
      title: "رحلات ميدانية",
      description:
        "لن تكون إنجازاتك مملة معنا فهناك الكثير من الخطط والرحلات المختلفة.",
      imgSrc: "./photos/telfric.png", // Replace with your image path
    },
    {
      title: "حجوزات فندقية",
      description:
        "لا تقلق حول مكان إقامتك، فنحن نهتم بكامل الحجوزات الخاصة بك.",
      imgSrc: "./photos/luggage.png", // Replace with your image path
    },
    {
      title: "دليل سياحي",
      description: "نقدم لك خدمات الإرشاد السياحي لبناء خطط سفر مميزة.",
      imgSrc: "./photos/compass.png", // Replace with your image path
    },
  ];

  return (
    <div className="py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-500 mb-2">
        تمتع في رحلتك
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        مجموعة من خدماتنا
      </h1>

      {/* Services Container */}
      <div className="flex  flex-col-reverse md:flex-row md:justify-center gap-10 md:gap-52 bg-blue-50 rounded-lg p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 "
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-40 h-40"
            />
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 w-60">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
