//getting the header DOM element
var icon = document.getElementById("icon");
var documentLocation = document.location.toString();
var domain = "celesteisle.github.io";
//Getting the relative prefix for the filepaths of each other page
var relativePrefix = relativePathPrefix(documentLocation, domain);

icon.href=relativePrefix + "images/icons/icon.ico";