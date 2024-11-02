import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Banner from "./pages/Banner";
import Contact from "./pages/Contact";
import EducationAndCourses from "./pages/EducationAndCourses";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="site-bg-color bg-no-repeat bg-cover overflow-hidden">
      <div className="text-white my-container">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <EducationAndCourses></EducationAndCourses>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
