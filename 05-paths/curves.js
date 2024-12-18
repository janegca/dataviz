// path.quadraticCurveTo example
var qCP = [25, 80];

var qPath = d3.path();
qPath.moveTo(10,10);
qPath.quadraticCurveTo(qCP[0],qCP[1], 190, 10);

d3.select("#demoCurve")
  .append("path")
  .attr("d", qPath)
  .attr("stroke", "black")
  .attr("fill", "none");

// path.bezierCurveTo example
var bCP1 = [25, 120];
var bCP2 = [175, 190];

var bPath = d3.path();
bPath.moveTo(10,190);
bPath.bezierCurveTo(bCP1[0],bCP1[1], bCP2[0], bCP2[1], 190, 120);

d3.select("#demoCurveOutline")
  .append("path")
  .attr("d", qPath)
  .attr("stroke", "black")
  .attr("fill", "none");
    
// Draw control points and lines to control points
d3.select("#demoCurve")
  .append("path")
  .attr("d", bPath)
  .attr("stroke", "black")
  .attr("fill", "none");

d3.select("#demoCurveOutline")
  .append("path")
  .attr("d", bPath)
  .attr("stroke", "black")
  .attr("fill", "none");
    
addCurveOutline(qCP, bCP1, bCP2, d3.select("#demoCurveOutline"));
