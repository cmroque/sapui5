const cds = require('@sap/cds')
const { update } = require('@sap/cds/libx/_runtime/hana/execute')
const axios = require('axios')
// const cloudSDK = require('@sap-cloud-sdk/core')

module.exports = cds.service.impl((srv) => {


    srv.on('test', async (req) => {
        
            // let oDestination = await cloudSDK.getDestination("swapi")
            // let oRequestConfig = await cloudSDK.buildHttpRequest(oDestination)

        let callPeopleAPI = await axios.get('https://www.swapi.tech/api/people' , {
            headers: {}
        })
            // let callPeopleAPI = await axios.get(oRequestConfig , {
            //     headers: {}
            // })
        console.log(callPeopleAPI.data)
        return JSON.stringify(callPeopleAPI.data)

    })

    srv.on('getBook', async (req) => {
        const { Books } = cds.entities
        const response = await cds.read(Books)
        console.log(response)
        return JSON.stringify(response)
        
        // let Data = {
        //     ID: 1,
        //     stock: 100,
        //     title: 'Wuthering Heights'
        // }

        // Data.stock === 101
        // let ID = Data.ID
        // delete Data.ID

        // await update.update(Books,ID).into(Data)
        
        // return 'Hello World!'
    })

    // srv.on('myQuery', async (req) => {
    //     const response = await cds.read(TB_SUBCONTRACTORS).where({
    //         SUBCONTRACTOR_ID: vdata.SUBCONTRACTOR_ID
    //     })

    //     return cds.run([
    //         SELECT.from(TB_USERS).where({
    //             ID: d.ID
    //         }).where({
    //             FirstName: d.FirstName
    //         })
    //     ])

    //     const {
    //         TB_PO_CONTRACTS,
    //         TB_SUBCONTRACTORS,
    //         TB_COMPANY,
    //         TB_HISTORY,
    //         TB_USERS,
    //         TB_ZSRM_SUBTYPE,
    //         TB_DOCUMENT,
    //         TB_SUB_TYPE_STEP,
    //         TB_SUB_DOC_STAT_EXCEPTION,
    //         TB_SUBTYPE_DATA,
    //         TB_TRACKER,
    //         TB_SUB_DOC
    //     } = cds.entities('com.sap.contract')
    // })

})