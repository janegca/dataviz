// Displayed elements sort order depends on bound data

// Sort in descending order by radius
function sortByRadius() {
  d3.selectAll("#sortSVG circle")
    .datum((d,i,nodes) => +nodes[i].getAttribute("r"))
    .sort((a,b) => b - a)
    .attr("cx", (d, i) => 30 + (i * 50));
}

// Sort in ascending order by population
var homelessData = [
  {"state": "California","population": 134278},
  {"state": "Florida",   "population": 32190},
  {"state": "Washington","population": 21112},
  {"state": "New York","population": 89503},
  {"state": "Texas","population": 23548}
];

d3.select("#bargraph")
  .selectAll("rect")
  .data(homelessData)
  .join("rect")
  .attr("height", 19)
  .attr("width", (d) => d.population/500)
  .attr("x", 100)
  .attr("y", (d, i) => i * 20)
  .attr("fill", "pink");

d3.select("#bargraph")
  .selectAll("text")
  .data(homelessData)
  .join("text")
  .text((d) => d.state)
  .attr("x", 96)
  .attr("text-anchor", "end")
  .attr("y", (d, i) => i * 20 + 17);

function sortData() {
  d3.select("#bargraph")
    .selectAll("rect")
    .sort((a,b) => d3.ascending(a.population, b.population))
    .attr("y", (d, i) => i * 20);

  d3.select("#bargraph")
    .selectAll("text")
    .sort((a,b) => d3.ascending(a.population, b.population))
    .attr("y", (d, i) => i * 20 + 17);
}

// Sorting Letters
var stats = ["f", "b", "e", "a", "c", "d"];
stats.sort(() => Math.random() - 0.5);

d3.select("#order")
  // create a 'div' for each letter
  .selectAll("div")
  .data(stats)
  .enter()
  .append("div")
  .style("display", "inline-block")
  .style("font-size", "20px")
  .html((d) => d + "&nbsp;");
    
function sort() {    
  stats.sort(); // alpha sort in DOM
  
  d3.select("#order")
    // re-order letters in display
    .selectAll("div")
    .data(stats, (d) => d)
    .order();
}

// Swap Circles: re-ordering on a 'key' value
var circleOrder = [1, 2, 3, 4];

d3.select("#orderSVG")
  .selectAll("circle")  // create circles
  .data(circleOrder);   // bind them
    
function swap() {  
  var temp = circleOrder[1];
  circleOrder[1] = circleOrder[2];
  circleOrder[2] = temp; 

  d3.select("#orderSVG")  // display circles in new order
    .selectAll("circle")
    .data(circleOrder, (d) => d)
    .order()
    .attr("cx", (d, i) => 30 + (i * 60));    
}

// Swap arbitrary elements
//  The above method will fail if the elements aren't contiguous
//  need to use node() to swap arbitrary elements
d3.select("#swap2")
  .selectAll("div")
  .data(circleOrder);
    
function swap2() { 
  var arr = [];
  
  var pair = d3.selectAll("#box1,#box2")
    .each((d) => { arr.push(d); });
  
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  
  pair.data(arr, (d) => d)
    .order();
}

function swap3() {
  var box1 = document.getElementById("box1");  //violet
  var clone = box1.cloneNode(true);
  var box2 = document.getElementById("box2");  //pink
  var box2_parent = box2.parentNode;
  var box2_nextSibling = box2.nextSibling;
  
  box1.parentNode.replaceChild(box2, box1);
  
  if (box2_nextSibling == box1) {
  	box2_parent.insertBefore(box1, box2);
  } 
  else if (box2_nextSibling) {
  	box2_parent.insertBefore(box1, box2_nextSibling);
  }
  else {
    box2_parent.append(box1);
  }
}

function reset() {
  // reloads whole page
  window.location.reload();
}
