//getting the header DOM element
var header = document.getElementById("header");
var documentLocation = document.location.toString();
var domain = "celesteisle.github.io";
//header.innerHTML=documentLocation;
//header.innerHTML+=" a";

//Getting the relative prefix for the filepaths of each other page
var relativePrefix = relativePathPrefix(documentLocation, domain);
//header.innerHTML+= " " + relativePrefix;

//Creating imgRow div
var imgRow = document.createElement("div");
imgRow.className = "row";

var homeLink = document.createElement("a");
homeLink.href = relativePrefix + "index.html";
var headerPicture = document.createElement("picture");
headerPicture.innerHTML = "<source class='center' media='(min-width: 961px)' srcset='" + relativePrefix + "images/icons/celestetitle.png" + "' />"  + 
                        "<source class='center' media='(max-width: 960px)' srcset='" + relativePrefix + "images/icons/celeste.png" + "' />" + 
                        "<img class='center' src='" + relativePrefix + "images/icons/celestetitle.png" + "' style='max-width: 768px' />";
homeLink.appendChild(headerPicture);
imgRow.appendChild(homeLink);

//Creating the ribbon row
var ribbonRow = document.createElement("div");
ribbonRow.className = "row";
//Creating an array of each element in the ribbon
var pages = [ "maps/maps.html", "mechs/mechs.html", "lore/lore.html", "party/party.html" ];

//Creating and equally spaced div for each ribbon element 
pages.forEach(function (page) {
    var item = document.createElement("div");
    item.className = "three columns";
    var pageName = page.substring(0, page.indexOf("/"));
    item.innerHTML = "<a href='" + relativePrefix + page + "'><h4 class='menuitem'>" + pageName.charAt(0).toUpperCase() + pageName.substring(1) + "</h4></a>";
    ribbonRow.appendChild(item);
});

//Appending the two rows as children of the header div
header.appendChild(imgRow);
header.appendChild(ribbonRow);
