function imageHandler(imagePath){
    //Get content element
    var content = document.getElementById("content");
    //Create an image element with the center class
    content.innerHTML = "<div class='twelve columns section div grey'><img class='center' src='" + imagePath + "'/></div>";
}