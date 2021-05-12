import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from './Component/Footer';
import { Navbar } from './Component/Navbar';
import { TopSection } from './Component/TopSection';
import { Certificate } from './Component/Certificate';
import { Skills } from './Component/Skills';
import { Projects } from './Component/Projects';
import { Services } from './Component/Services';
import { Contact } from './Component/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <TopSection />
          </Route>
          <Route exact path="/certificate">
            <Certificate />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
