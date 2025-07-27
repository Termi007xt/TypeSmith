import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="ReactApp" about="Nice" />
      <div className="container">
        <TextForm heading="Enter text to analyze below" />
      </div>
    </>
  );
}

export default App;
