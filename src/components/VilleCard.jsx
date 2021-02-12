import React, { Fragment, useState, useEffect } from 'react'
import MeteoService from "../services/service"


export const VilleCard = (props) => {
    const [resultat, setResultat] = useState()
    const ville = props.ville

    useEffect(() => {
        MeteoService.getMeteoByVille(ville).then(res => setResultat(res))
    }, [ville])


    return (
        <Fragment>
            <h1 className="cardBodyTitle">Météo de la ville de {props.ville}</h1>
            {resultat ?
                <div className="cardBody">
                    {console.log(resultat)}

                    <div className="mainWeather">
                        <span className="mainDescribe">{resultat.weather[0].description}</span>
                        <span className='mainTemp'>Température: {resultat.main.temp} °C</span>
                    </div>
                    <div className="cardDonneeBody">
                        <p><i>Température resentie</i> : {resultat.main.feels_like}°C</p>
                        <p><i>Taux d'humidité</i> : {resultat.main.humidity}%</p>
                        <p><i>Min</i> : {resultat.main.temp_min} °C</p>
                        <p><i>Max</i> : {resultat.main.temp_max} °C</p>
                    </div>
                </div> : <p>chargement en cours...</p>
            }
        </Fragment >
    )
}