import endangeredSpecies from "./endangeredSpecies.png";
import Species from "./components/Species.jsx"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={endangeredSpecies} alt="EdangeredSpeciesLogo" />
        <h1>Endagered Species Tracker</h1>
      </header>

      <main>
        <Species />
      </main>
      <div className="Footer">
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;