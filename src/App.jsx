import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import AboutPage from "./Components/About";
import ServicesPage from "./Components/Services";
import ProjectsPage from "./Components/Projects";
import ContactPage from "./Components/Contact";

// Layout wrapper
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ALL routes now use Layout */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}