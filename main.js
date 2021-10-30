function setUpEvents(){
    var thepics=document.getElementsByClassName("selection")
    for(var i=0;i<4;i++){
        thepics[i].setAttribute("style","margin-right: 63px");
    }    
}
window.onload=function(){setUpEvents()};
