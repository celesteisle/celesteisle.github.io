function xmlHandler(xmlDoc, groupName){
    var group = document.getElementById(groupName);
    group.innerHTML = contentDes(xmlDoc.documentElement);
}

function getChildrenByTagName(root, tagName){
    var elements = root.getElementsByTagName(tagName);
    var children = [];
    for( i = 0, size = elements.length; i < size; i ++){
        element = elements[i];
        if(element.parentElement == root){
            children.push(element);
        }
    }
    return children;
}

function contentDes(content){
    var divWidths = [ "one", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    var colors = [ "green", "blue", "red", "lightblue", "salmon", "orange", "pink", "yellow" ];
    var colorCounter = 0;
    var html = "<div class='row'>";
    var sections = getChildrenByTagName(content, "section");

    var size = sections.length;
    var numOfDivs = size;
    var columnsRem = 12;
    var target = 3;
    for(var i = 0; i < size;){
        //console.log("i=" + i + " numOfDivs=" + numOfDivs + " target=" + target + " columnsRem=" + columnsRem);
        var section = sections[i];
        if(numOfDivs < 4 && columnsRem === 12){
            target = 12 / numOfDivs;
        }
        var width = target;
        if(columnsRem < target){
            columnsRem = 12;
            html += "</div><div class='row'>";
        } else if(section.hasAttribute("width") && ( 0 > columnsRem - parseInt(section.getAttribute("width")))) {
            columnsRem = 12;
            html += "</div><div class='row'>";
        } else {
            if(section.hasAttribute("width")){
                width = parseInt(section.getAttribute("width"));
            } else {
                var moreDivsInRow = columnsRem / target;
                width = columnsRem / moreDivsInRow;
            }
            var remainder = columnsRem - width;
            if(remainder < target){
                width += remainder;
            }
            columnsRem -= width;
            section.setAttribute("width", divWidths[width]);   
            if(!section.hasAttribute("color")){
                var color = colors[colorCounter]
                colorCounter = (colorCounter + 1) % colors.length;
                section.setAttribute("color", color); 
            }
            html += sectionDes(section);
            numOfDivs --;
            i++;
        }
    }
    return html + "</div>";
}

function sectionDes(section){
    //Format Section
    var width = section.getAttribute("width");
    var color = section.getAttribute("color");
    var html = "<div class='" + width + " columns section div " + color + "'>" + 
            "<h5 class='section title'>" + 
            section.getAttribute("title") + 
            "</h5>";
            
    //Parse data children
    var datum = getChildrenByTagName(section, "data");
    var size = datum.length;
    for(var i = 0; i < size; i ++){
        var data = datum[i];
        html += dataDes(data);
    }
    //return html with end formatting
    return html + "</div>";
}

function dataDes(data){
    var html = "";
    var type = data.getAttribute("type");
    if(type === "ulist"){
        html += ulistDes(data);
    } else if(type === "olist"){
        html += olistDes(data);
    } else if(type === "table"){
        html += tableDes(data);
    } else if(type === "general"){
        html += generalDes(data);
    }else if(type === "paras"){
        html += parasDes(data);
    }
    return html;
}

function ulistDes(ulist){
    var html = "<ul>";
    var items = getChildrenByTagName(ulist, "item");
    var size = items.length;
    for(var i = 0; i < size; i ++){
        var item = items[i];
        html += "<li>" + itemDes(item) + "</li>";
    }
    return html + "</ul>";
}

function olistDes(olist){
    var html = "<ol>";
    var items = getChildrenByTagName(olist, "item");
    var size = items.length;
    for(var i = 0; i < size; i ++){
        var item = items[i];
        html += "<li>" + itemDes(item) + "</li>";
    }
    return html + "</ol>";
}

function tableDes(table){
    var html = "<table>";
    var head = getChildrenByTagName(table, "head");
    if(head.length > 0){
        html += "<thead>" + tableSecDes(head[0]) + "</thead>";
    }
    var body = getChildrenByTagName(table, "body");
    html += "<tbody>" + tableSecDes(body[0]) + "</tbody>"
    return html + "</table>";
}

function generalDes(general){
    var html = "";
    var items = getChildrenByTagName(general, "item");
    var size = items.length;
    for(var i = 0; i < size; i ++){
        var item = items[i];
        html += itemDes(item);
    }
    return html;
}

function tableSecDes(tableSec){
    var html = "";
    var rows = getChildrenByTagName(tableSec, "row");
    var size = rows.length;
    for(var i = 0; i < size; i ++){
        var row = rows[i];
        html += "<tr>" + rowDes(row) + "</tr>";
    }
    return html;
}

function rowDes(row){
    var html = "";
    var items = getChildrenByTagName(row, "item");
    var size = items.length;
    for(var i = 0; i < size; i ++){
        var item = items[i];
        if(row.parentElement.parentElement.tagName === "head"){
            html += "<th>" + itemDes(item) + "</th>";
        } else {
            html += "<td>" + itemDes(item) + "</td>";
        }
    }
    return html;
}

function itemDes(item){
    var html = "";
    var children = item.childNodes;
    var size = children.length;
    for(var i = 0; i < size; i ++){
        var child = children[i];
        if(child.nodeType === 1){
            if(child.tagName === "data"){
                html += dataDes(child);
            } else {
                html += child.outerHTML;
            }
        } else if(child.nodeType === 3){
            html += child.textContent;
        }
    }
    return html;
}