import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./main.css"
import { CardId } from "./pages/CardId";
import { Errors } from "./pages/Error";
import { Home } from "./pages/Home";

function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardId/>} />
        <Route path="/*" element={<Errors/>} />

      </Routes>
    </div>
  );
}

export default App;
