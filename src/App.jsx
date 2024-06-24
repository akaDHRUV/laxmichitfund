import Hero from "./components/hero";
import Features from "./components/Features";
import Card from "./components/Card";
import Mini from "./components/Mini";
import Testimonials from "./components/Testimonials";
import "./App.css"
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import Business from "./components/Business";
function App() {
  return <div className="App">
    <Hero/>
    <Features></Features>
    <Card></Card>
    <Business/>
    <Mini/>
    <Testimonials/>
    <Faq/>
    <Newsletter/>
  </div>;
}

export default App;
