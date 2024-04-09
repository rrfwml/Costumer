const cds = require('@sap/cds');
/**
* Implementation for Risk Management service defined in ./risk-service.cds
*/
module.exports = cds.service.impl(async function() {

    const bupa = await cds.connect.to('API_BUSINESS_PARTNER');

    this.on('READ', 'Customers', async req => {
        return bupa.run(req.query);
    });
});

