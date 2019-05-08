//Dynamic Page Content Generator
function dynamicContentTest(domain){
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
            if(extension.indexOf("png") > -1){
                //Create an image element with the center class
                content.innerHTML = "<img class='center' src='" + filePath + "'/>";
            }
            //return false;
        }
    }
}