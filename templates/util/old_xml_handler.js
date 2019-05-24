function xmlHandler(xmlText){
    //Get content element
    var content = document.getElementById("content");
    //console.log(xmlText);
    //embed xml data into the content div
    content.innerHTML = xmlText;
}