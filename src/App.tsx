import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componts/header";
import Home from "./pages/home";
import Footer from "./componts/footer";
import CalculadoraSemRec from "./pages/calculadoraSemRec";
import CalculadoraComRec from "./pages/calculadoraComRec";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <main className="h-screen">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/nota/semrecuperacao" element={<CalculadoraSemRec />} />
          <Route path="/nota/comrecuperacao" element={<CalculadoraComRec />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;