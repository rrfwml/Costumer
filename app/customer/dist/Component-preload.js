//@ui5-bundle customer/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"customer/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("customer.Component",{metadata:{manifest:"json"}})});
},
	"customer/i18n/i18n.properties":'# This is the resource bundle for customer\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Customer\n\n#YDES: Application description\nappDescription=Customer',
	"customer/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"customer","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.1","toolsId":"74702db0-04ff-4c2d-b48e-38dc6cfc99c3"},"crossNavigation":{"inbounds":{"Customer-display":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Customer","action":"display"}}},"dataSources":{"mainService":{"uri":"odata/v4/service/customer/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"customer.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"CustomersList","target":"CustomersList"},{"pattern":"Customers({key}):?query:","name":"CustomersObjectPage","target":"CustomersObjectPage"}],"targets":{"CustomersList":{"type":"Component","id":"CustomersList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Customers","variantManagement":"Page","navigation":{"Customers":{"detail":{"route":"CustomersObjectPage"}}}}}},"CustomersObjectPage":{"type":"Component","id":"CustomersObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Customers"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"customer.service"}}'
}});