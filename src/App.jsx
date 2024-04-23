import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div style={{ fontFamily: "Unica One", margin: 0, padding: 0 } }>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
