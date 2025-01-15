import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail/ProjectDetail";
import About from "./components/About/About";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import NotFound from "./components/shared/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./index.css";

const App = () => (
  <Router>
    <ScrollToTop />
    <div className="app-container">
      <Header /> {/* Header común */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:urlTitle" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer /> {/* Footer común */}
    </div>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
