import React, { Component, Fragment, useState } from "react"
import { VilleCard } from "./components/VilleCard"
import { Search } from "./components/search"
import './App.css';


const App = (props) => {
  const [villeachercher, setVilleachercher] = useState("")

  const handleSubmitVille = (ville) => {
    setVilleachercher(ville)
  }

  return (
    <Fragment>
      <h1>On veut passer du bon temps ? Mais où ça ?!</h1>
      <Search handleSubmit={handleSubmitVille} />
      <VilleCard ville={villeachercher} />
    </Fragment>
  )
}

export default App;
