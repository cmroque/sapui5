const cds = require ('@sap/cds')
const axios = require('axios')

module.exports = cds.service.impl((srv) => {
    
    /*Start of backend functions */
    srv.on('get_Math', async (req) => {
        let x = 1;
        let y = 2;
        let z = x + y;
        let name = 'SAP BTP';
        let Array1 = [1,2,3,4,5];
        return 'Hello World!' + z + ' ' + name

    })

})