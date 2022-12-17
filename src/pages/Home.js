import React, { useEffect, useState } from 'react';
import {CardGroup} from '../components/card/CardGroup';
import { Form } from '../components/form/Form';


export  const Home = () => {
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

        if (json.status === 404) {
          setFlags({
            isError: true,
            isLoading: false,
            data: []
         })
        }
      })
      .catch(error => { })
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
        if (json.status === 404) {
          setFlags({
            isError: true,
            isLoading: false,
            data: []
          })
        }
      })
      .catch(error => {
        
      })
  }, [select])
  return (
    <div>
         <Form selects={selects} searchs={searchs} />
        {flags.isLoading  && <p className="le">Loading...</p>}
        {flags.isError && <p className="le">Something went wrong</p>}
        {flags.data.length > 0 && <CardGroup flags={flags.data} />}
    </div>
  );
};
