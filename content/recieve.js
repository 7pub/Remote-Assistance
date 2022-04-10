
var globalcontent="";
var bodycontent="";
var i="";
var newTab;
var receivecoord = getXmlHttpRequestObject();
var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIWebNavigation)
                   .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                   .rootTreeItem
                   .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                   .getInterface(Components.interfaces.nsIDOMWindow);
var uid;


var HelloWorld = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
	uid = mainWindow.userid;
  },

  onMenuItemCommand: function() {  
  
		   
	function url(spec) 
	{
		var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
		return ios.newURI(spec, null, null);
	}
	// opening a new tab and modifying the contents
	newTab = Application.activeWindow.open(url("about:blank"));
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	i=xmlhttp.responseText;
			if(globalcontent!=i)
			{	
				alert("receive");
				newTab.document.documentElement.innerHTML=xmlhttp.responseText;
				newTab.document.body.innerHTML+="<img id='main' style='position: absolute; top: 200px; left: 400px;' src='http://wiki.fluidproject.org/download/attachments/24944642/cursor.png' width='15' height='25'/>";
				globalcontent=i;
			}
		}
	}
	xmlhttp.open("GET","http://www.skmanish.hostingsiteforfree.com/senddata.php?uid="+uid,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(null);

	function fetch(){

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	i=xmlhttp.responseText;
			if(globalcontent!=i)
			{	  
				newTab.document.documentElement.innerHTML=xmlhttp.responseText;
				//newTab.document.body.innerHTML+="<img id='main'  src='http://wiki.fluidproject.org/download/attachments/24944642/cursor.png' width='15' height='25'/>"
				globalcontent=i;
			}
		}
	}
  
	xmlhttp.open("GET","http://www.skmanish.hostingsiteforfree.com/senddata.php?PageContent=123&uid="+uid,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(null);

	}
	setInterval(function(){fetch();},3000);

	/*function getcoordinate() {
					
                 	if (receivecoord.readyState == 4 || receivecoord.readyState == 0) {
					receivecoord.open("GET", 'http://www.browserx.co.nf/getChat.php?POSITION=123&uid='+uid, true);
					receivecoord.onreadystatechange = getcoord;
					receivecoord.send(null);
					}
			}
	function getcoord(){
    	if (receivecoord.readyState == 4) {
	                 var xmldoc = receivecoord.responseXML;
				  	 var coordinate_nodes = xmldoc.getElementsByTagName("message"); 
					 var n_coordinate = coordinate_nodes.length;
					
					
		
				
					for (i = 0; i < n_coordinate; i++) {
						var x_coordinate = coordinate_nodes[i].getElementsByTagName("x");
						var y_coordinate = coordinate_nodes[i].getElementsByTagName("y");  }
						
                      
                     	var top = y_coordinate[0].firstChild.nodeValue + "px";
	                    var left = x_coordinate[0].firstChild.nodeValue  + "px";
						var str="position:absolute;z-index:1000; top:"+top+"; left:"+left+";";
						
						newTab.document.documentElement.innerHTML=globalcontent;
						newTab.document.body.innerHTML+="<img id='main'  src='http://wiki.fluidproject.org/download/attachments/24944642/cursor.png' width='15' height='25' style='"+str+"'/>";
			
					}	
	}
	setInterval(function(){getcoordinate();},1000);*/
}
};
window.addEventListener("load", function(e) { HelloWorld.onLoad(e); }, false); 