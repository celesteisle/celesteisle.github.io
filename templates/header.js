//getting the header DOM element
var header = document.getElementById("header");

var imgRow = document.createElement("div");
imgRow.className = "row";
var homeLink = document.createElement("a");
homeLink.href = "https://celesteisle.github.io/index.html";
var headerPicture = document.createElement("picture");
headerPicture.innerHTML = "<source class='center' media='(min-width: 961px)' srcset='https://celesteisle.github.io/images/icons/celestetitle.png'/><source class='center' media='(max-width: 960px)' srcset='https://celesteisle.github.io/images/icons/celeste.png'/><img class='center' src='https://celesteisle.github.io/images/icons/celeste.png' style='max-width: 768px' />";
homeLink.appendChild(headerPicture);
imgRow.appendChild(homeLink);

var ribbonRow = document.createElement("div");
ribbonRow.className = "row";
var links = [ 
    "<a href='https://celesteisle.github.io/maps/maps.html'><h4 class='menuitem'>Maps</h4></a>", 
    "<a href='https://celesteisle.github.io/mechs/mechs.html'><h4 class='menuitem'>Mechs</h4></a>", 
    "<a href='https://celesteisle.github.io/lore/lore.html'><h4 class='menuitem'>Lore</h4></a>", 
    "<a href='https://celesteisle.github.io/party/party.html'><h4 class='menuitem'>Party</h4></a>" ];
    
links.forEach(function (link) {
    var item = document.createElement("div");
    item.className = "three columns";
    item.innerHTML = link;
    ribbonRow.appendChild(item);
});

header.appendChild(imgRow);
header.appendChild(ribbonRow);