import { Header } from "./components/Header.style.jsx";
import { About } from "./components/home/About.style.jsx";
import { Features } from "./components/home/Features.style.jsx";
import { Hero } from "./components/home/Hero.style.jsx";
import { Options } from "./components/home/Options.style.jsx";
import { Reviews } from "./components/home/Reviews.style.jsx";
import { Works } from "./components/home/Works.style.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Options />
      <Works />
      <Reviews />
    </div>
  );
}

export default App;
