import Header from "./components/Header";
import Videos from "./components/Videos";
import Info from "./components/Info";
import Footer from "./components/Footer";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Savya from "./components/Savya";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Videos />
            <Info />
            <Savya />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
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
