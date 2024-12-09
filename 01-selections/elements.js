// Create elements (happens on page load)
var circleGen = d3.creator("circle");

d3.select("#createSVG")
  .selectAll("circle")
  .data([1,2,3])
  .enter()
  .append(circleGen)
  .attr("r", 20)
  .attr("cx", (d) => d * 75)
  .attr("cy", 30)
  .attr("fill", "lightblue");

function appendElement() {
  d3.select("#appendElement")
    .append("circle")
    .attr("r", 25)
    .attr("cx", (d,i,nodes) => {
      return +nodes[i].previousElementSibling.getAttribute("cx") + 75;
     })
    .attr("cy", 50)
    .attr("fill", "lightblue");
}

// Append using a function
function createCircle() {
  // need to supply namespace for the element
  var ns = "http://www.w3.org/2000/svg";
  var circle = document.createElementNS(ns, "circle");
  circle.setAttribute("r",25);
  return circle;
}

function appendWithFunction() {
  d3.select("#appendWithFunction")
    .append(createCircle)
    .attr("cx", (d,i,nodes) => {
      return +nodes[i].previousElementSibling.getAttribute("cx") + 75;
     })
    .attr("cy", 50)
    .attr("fill", "pink");
}

// Moving Elements
//  select first node and append it, adding it to the end of the selection
function rotate() {
  d3.select("#moveContainer")
    .append(() => d3.select("#moveContainer > :first-child").node());
}

// Inserting Elements
function insertBox() {
  // inserts in front of first child
  d3.select("#insertBox")
    .insert("div", ":first-child")
    .classed("box aqua-box text-box", true)
    .html("X");
}

function insertBox2() {
  // insert as children of selected elements
  d3.selectAll("#insertBox2 > div")
    .insert("div")
    .classed("box pink-box text-box", true)
    .html("X");
}

// Cloning
function cloneBoxes() {
  d3.selectAll("#cloneBoxes div")
    .clone(false)
    .attr("class", "box text-box")
    .style("background-color", "lightblue")
    .html("X");
}

// Removing Elements
function removeBoxes() {
  d3.selectAll("#removeBoxes > .pink-box").remove();
}

// Raise and Lower Elements
function raise() {  
  // move them in the DOM
  d3.select("#raiseSVG")
    .selectAll("#pink,#violet")
    .raise();
    
  // re-display them in their new positions
  d3.select("#raiseSVG")
    .selectAll("circle")
    .attr("cx", (d, i) => 30 + (i * 60));
}

function lower() {  
  d3.select("#lowerSVG")
    .selectAll("#pink,#violet")
    .lower();
    
  d3.select("#lowerSVG")
    .selectAll("circle")
    .attr("cx", (d, i) => 30 + (i * 60)); 
}
