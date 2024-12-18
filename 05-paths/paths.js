function demo1() {
  d3.select("#demo1")
  .append("path")
  .attr("d", "M 25 25 L 75 25 L 75 75 Z")
  .attr("stroke", "black")
  .attr("fill", "red");
}
demo1();

function demo2() {
  // create a 'path serializer'
  var path = d3.path()
  path.moveTo(25,25)
  path.lineTo(75,25)
  path.lineTo(75,75)
  path.closePath();
    
  console.log(path.toString()); // M25,25L75,25L75,75Z
      
  d3.select("#demo2")
    .append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "red");
}
demo2();

// Multiple shapes from one path
function demo3() {
  points = [[50,50],[150,125],[200,25],[200,150],[100,250],[250,275]];

var path = d3.path();
	path.moveTo(points[0][0], points[0][1]); //(50,50)
  path.lineTo(points[1][0], points[1][1]); //(150,125)
  path.lineTo(points[2][0], points[2][1]); //(200,25)
  
  path.moveTo(points[3][0], points[3][1]); //(200,150)
  path.lineTo(points[4][0], points[4][1]); //(100,250)
  path.lineTo(points[5][0], points[5][1]); //(250,275)
  path.closePath();
    
d3.select("#demoPath2")
	.append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "red");
    
d3.select("#demoPath2Outline")
	.append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "red");
    
addPathOutline(points, d3.select("#demoPath2Outline"));
}
demo3();
