import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper/wrapper";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import "./index.css"

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        <Wrapper />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
