 
var yes = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
		 },
 
 onMenuItemCommand: function() {

		var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIWebNavigation)
                   .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                   .rootTreeItem
                   .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIDOMWindow);
				   mainWindow.document.getElementById('sidebar').contentWindow.location='chrome://helloworld/content/recieve.xul';
		}
};

window.addEventListener("load", function(e) { yes.onLoad(e); }, false); 
