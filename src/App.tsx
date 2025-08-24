import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import Specialities from "./components/Specialities/Specialities";
import Team from "./components/Team/Team";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <Specialities />
      <About />
      <Team />
      <Contact />
    </>
  );
}
