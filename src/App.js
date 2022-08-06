import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const navLInks =["Products", "Services", "Overview", "Contact Us"];

  return (
    <div className="">
      <Navbar links={navLInks}/>
      
    </div>
  );
}

export default App;
