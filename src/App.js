import { useEffect, useState } from "react";
import CardGroup from "./components/card/CardGroup";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import "./main.css"
function App() {
  const [flags, setFlags] = useState({
    isError: false,
    isLoading: true,
    data:[]
  })
  const [search, setSearch] = useState("all")
  const [select, setSelect] = useState("all")


  const searchs = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value)
    }
  }
  const selects = (e) => {
    setSelect(e)
  }
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${ search === "" ? "all" : `name/${search}`}`)
      .then(response => response.json())
      .then(json => {
        setFlags({
          isError: false,
          isLoading: false,
          data: json
        })
        
      })
      .catch(error => {
        setFlags({
          isError: true,
          isLoading: false,
          data: []
       })
      })
  }, [search])
  
  useEffect(() => {
      fetch(`https://restcountries.com/v3.1/${select === "all" ? "all" : `region/${select}`}`)
      .then(response => response.json())
      .then(json => {
        setFlags({
          isError: false,
          isLoading: false,
          data: json
        })
       
      })
      .catch(error => {
        setFlags({
          isError: true,
          isLoading: false,
          data: []
      })
      })
  }, [select])

  return (
    <div className="App">
      <Header />
      <main>
        <Form selects={selects} searchs={searchs} />
        {flags.isLoading  && <p>Loading...</p>}
        {flags.isError && <p>Something went wrong</p>}
        {flags.data.length > 0 && <CardGroup flags={flags.data} />}
      </main>
    </div>
  );
}

export default App;
