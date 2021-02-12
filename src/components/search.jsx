import react from "react"

import React, { Fragment, useState } from 'react'


export const Search = (props) => {
    const [ville, setVille] = useState("")

    const handleChangeVille = (event) => {
        setVille(event.target.value)
    }


    return (
        <Fragment>
            <div className="mainSearch">
                <input name="ville" onChange={(event) => handleChangeVille(event)} defaultValue={""}></input>
                <button className="searchBar" onClick={() => { props.handleSubmit(ville); console.log(ville) }}>Search</button>
            </div>
        </Fragment >
    )
}
