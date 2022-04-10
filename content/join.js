var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIWebNavigation)
                   .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                   .rootTreeItem
                   .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIDOMWindow);

  var user_id;
   
  var join = {

   onLoad: function() {
    // initialization code
    this.initialized = true;
  },

  onMenuItemCommand: function() {
  
		mainWindow.userid=global_content.split(' ',2)[0];
		mainWindow.document.getElementById('sidebar').contentWindow.location='chrome://helloworld/content/recieve.xul';
}
};
window.addEventListener("load", function(e) { join.onLoad(e); }, false); 