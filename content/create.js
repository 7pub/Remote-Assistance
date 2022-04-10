 
var create = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
},
 
onMenuItemCommand: function() {window.open("chrome://helloworld/content/create.xul", "", "chrome,left=450,top=300");}
};
window.addEventListener("load", function(e) { create.onLoad(e); }, false); 
