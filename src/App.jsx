import "./App.css";
import MyNavBar from "./Components/MyNavbar.jsx";
import Titolo from "./Components/Titolo.jsx";
import StarWarsFetch from "./Components/StarWarsFetch.jsx";
import Sw from "./Components/Sw.jsx";
import Dexter from "./Components/Dexter.jsx";
import Dexterfetch from "./Components/DexterFetch.jsx";
import Got from "./Components/Got.jsx";
import GotFetch from "./Components/GotFetch.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <MyNavBar />
      <Titolo />
      <Sw />
      <StarWarsFetch />
      <Dexter />
      <Dexterfetch />
      <Got />
      <GotFetch />
      <Footer />
    </>
  );
}

export default App;
