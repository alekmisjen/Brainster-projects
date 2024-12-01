import "./components/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Partnership } from "./pages/Partnership";

import { Jobs } from "./pages/Jobs";
import { Newsletter } from "./pages/Newsletter";
import { SIEMService } from "./pages/SIEMService";

import IResponse from "./pages/IResponse";
import data from "./db.json";
import { PTesting } from "./pages/PTesting";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />}>
            <Route
              path="service1"
              element={<SIEMService data={data.siemServicePage} />}
            />
            <Route
              path="service2"
              element={<PTesting data={data.PTestingServicePage} />}
            />
            <Route path="service3" element={<IResponse />} />
          </Route>

          <Route
            path="/industries"
            element={<Industries data={data.industries} />}
          />
          <Route path="/partnership" element={<Partnership />} />
          <Route
            path="/contact"
            element={<Contact data={data.contactPage} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
