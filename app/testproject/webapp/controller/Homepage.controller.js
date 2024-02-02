sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/EventBus",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, EventBus, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("testproject.testproject.controller.Homepage", {
            // onInit: function () {
            //     //set data model on view
            //     var oData = {
            //         recipient : {
            //             name : "World"
            //         }
            //     }
                
            //     var oModel = new JSONModel(oData);
            //     this.getView().setModel(oModel);
                
            //     // set i18n model on view
            //     var i18nModel = new ResourceModel({
            //         bundleName: "testproject.testproject.i18n.i18n"
            //     });

            //     this.getView().setModel(i18nModel,"i18n");

            // },
            
            onShowHello: function () {
                
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                MessageToast.show(sMsg);

                // MessageToast.show("Hello World!");
                // Swal.fire(sMsg);
            }
        });
    });
