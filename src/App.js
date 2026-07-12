import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BootPreloader } from "./components/BootPreloader";
import { CursorFX } from "./components/CursorFX";
import { ScrollProgress } from "./components/ScrollProgress";

function App() {
  return (
    <>
      <BootPreloader />
      <CursorFX />
      <ScrollProgress />
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;