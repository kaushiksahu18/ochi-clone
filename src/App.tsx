import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import AboutusApproach from "./components/AboutusApproach";
import Main_for_eye from "./components/Main_for_eye";
import FeaturedProjects from "./components/FeaturedProjects";
import ForProject from "./components/ForProject";
import ContectUs from "./components/ContectUs";
import "./app.css";

function App() {
  return (
      <div className="w-[100dvw] h-[100dvh] bg-[#f7f7f7bf] relative overflow-x-hidden overflow-y-auto">
        <Navbar />
        <Hero />
        <Slider />
        <AboutusApproach />
        <Main_for_eye />
        <FeaturedProjects />
        <ForProject />
        <ContectUs />
      </div>
  );
}

export default App;
