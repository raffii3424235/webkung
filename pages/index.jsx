import About from "../components/About";
import { Heads } from "../components/Heads";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Heads />
      <Navbar />
      <Main />
      <About />
      <Skills/>
    </div>
  );
}
