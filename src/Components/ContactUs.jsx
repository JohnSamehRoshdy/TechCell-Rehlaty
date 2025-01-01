import { useState } from "react";
import { sendContactForm } from "../api/contact";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check email validity
    if (!validateEmail(email)) {
      setEmailError("يرجى إدخال بريد إلكتروني صالح");
      return; // Exit the function if the email is invalid
    }

    setIsSubmitting(true);

    try {
      const response = await sendContactForm(name, email, msg);
      setMessage("تم إرسال الرسالة بنجاح!");
      console.log("Response:", response);
      setName("");
      setEmail("");
      setMsg("");

      // Clear the success message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقًا.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!validateEmail(inputEmail)) {
      setEmailError("يرجى إدخال بريد إلكتروني صالح");
    } else {
      setEmailError("");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row-reverse items-center md:justify-between p-6 md:p-12 gap-6"
    >
      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col items-end order-1 md:order-1">
        <h2 className="text-lg font-semibold text-right text-gray-500 mb-2">
          هل لديك سؤال ؟
        </h2>
        <h1 className="text-3xl font-bold text-right mb-8">
          يسعدنا التواصل معك
        </h1>
        <div className="bg-[rgba(255,231,172,1)] p-6 md:p-8 w-full rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] border border-black">
          <form
            className="space-y-4 flex flex-col items-end"
            onSubmit={handleSubmit}
          >
            <div className="text-green-500 text-right">{message}</div>

            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-2xl font-medium text-right mb-2"
              >
                الاسم
              </label>
              <input
                type="text"
                id="name"
                placeholder="يرجى تسجيل اسمك الكامل"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-right"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-2xl font-medium text-right mb-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                placeholder="سجل بريدك الشخصي"
                className={`w-full p-3 rounded-md border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-yellow-400 text-right`}
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && (
                <div className="text-red-500 text-right mt-2">{emailError}</div>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block text-2xl font-medium text-right mb-2"
              >
                الموضوع
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="ما هو السؤال أو المشكلة التي لديك؟"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-right"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-1/2 p-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "جاري الإرسال..." : "أرسل الرسالة"}
            </button>
          </form>
        </div>
      </div>

      {/* Left Section (unchanged) */}
      <div className="w-full md:w-1/2 space-y-8 order-2 md:order-2">
        {/* Item 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-end">
          <div className="me-4">
            <h3 className="font-bold text-lg text-center md:text-right">
              نقدر لك المساعدة
            </h3>
            <p className="text-gray-700 text-center md:text-right">
              إن كان لديك أي مشكلة في البلد الذي تسافر إليه سنقوم بمساعدتك في
              هذا الموضوع.
            </p>
          </div>
          <img
            src="./photos/contact1.png"
            alt="Help Icon"
            className="w-32 h-32 mb-4 md:mb-0"
          />
        </div>

        {/* Item 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-end">
          <div className="me-4">
            <h3 className="font-bold text-lg text-center md:text-right">
              للتواصل
            </h3>
            <p className="text-gray-700 text-center md:text-right">
              يمكنك التواصل معنا عبر الدوام أو عبر البريد الإلكتروني:
              <br />
              <a
                href="mailto:company@mail.com"
                className="text-blue-600 underline text-right"
              >
                company@mail.com
              </a>
            </p>
          </div>
          <img
            src="./photos/contact2.png"
            alt="Contact Icon"
            className="w-32 h-32 mb-4 md:mb-0"
          />
        </div>

        {/* Item 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-end">
          <div className="me-4">
            <h3 className="font-bold text-lg text-center md:text-right">
              أوقات الدوام
            </h3>
            <p className="text-gray-700 text-center md:text-right">
              يمكنك التواصل معنا يومياً أثناء أوقات الدوام
              <br />
              من الساعة 9 صباحاً حتى 6 مساءً.
            </p>
          </div>
          <img
            src="./photos/contact3.png"
            alt="Work Hours Icon"
            className="w-32 h-32 mb-4 md:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
