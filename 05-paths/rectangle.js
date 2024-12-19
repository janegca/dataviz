var origin = [25,25];
var width = 150;
var height = 150;

var path = d3.path();
    path.rect(origin[0], origin[1], width, height);

d3.select("#demoRect")
    .append("path")
    .attr("d", path)
    .attr("fill", "red")
    .attr("stroke", "black");

d3.select("#demoRectOutline")
    .append("path")
    .attr("d", path)
    .attr("fill", "red")
    .attr("stroke", "black");
    
addRectOutline(origin, width, height, d3.select("#demoRectOutline"));
