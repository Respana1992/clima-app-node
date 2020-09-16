const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3d0c6fc02d9be8f11fbfc9a731f46a77&units=metric`);

    resp.data.main.temp;
}

module.exports = {
    getClima
}