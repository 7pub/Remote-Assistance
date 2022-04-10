function handleSendChat() {
			clearInterval(mTimer);
			getChatText();
				}
var sendReq = getXmlHttpRequestObject();
var send = {
    onLoad: function() {
    // initialization code
    this.initialized = true;
	},
 
  onMenuItemCommand: function() {
 		
		u=document.getElementById('id2').value;
		d=document.getElementById('id1').value;
		
		if(u=='') {alert('You have not entered a message');return;}
		if(d=="Enter your name"){alert('Enter your name!!');return;}
     
		if (sendReq.readyState == 4 || sendReq.readyState == 0) {
		sendReq.open("POST", 'http://www.browserx.co.nf/getChat.php', true);
		sendReq.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		sendReq.onreadystatechange = handleSendChat;
		
		var param = 'message='+u;
		param += '&name='+d;
		param += '&uid='+uid;
		sendReq.send(param);
		document.getElementById('id2').value = '';
	}
}
};
window.addEventListener("load", function(e) { Chat.onLoad(e); }, false); //Add a message to the chat server.