const ContactUs = () => {
  return (
    <div className="py-12 px-4 md:px-24">
      {" "}
      {/* Removed grey background */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex flex-row-reverse">
        {" "}
        {/* Added flex-row-reverse */}
        <div className="md:w-2/3 p-8 bg-gray-50">
          {" "}
          {/* Added background color */}
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-right">
            هل لديك سؤال ؟
          </h2>
          <form className="space-y-4 text-right">
            {" "}
            {/* Added text-right to the form */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                الاسم
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                placeholder="يرجى تسجيل اسمك الكامل"
              />{" "}
              {/* Added text-right to input */}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                placeholder="سجل بريدك الشخصي"
              />{" "}
              {/* Added text-right to input */}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                الموضوع
              </label>
              <textarea
                id="subject"
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                placeholder="ما هو السؤال أو المشكلة التي لديك؟"
              ></textarea>{" "}
              {/* Added text-right to textarea */}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                أرسل الرسالة
              </button>{" "}
              {/* Reduced button width */}
            </div>
          </form>
        </div>
        {/* Left Section (Points) */}
        <div className="md:w-1/3 p-8 md:border-l border-gray-200 text-right">
          {" "}
          {/* Added text-right and border-l */}
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-right">
            يسعدنا التواصل معك
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-end">
              {" "}
              {/* Changed items-start to items-end */}
              <img
                src="https://via.placeholder.com/50/0000FF/FFFFFF"
                alt="Help"
                className="w-12 h-12 mb-2 rounded-full"
              />
              <div>
                <h3 className="font-medium">نقدم لك المساعدة</h3>
                <p className="text-sm text-gray-600 text-center md:text-right">
                  إن كان لديك أي مشكلة في البلد الذي تسافر إليه سنقوم بمساعدك في
                  هذا الموضوع.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              {" "}
              {/* Changed items-start to items-end */}
              <img
                src="https://via.placeholder.com/50/008000/FFFFFF"
                alt="Contact"
                className="w-12 h-12 mb-2 rounded-full"
              />
              <div>
                <h3 className="font-medium">للتواصل</h3>
                <p className="text-sm text-gray-600 text-center md:text-right">
                  يمكنك التواصل معنا عبر الفورم أو عبر البريد الإلكتروني:
                  company@mail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              {" "}
              {/* Changed items-start to items-end */}
              <img
                src="https://via.placeholder.com/50/A0522D/FFFFFF"
                alt="Working Hours"
                className="w-12 h-12 mb-2 rounded-full"
              />
              <div>
                <h3 className="font-medium">أوقات الدوام</h3>
                <p className="text-sm text-gray-600 text-center md:text-right">
                  يمكنك التواصل معنا يومياً أثناء أوقات الدوام من الساعة 9
                  صباحاً حتى 6 مساءاً.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
