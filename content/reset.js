var reset = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
	 
  },
  
 onMenuItemCommand: function() {
 
 //This function handles the response after the page has been refreshed.

             function handleResetChat() {
				document.getElementById('text').innerHTML = '';
				
			}	
			var sen=getXmlHttpRequestObject();
 //This cleans out the database so we can start a new chat session.
			
				if (sen.readyState == 4 || sen.readyState == 0) {
					
					sen.open("GET", 'http://www.browserx.co.nf/getChat.php?action=reset&uid='+uid, true);
					sen.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					sen.onreadystatechange = handleResetChat;
					sen.send(null);
					
					document.getElementById('id2').value = '';
				}							
			}		
 };
window.addEventListener("load", function(e) { Chat.onLoad(e); }, false); 