import "./App.css";
import { About } from "./components/About";
import { Bestsell } from "./components/Bestsell";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Review } from "./components/Review";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bestsell />
      <About />
      <Categories />
      <Review />
      <Footer />
    </>
  );
}

export default App;
