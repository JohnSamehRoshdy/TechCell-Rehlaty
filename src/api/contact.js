import api from "../api/api";

// API call function
export const sendContactForm = async (name, email, msg) => {
  try {
    const response = await api.post("/contact", {
      name,
      email,
      msg,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};
