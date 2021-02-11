import React, { Fragment } from 'react'
import MeteoService from "../services/service"


export const VilleCard = (props) => {

    console.log(MeteoService.getMeteoByVille(props.ville))
    return (
        <Fragment>
            <h1>Météo de la ville de {props.ville}</h1>
            {/* <p>{MeteoService.getMeteoByVille(props.ville).weather.description}</p> */}


        </Fragment >
    )
}