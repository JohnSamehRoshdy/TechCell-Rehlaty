import { useEffect, useState } from "react";

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://travel.digital-vision-solutions.com/api/services"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);

        setServices(data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="services" className="py-12 px-4 text-center">
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
              src={service.icon_link}
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
