    function getXmlHttpRequestObject() {
         
		        if (window.XMLHttpRequest)return new XMLHttpRequest();
           else if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
           else alert('Consider upgrading your browser.');
       } 

var receiveReq = getXmlHttpRequestObject();
var lastMessage = 0;
var mTimer;
			
var startchat = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
	 
  },  
  
 onMenuItemCommand: function() {
 
   	     //Gets the current messages from the server
			function getChatText() {
				if (receiveReq.readyState == 4 || receiveReq.readyState == 0) {
					receiveReq.open("GET", 'http://www.browserx.co.nf/getChat.php?uid='+uid+"&chat=1&last=" + lastMessage, true);
					receiveReq.onreadystatechange = handleReceiveChat;
					receiveReq.send(null);
				     }			
			}
			
			//Function for handling the return of chat text
			function handleReceiveChat() {
				
				   if (receiveReq.readyState == 4) {
	               	var chat_div = document.getElementById('text');
					var xmldoc = receiveReq.responseXML;
					chat_div.value='';
					var message_nodes = xmldoc.getElementsByTagName("message"); 
					var n_messages = message_nodes.length;
					
					for (i = 0; i < n_messages; i++) {
						var user_node = message_nodes[i].getElementsByTagName("user");
						var text_node = message_nodes[i].getElementsByTagName("text");
						chat_div.value += user_node[0].firstChild.nodeValue+'\t: ';
						chat_div.value += text_node[0].firstChild.nodeValue + '\n';
						chat_div.scrollTop = chat_div.scrollHeight;
						
					} 
					
					mTimer = setTimeout(getChatText(),5000); //Refresh our chat in 5 seconds
				}
			}
		        //Function for initializating the page.
			    //Set the focus to the Message Box.
			    document.getElementById('id2').focus();
				getChatText(); 
		}
};
window.addEventListener("load", function(e) { Chat.onLoad(e); }, false); 