import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Achieve from "./components/Achivements/Achieve";

import Experience from "./Experience/Experience";

import "./App.css";
import Contact from "./components/contact/Contact"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Switch>
      <div id="top" className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achieve />
          <Contact />
          
        </main>

        <ScrollToTop />
<Footer/>
      </div>
    </Switch>
  );
};

export default App;
