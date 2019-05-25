function dynamicIndex(domain){
    var filePath = document.location.toString();
    var indexPath = filePath.substring(0, filePath.indexOf(".", filePath.indexOf(domain) + domain.length) + 1) + "xml";
    readFile(indexPath, domain, "index");
}
