import ContactUs from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServices";
import Plans from "./Components/Plans";
import Reviews from "./Components/Reviews";
import Trips from "./Components/Trips";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <div style={{ width: "85%", margin: "auto", padding: "auto" }}>
        <Trips />
        <OurServices />
        <Plans />
        <Reviews />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
