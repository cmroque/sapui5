sap.ui.define([],()=>{"use strict";return{statusText(e){const t=this.getOwnerComponent().getModel("i18n").getResourceBundle();switch(e){case"A":return t.getText("invoiceStatusA");case"B":return t.getText("invoiceStatusB");case"C":return t.getText("invoiceStatusC");default:return e}}}});