//Dynamic Page Content Generator
function clickHandler(filePath, domain){

    //var filePath = clicked.href;
    console.log(filePath);
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
        //Get the location of the content file
        //var filePath = link.href;
        //store the filepath in the link's ID
        //link.id = filePath;
        //Change the link href to redirect user to the content section of the page
        var filePath = link.href;
        link.href = "#content";
        link.setAttribute("onclick", "clickHandler('" + filePath + "','" + domain + "')");
        /*
        link.onclick = function(){
            //location = link.id;
            console.log(filePath);
            //Get the file extension of the content file
            var extension = filePath.substring(filePath.indexOf(".", filePath.indexOf(domain) + domain.length) + 1);
            //Create content based on file extension
            if(extension === "png" || extension === "jpg"){
                imageHandler(filePath);
            }else if(extension === "xml"){
                //Call readFile reads xml document and then calls xmlhandler once the httprequest is fulfilled
                readFile(filePath, domain);
            }
            return false;
        }
        */
    }
}



function imageHandler(imagePath){
    //Get content element
    var content = document.getElementById("content");
    //Create an image element with the center class
    content.innerHTML = "<img class='center' src='" + imagePath + "'/>";
}

function xmlHandler(xmlText){
    //Get content element
    var content = document.getElementById("content");
    //console.log(xmlText);
    //embed xml data into the content div
    content.innerHTML = xmlText;
}