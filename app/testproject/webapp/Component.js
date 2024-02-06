/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/Device",
        "testproject/testproject/model/models"
    ],
    function (UIComponent, JSONModel, ResourceModel, Device, models) {
        "use strict";

        return UIComponent.extend("testproject.testproject.Component", {
            metadata: {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                //set data model on view
                const oData = {
                    recipient : {
                        name : "World"
                    }
                }
                
                const oModel = new JSONModel(oData);
                this.setModel(oModel);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);