
                                                                               // starting of the landing.js script
var global_id;
var global_content = "";                                                       // global variable declaration
var newuser = new Array();
newuser[0]="";
var j=1;

function getXmlHttpRequestObject() {

                 if (window.XMLHttpRequest)return new XMLHttpRequest();
            else if(window.ActiveXObject)  return new ActiveXObject("Microsoft.XMLHTTP");
            else alert('Consider upgrading your browser.');
          }
   
function remove()
{    var tree = document.getElementById('idtree');
      for (var i = 0; i < tree.view.rowCount + 1; i++){
	   
        var treerow = document.getElementById(i);
         var treeitem = treerow.parentNode;
        
         treeitem.parentNode.removeChild(treeitem);
     }
  
}
      
		 
function fun(id){
		    var jb = document.getElementById('join');
		    jb.setAttribute("disabled",false);
		   
			var t = document.getElementById(id);
            var ID= t.view.getCellText(t.currentIndex,t.columns.getNamedColumn('User_ID'));
			
            global_content=ID;		 
}
		  
        
function add(i,id,desc){
		  var treeChildren = document.getElementById("mychildtree");
          var treeitem   =   document.createElement('treeitem');
          var treerow    =   document.createElement('treerow');
		  treerow.setAttribute('id',i);
          var treecell_1 = document.createElement('treecell');
          var treecell_2 = document.createElement('treecell');
          var treecell_3 = document.createElement('treecell');
          
		  treecell_1.setAttribute('label', "");
	      treecell_2.setAttribute('label', id);
	      treecell_3.setAttribute('label', desc);
	
          treerow.appendChild(treecell_1);
          treerow.appendChild(treecell_2);
          treerow.appendChild(treecell_3);

        treeitem.appendChild(treerow);
        treeChildren.appendChild(treeitem);
}
      
	  var receiveReq = getXmlHttpRequestObject();	 

	  var HelloWorld2 = {
    
	onLoad: function() {
    // initialization code
    this.initialized = true;
	                   
	function getChatText() {
	
	           if (receiveReq.readyState == 4 || receiveReq.readyState == 0) {
					receiveReq.open("GET", 'http://www.browserx.co.nf/getChat.php?active=1', true);
					
					receiveReq.onreadystatechange = handleReceiveChat; 
					receiveReq.send(null);
					}
     }							   
			
			//Function for handling the return of  text
			function handleReceiveChat() {
				   
				    if (receiveReq.readyState == 4) {
			       
					var xmldoc = receiveReq.responseXML;
					var message_nodes = xmldoc.getElementsByTagName("message"); 
					var n_messages = message_nodes.length;
					
				   									
     				for (i = 0; i < n_messages; i++) {
					   
					    var k,p=0;
					  	var wradio = message_nodes[i].getElementsByTagName("id");
	                   	var text_node = message_nodes[i].getElementsByTagName("description");
						
						var id = wradio[0].firstChild.nodeValue;
					    var descr =  text_node[0].firstChild.nodeValue;
						for(k=0;k<j;k++)
						 {
						   	 if(id==newuser[k])break;
                             else p++;						   
						 }
						 if(p==j){newuser[j-1]=id;j=j+1;add(i,id,descr);}
                   }
			}
}
     
getChatText(); 
},
 
 onMenuItemCommand: function() {
    	window.open("chrome://helloworld/content/hello.xul", "", "chrome,left=400,top=100");
 }
};
window.addEventListener("load", function(e) { HelloWorld2.onLoad(e); }, false); 