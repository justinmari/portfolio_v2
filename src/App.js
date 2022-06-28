import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routeConstants";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path={routes.HOME} element={<Home />}/>
            <Route path={routes.PROJECTS} element={<Projects />}/>
            <Route path={routes.RESUME} element={<Resume />}/>
            <Route path={routes.BIO} element={<Bio />}/>
            <Route path={routes.CONTACT} element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
