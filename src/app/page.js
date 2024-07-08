import Image from "next/image";
import Heading from "./Heading/Heading";
import Section from "./Section/Section";
import About from "./About.jsx/About";
import Footer from "./Footer/Footer";
import 'animate.css';

export default function Home() {
  return (
    <main className="">
      <Heading />
      <Section />
      <About />
      <Footer />
    </main>
  );
}
