// Handle dates and x-axis
var data = [
  {"date": "Apr 1, 1970", "event": "A"},
  {"date": "Jun 15, 1971", "event": "B"},
  {"date": "Mar 30, 1972", "event": "C"},
  {"date": "Jan 1, 1973", "event": "D"},
  {"date": "Jun 15, 1973", "event": "E"}
];

// %b - abbrev. month name
// %d - day number
// %Y - 4-digit year
var parseTime = d3.timeParse("%b %d, %Y");

var dates = [];
for (let obj of data) {
    dates.push(parseTime(obj.date));
}

// get min/max date values
var domain = d3.extent(dates);

var xScale = d3.scaleTime()
      .domain(domain)
      .range([25, 555]);

var xAxis = d3.axisBottom(xScale);


// Display date scale
function drawDemo1() {

  var svg = d3.select("#dateDemo1");

  svg.append("g")
      .attr("transform", "translate(0,60)")
      .call(xAxis);
}
drawDemo1();

// Limit ticks
function drawDemo2() {

  var svg = d3.select("#dateDemo2");

  svg.append("g")
      .attr("transform", "translate(0,60)")
      .call(xAxis.ticks(d3.timeYear));
}
drawDemo2();

// Expand the Domain
function drawDemo3() {
  // use floor() and ceil() vs min/max
  domain = [d3.timeYear.floor(domain[0]), d3.timeYear.ceil(domain[1])];

  var xScale = d3.scaleTime()
        .domain(domain)
        .range([25, 555]);

  var xAxis = d3.axisBottom(xScale);

  var svg = d3.select("#dateDemo3");

  svg.append("g")
      .attr("transform", "translate(0,60)")
      .call(xAxis.ticks(d3.timeYear));
}
drawDemo3();

// Show ticks for Months along with Year ticks and add axis label
function drawDemo4() {
  domain = [d3.timeYear.floor(domain[0]), d3.timeYear.ceil(domain[1])];

  var xScale = d3.scaleTime()
        .domain(domain)
        .range([25, 555]);

  var xAxis = d3.axisBottom(xScale);

  var svg = d3.select("#dateDemo4");

  svg.append("g") // add month ticks
      .attr("transform", "translate(0,60)")
      .call(xAxis.ticks(d3.timeMonth));

  svg.selectAll(".tick text").remove();   // remove month names

  svg.append("g") // add year ticks
      .attr("transform", "translate(0,60)")
      .call(xAxis.ticks(d3.timeYear));

  // Draw the axis label
  svg.append("text")
      .attr("transform", "translate(300,95)")
      .style("text-anchor", "middle")
      .attr("fill", "black")
      .text("Dates");
}
drawDemo4();

// Show data points with tool tip feature
function drawDemo5() {
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  
  var domain = d3.extent(dates);
  domain = [d3.timeYear.floor(domain[0]), d3.timeYear.ceil(domain[1])];

  var xScale = d3.scaleTime()
        .domain(domain)
        .range([25, 555]);

  var xAxis = d3.axisBottom(xScale);

  var svg = d3.select("#dateDemo5");

  svg.append("g")
      .attr("transform", "translate(0,60)")
      .call(xAxis.ticks(d3.timeMonth));

  svg.selectAll(".tick text").remove();

  svg.append("g")
      .attr("transform", "translate(0,60)")
      .call(xAxis.ticks(d3.timeYear));

  svg.append("text")
      .attr("transform", "translate(300,95)")
      .style("text-anchor", "middle")
      .attr("fill", "black")
      .text("Dates");

  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 7)
    .attr("fill", "lightsteelblue")
    .attr("cx", (d) => xScale(parseTime(d.date)))
    .attr("cy", 50)
    .on("mouseover", function(event, d) {
      tooltip.transition()
          .duration(200)
          .style("opacity", .9);
      tooltip.html(d.date)  // text to display
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
      tooltip.transition()
          .duration(500)
          .style("opacity", 0);
    });
}
drawDemo5();