// Create a x-axis with tick marks

// the x-axis is contained by a viewbox 580 px wide
//  and sized to xpos 25 thru 555
var xScale = d3.scaleLinear()
  .domain([0, 5])
  .range([25, 555]);  

// create the x-axis with ticks underneath
var xAxis = d3.axisBottom(xScale);
var svg = d3.select("#axisDemo1");

// add the svg elment to a group and move it down
svg.append("g")
    .attr("transform", "translate(0,60)")
    .call(xAxis);

// add a title under the x-axis
svg.append("text")
    .attr("transform", "translate(300,95)")
    .style("text-anchor", "middle")
    .attr("fill", "black")
    .text("x-axis");

/* Suggesting # of axis ticks 
    can suggest how many ticks to use but D3 will use
    what it thinks best
*/
xAxis = d3.axisBottom(xScale)
          .ticks(7);

d3.select("#axisDemo2")
    .append("g")
    .attr("transform", "translate(0,75)")
    .call(xAxis);
    
// Only display ticks at indicated points
xAxis = d3.axisBottom(xScale)
          .tickValues([1,3,4]);

d3.select("#axisDemo3")
  .append("g")
  .attr("transform", "translate(0,75)")
  .call(xAxis);

// Size and format ticks
var array = d3.range(1,2,0.25);

xAxis = d3.axisBottom(xScale)
          .tickValues(array)
          .tickFormat(d3.format(".2f"));

d3.select("#axisDemo4")
  .append("g")
  .attr("transform", "translate(0,75)")
  .call(xAxis);

// Chaning the tick length
xAxis = d3.axisBottom(xScale)
          .tickValues([1,3,4])
          .tickSize([-50])      // neg = draw in opposite direction
          .tickFormat(d3.format(".0f"));

d3.select("#axisDemo5")
  .append("g")
  .attr("transform", "translate(0,75)")
  .call(xAxis);

// Only change Inner or Outer tick lengths
xAxis = d3.axisBottom(xScale)
      .tickValues([1,3,4])
      .tickSizeInner([-50])   // only the inner ticks are lengthened
      .tickFormat(d3.format(".0f"));

d3.select("#axisDemo6")
    .append("g")
    .attr("transform", "translate(0,75)")
    .call(xAxis);

// Change spacing between the tick and its label
xAxis = d3.axisBottom(xScale)
      .tickValues([1,3,4])
      .tickPadding([10])
      .tickFormat(d3.format(".0f"));

  d3.select("#axisDemo7")
    .append("g")
    .attr("transform", "translate(0,75)")
    .call(xAxis);
    
// Change the tick line style
xAxis = d3.axisBottom(xScale)
          .tickValues([1,3,4])
          .tickSizeInner([-50])
          .tickFormat(d3.format(".0f"));

d3.select("#axisDemo8")
  .append("g")
  .attr("transform", "translate(0,75)")
  .call(xAxis);

d3.select("#axisDemo8")
  .selectAll(".tick line")
  .attr("stroke-dasharray", "2,2");