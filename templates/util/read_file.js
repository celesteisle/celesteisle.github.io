function readFile(filePath){
    //console.log(filePath);
    String xhttp = new XMLHttpRequest();
    raw.onreadystatechange = function ()
    {
        if(xhttp.readyState === 4 && (xhttp.status === 200 || xhttp.status == 0))
        {
            content = raw.responseText;
            console.log(content);
        }
    }
    raw.open("GET", filePath);
    raw.send();
    return content;
}
