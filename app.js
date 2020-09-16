const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el cliema',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log)
//.catch(console.log);

//clima.getClima(35, 139)
//.then(console.log)
//   .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const corrds = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(corrds.lat, corrds.lng);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}