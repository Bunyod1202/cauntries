import CardGroup from "./components/card/CardGroup";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import { useState } from "react";
import "./main.css"
function App() {
  const [calc, setCalc] = useState("");
  
  

  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <CardGroup />
      </main>
    </div>
  );
}

export default App;
