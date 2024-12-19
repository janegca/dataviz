function demo1() {
  var center = [100, 100];
  var radius = 75;
  var startAngle = 0;
  var endAngle = Math.PI / 2;

  var arcPath = d3.path();
  arcPath.moveTo(center[0], center[1]);
  // draws clockwise
  // pass 'true' as optional last argument to draw counterclockwise
  // arc(cx,cy,radius, start, end [,anti-clockwise])
  arcPath.arc(center[0], center[1], radius, startAngle, endAngle)
  arcPath.closePath();
    
  d3.select("#demoArc")
    .append("path")
    .attr("d", arcPath)
    .attr("stroke", "black")
    .attr("fill", "red");
    
  d3.select("#demoArcOutline")
    .append("path")
    .attr("d", arcPath)
    .attr("stroke", "black")
    .attr("fill", "red");

  addArcOutline(center, radius, d3.select("#demoArcOutline"));
}
demo1();

function demo2() {
  var points = [[160,190],[10,100],[185,25]];
  var radius = 30;

  var arcToPath = d3.path();
  arcToPath.moveTo(points[0][0], points[0][1]);
  arcToPath.arcTo(points[1][0], points[1][1], points[2][0], points[2][1], radius)
  arcToPath.lineTo(points[2][0], points[2][1])
  arcToPath.closePath();

  d3.select("#demoArcTo")
    .append("path")
    .attr("d", arcToPath)
    .attr("stroke", "black")
    .attr("fill", "red");
      
  d3.select("#demoArcToOutline")
    .append("path")
    .attr("d", arcToPath)
    .attr("stroke", "black")
    .attr("fill", "red");
      
  addArcToOutline(points[0], points[1], points[2], radius, d3.select("#demoArcToOutline"));
}
demo2();