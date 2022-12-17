import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./main.css"
import { CardId } from "./pages/CardId";
import {Home} from "./pages/Home";
function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardId/>} />

      </Routes>
    </div>
  );
}

export default App;
