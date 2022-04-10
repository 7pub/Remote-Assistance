var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIWebNavigation)
                   .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                   .rootTreeItem
                   .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIDOMWindow);
var send1 = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
	 
  },

  onMenuItemCommand: function() { 
    
	var u = document.getElementById('username').value;
	var d = document.getElementById('description').value;   
    
	         if((u=="Enter your name") && (d=="")) alert('Enter Your Username and description!!');
        else if((u!="Enter your name") && (d=="")) alert("Enter your Content description!!");
        else if((u=="Enter your name") && (d!="")) alert('Enter your Username!!');
        else {
   
    if (window.XMLHttpRequest) {
    xmlhttp1 = new XMLHttpRequest();}
	
    xmlhttp1.onreadystatechange=function()
    {
	  
       if ((xmlhttp1.readyState==4 || xmlhttp1.readyState==0) && xmlhttp1.status==200)
		{	
			mainWindow.userid=u;
			mainWindow.document.getElementById('sidebar').contentWindow.location='chrome://helloworld/content/X_ender.xul';
		}
    }
	xmlhttp1.open("GET","http://www.browserx.co.nf/getChat.php?create=1&uid="+u+"&desc="+d,true);
	xmlhttp1.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp1.send(null);
	
}
}
};
window.addEventListener("load", function(e) { send1.onLoad(e); }, false); 