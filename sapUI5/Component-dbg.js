sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/f/library",
  "sap/f/FlexibleColumnLayoutSemanticHelper"
], function (UIComponent, JSONModel, library, FlexibleColumnLayoutSemanticHelper) {
  "use strict";

  var LayoutType = library.LayoutType;

  var Component = UIComponent.extend("sap.f.ShellBarWithFlexibleColumnLayout.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      var oModel = new JSONModel();
      this.setModel(oModel);

      // set products demo model on this sample
      var oProductsModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/cuentas.json"));
      oProductsModel.setSizeLimit(1000);
      this.setModel(oProductsModel, "products");


      this.getRouter().initialize();
    },

    /**
		 * Returns an instance of the semantic helper
		 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
		 */
    getHelper: function () {
      var oFCL = this.getRootControl().byId("fcl"),
        oParams = new URLSearchParams(window.location.search),
        oSettings = {
          defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
          defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
          initialColumnsCount: oParams.get("initial"),
          maxColumnsCount: oParams.get("max")
        };

      return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
    }
  });
  return Component;
});
