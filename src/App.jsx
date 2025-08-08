import "./App.css";
import MyNavBar from "./Components/MyNavbar.jsx";
import Titolo from "./Components/Titolo.jsx";
import StarWarsFetch from "./Components/StarWarsFetch.jsx";
import Sw from "./Components/Sw.jsx";
function App() {
  return (
    <>
      <MyNavBar />
      <Titolo />
      <Sw />
      <StarWarsFetch />
    </>
  );
}

export default App;
