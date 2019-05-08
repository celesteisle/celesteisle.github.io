//Dynamic Page Content Generator
function dynamicContent() {
    //Get a list of all link elements on the page
    var links = document.getElementsByTagName("a");
    //Iterate through each link in the list
    links.forEach( function(link){
        //If the link has an id which is a file name (e.g. file../../images/maps/combat/chasm.png)
        if(link.id.indexOf("file") > -1){ 
            //remove the "file" prefix
            var fileName = link.id.substring(4);
            //When the link is clicked, run the following js function
            link.onclick = function(link, fileName){
                //Getting the content div in the html page
                var content = document.getElementById("content");
                //get file extension
                var extension = fileName.substring(fileName.indexOf(".") + 1);
                //var contentName = fileName.substring(0, fileName.indexOf("."));
                if(extension == "table"){
                    //Create table content
                } else if(extension == "journal"){
                    //Create journal content
                } else if(extension == "png"){
                    //Create image content
                    var img = document.createElement("img");
                    img.className = "center";
                    img.src = "<img src='" + fileName +"' />";
                    content.appendChild(img);
                } else if(extension == "svg"){
                    //Create image content
                }
                return false;
            }
        }
    });
    return false;
}