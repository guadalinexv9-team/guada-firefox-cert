const Cc = Components.classes;
const Ci = Components.interfaces;

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function guadaCCKService() {}

guadaCCKService.prototype = {
  observe: function(aSubject, aTopic, aData) {
    switch(aTopic) {
      case "profile-after-change":
        Components.utils.import("resource://cck-guada/cckModule.jsm");
        break;
    }
  },
  classDescription: "CCK Service - guada",
  contractID: "@mozilla.org/cck-service-guada;2",
  classID: Components.ID("{9361c15d-96af-4ae9-9be0-45e65e256d5b}"),
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIObserver]),
  _xpcom_categories: [{category: "profile-after-change"}]
}

if (XPCOMUtils.generateNSGetFactory)
  var NSGetFactory = XPCOMUtils.generateNSGetFactory([guadaCCKService]);
else
  var NSGetModule = XPCOMUtils.generateNSGetModule([guadaCCKService]);

