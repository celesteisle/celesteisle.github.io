//Dynamic Page Content Generator
function dynamicContent(domain){
    //Get a list of all link elements on the page
    var links = document.getElementsByClassName("file");
    //Iterate through each link in the list
    for(var i = 0, size = links.length; i < size ; i++){
        var link = links[i];
        //Get the location of the content file
        var filePath = link.href;
        //Change the link href to redirect user to the content section of the page
        link.href = "#content";
        
        link.onclick = function(){
            //Get the file extension of the content file
            var extension = filePath.substring(filePath.indexOf(".", filePath.indexOf(domain) + domain.length) + 1);
            //Get content element
            var content = document.getElementById("content");
            //Create content based on file extension
            if(extension === "png"){
                //Create an image element with the center class
                content.innerHTML = "<img class='center' src='" + filePath + "'/>";
            } else if(extension === "emb"){
                content.className+= "row section div grey";
                content.innerHTML = function(filePath){
                    //console.log(filePath);
                    var raw = new XMLHttpRequest();
                    var content = "";
                    raw.open("GET", filePath);
                    raw.onreadystatechange = function ()
                    {
                        if(raw.readyState === 4)
                        {
                            if(raw.status === 200 || raw.status == 0)
                            {
                                content += raw.responseText;
                                //console.log(content);
                            }
                        }
                    }
                    raw.send(null);
                    return content;
                }
            }
            //return false;
        }
    }
}