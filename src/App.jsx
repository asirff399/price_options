import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import Priceoptions from "./Components/Priceoptions/Priceoptions";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
     {/* <DaisyNav></DaisyNav> */}
     <NavBar></NavBar>
     <Priceoptions></Priceoptions>
     <LineChart></LineChart>
     <Phones></Phones>
    </>
  );
}

export default App;
