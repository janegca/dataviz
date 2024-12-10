var arr = [13, 8, 3, 2, 2];
var vbHeight = (arr.length * 2 - 1) * 10;

// Visual items exist in DOM
function createBarGraph1() {
    d3.select("#bargraph1")
      .selectAll("rect")
      .data(arr)
      .attr("width", (d) => d * (400/13));
}

// Create visual elements
function createBarGraph2() {
  d3.select("#bargraph2")
    .attr("viewBox", "0 0 400" + " " + vbHeight)
    .selectAll("rect")
    .data(arr)
    .enter()    // contains data elements with no visual element
    .append("rect") // create a visual element for each data item
    .attr("height", 10)
    .attr("width", (d) => d * (400/13))
    .attr("x", 0)
    .attr("y", (d, i) => i * 20)
    .attr("fill", "pink");
}

// Update requires additional visual elements
function createBarGraph3() {
  var update = d3
    .select("#bargraph3")
    .attr("viewBox", "0 0 400" + " " + vbHeight)
    .selectAll("rect")
    .data(arr);

    update.enter()
     .append("rect")
     .merge(update)
     .attr("height", 10)
     .attr("width", (d) => d * (400/13))
     .attr("x", 0)
     .attr("y", (d, i) => i * 20)
     .attr("fill", "aquamarine");
}

// Update requires fewer visual elements
function createBarGraph4() {
  var update =
    d3
      .select("#bargraph4")
      .attr("viewBox", "0 0 400" + " " + vbHeight)
      .selectAll("rect")
      .data(arr);

  update.enter()
    .append("rect")
    .merge(update)
    .attr("height", 10)
    .attr("width", (d) => d * (400/13))
    .attr("x", 0)
    .attr("y", (d, i) => i * 20)
    .attr("fill", "lightblue");

  update.exit().remove();
}

// Using the convience method .join
//  You can pass .join specific functions as optional params
//  they'll be assigned as: enter, update, exit
function createBarGraph5() {
  d3.select("#bargraph5")
    .attr("viewBox", "0 0 400" + " " + vbHeight)
    .selectAll("rect")
    .data(arr)
    .join('rect')  
    .attr("height", 10)
    .attr("width", (d) => d * (400/13))
    .attr("x", 0)
    .attr("y", (d, i) => i * 20)
    .attr("fill", "lightblue");
}