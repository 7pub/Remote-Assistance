var globalmouse_x;
var globalmouse_y;
var timer;
var uid ;
var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIWebNavigation)
                   .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                   .rootTreeItem
                   .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIDOMWindow);


var HelloWorld1 = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
	uid=mainWindow.userid;
	 
  },
  
  abc: function(){
     
     var xml=new XMLHttpRequest();
	 xml.onreadystatechange=function()
	{
	 if (xml.readyState==4 && xml.status==200)
		{
		  mainWindow.document.getElementById('sidebar').contentWindow.location='chrome://helloworld/content/hello.xul';
		}	
	}
	 clearInterval(timer);
	
	xml.open("GET","http://browserx.co.nf/getChat.php?close=1&uid="+uid,true);
	xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xml.send(null);
},
  
  onMenuItemCommand: function() {
     
	var user = document.getElementById('id1').value;
	var win = Components.classes["@mozilla.org/appshell/window-mediator;1"]
           .getService(Components.interfaces.nsIWindowMediator)
           .getMostRecentWindow("navigator:browser");
	
  
	function fetch(){
	
	var xmlhttp=new XMLHttpRequest();
	
	xmlhttp.onreadystatechange=function()
	{	//alert(xmlhttp.readyState);
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	alert("sent");
		}	
	}
	
    xmlhttp.open("POST","http://www.skmanish.hostingsiteforfree.com/getdata.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('PageContent='+escape(win.getBrowser().selectedBrowser.contentDocument.documentElement.innerHTML)+"&uid="+uid);
  }
 setInterval(function(){fetch()},3000);
 
/* win.getBrowser().selectedBrowser.contentWindow.onmousemove = function(e){
 
    if(e.pageX || e.pageY){
	  
       globalmouse_x=e.pageX;
	   globalmouse_y=e.pageY;
	 }
}
function updatemouse(){
    var posx = globalmouse_x;
    var posy = globalmouse_y;

    var xmlrequest=new XMLHttpRequest();
	xmlrequest.onreadystatechange=function()
	{
	if (xmlrequest.readyState==4 && xmlrequest.status==200)        
		{
		}	
	}
	xmlrequest.open("GET","http://browserx.co.nf/getChat.php?uid="+uid+"&positionx="+posx+"&positiony="+posy,true);
	xmlrequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlrequest.send(null);
	  
}
 timer = setInterval(function(){updatemouse();},1000);	*/
}
};
window.addEventListener("load", function(e) { HelloWorld1.onLoad(e); }, false); 