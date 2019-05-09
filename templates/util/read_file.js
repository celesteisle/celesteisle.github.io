function readFile(filePath){
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
