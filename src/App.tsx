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
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center flex-col gap-10 m-10">
                <h1 className="text-8xl">Erro 404</h1>
                <p className="text-xl">Não sei oq c ta tentando fazer, mas pare, vá para alguma das opções acima👆</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;