import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import StateSection from "./Components/StateSection";
import ToolsSection from "./Components/ToolsSection";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return await res.json();
};

const dataPromise = fetchData();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <StateSection />
      <ToolsSection dataPromise={dataPromise} />
    </>
  );
}

export default App;
