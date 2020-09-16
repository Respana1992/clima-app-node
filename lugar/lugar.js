const axios = require('axios');

const getLugarLatLng = async(direcccion) => {
    const encodeUrl = encodeURI(direcccion);

    const instance = axios.create({
        baseURL: `https: //devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '2cda259aebmsh33eb64e685fb66ep18d2dfjsn8460b7d374c8' }
    });

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultador para la ${direcccion}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}