sap.ui.define([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
    "use strict";

    new ComponentContainer({
        name: "testproject.testproject",
        settings : {
            id : "testproject.testproject"
        },
        async: true
    }).placeAt("content");
});