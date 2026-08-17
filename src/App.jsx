import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectHighlights from "./components/ProjectHighlights";
import NewBesantNagar from "./components/NewBesantNagar";
import Location from "../../../akkurate/manju-group/src/components/Location";
import PlotOptions from "./components/PlotOptions";
import EmiCalculator from "./components/EmiCalculator";
import Amenities from "./components/Amenties";
import Gallery from "./components/Gallery";
import ManjuGroup from "./components/ManjuGroups";
import FAQ from "./components/FAQ";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import Masterplan from "./components/MasterPlan";

function App() {
  return (
    <div className="min-h-screen bg-[#071A2B]">
      <Navbar />

      <Hero />

      <ProjectHighlights />

      <NewBesantNagar />

      <Location />

      <PlotOptions />

      <EmiCalculator />

      <Amenities />

      <Masterplan />

      <Gallery />

      <ManjuGroup />

      <FAQ />

      <EnquiryForm />

      <Footer />

    </div>
  );
}

export default App;