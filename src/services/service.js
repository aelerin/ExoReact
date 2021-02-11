const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'b117dbbddb55f22eee4e95855b8c2a3d'
let HTTpHeaders = new Headers()
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    cache: 'default',
    mode: 'cors'
};
class MeteoService {
    getMeteoByVille = async (ville) => {
        return await fetch(`${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`, init).then(res => res.json())
    }
}

export default Object.freeze(new MeteoService())