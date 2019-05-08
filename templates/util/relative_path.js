function relativePathPrefix(httpsPageLoc, domain){
    var domainEnd = httpsPageLoc.indexOf(domain) + domain.length + 1;
    var pageLoc = httpsPageLoc.substring(domainEnd);
    
    var slashIndex = pageLoc.indexOf("/")
    var relativePrefix = "";

    while(slashIndex > -1){
        pageLoc = pageLoc.substring(slashIndex  + 1);
        relativePrefix += '../';
        slashIndex = pageLoc.indexOf('/');
    }

    return relativePrefix;
    /*return pageLoc + " " + slashIndex + " " + domainEnd;*/
}
