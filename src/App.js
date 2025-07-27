import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="ReactApp" about="Nice" />
      <div className="container my-3">
        {/* <TextForm heading="Enter text to analyze below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
