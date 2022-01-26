import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
