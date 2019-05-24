//Dynamic Page Content Generator
function clickHandler(filePath, domain){
    //Get the file extension of the content file
    var extension = filePath.substring(filePath.indexOf(".", filePath.indexOf(domain) + domain.length) + 1);
    //Create content based on file extension
    if(extension === "png" || extension === "jpg"){
        imageHandler(filePath);
    } else if(extension === "xml"){
        //Call readFile reads xml document and then calls xmlhandler once the httprequest is fulfilled
        readFile(filePath, domain);
    }
    return false;
}

function dynamicContent(domain){
    //Get a list of all link elements on the page
    var links = document.getElementsByClassName("file");
    //Iterate through each link in the list
    for(var i = 0, size = links.length; i < size ; i++){
        var link = links[i];
        var filePath = link.href;
        //Change the link href to redirect user to the content section of the page
        link.href = "#content";
        link.setAttribute("onclick", "clickHandler('" + filePath + "','" + domain + "')");
    }
}
