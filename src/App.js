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
      <h1 className="mainTitle">On veut passer du bon temps ? Mais où ça ?!</h1>
      <Search handleSubmit={handleSubmitVille} />
      {villeachercher && <VilleCard ville={villeachercher} />}
    </Fragment>
  )
}

export default App;
