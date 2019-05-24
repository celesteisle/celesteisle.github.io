function readFile(filePath, domain){
    //console.log(filePath);
    //Making js requests locally will not work on chrome due to security protocal
    //This if statement changes the request to https which is allowed, 
    //but means the data needs to be hosted externally for it to work
    if(filePath.indexOf("file:///" > -1)){
        filePath = "https://" + filePath.substring(filePath.indexOf(domain));
        console.log(filePath);
    }
    var xhttp = new XMLHttpRequest();
    var content = "";
    xhttp.open("GET", filePath, true);
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState === 4 && (xhttp.status === 200 || xhttp.status == 0))
        {
            xmlHandler(xhttp.responseXML);
        }
    }
    xhttp.send(null);
}
