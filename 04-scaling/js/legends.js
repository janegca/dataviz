/*
    Uses Susie Lu's 'd3-legend' library; which is not
    part of the standard d3.js package
*/
function demo1() {
  var svg = d3.select("#demo1");

  /*** Draw X-Axis ***/
  var xScale = d3.scaleLinear()
    .domain([0, 9])
    .range([25, 475]);

  var xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", "translate(0,80)")
    .call(xAxis);

  /*** Create color scale ***/
  var colorScale = d3.scaleLinear()
    .domain([0, 2500])
    .range(["red", "blue"]);

  /*** Draw data points using color scale ***/
  svg.selectAll("circle")
    .data([300, 580, 900, 1200, 1500, 1800, 2100, 2400])
    .join("circle")
    .attr("cx", (d, i) => xScale(i + 1))
    .attr("cy", 50)
    .attr("r", 13)
    .attr("fill", (d) => colorScale(d));

  // Create Legend
  var legend = d3.legendColor()
    .shape("cirlce")
    .shapePadding(4)
    .title("Colour Legend")
    .labelFormat(d3.format(".0f"))
    .scale(colorScale)
    .cells(3);

  svg.append("g")
    .attr("transform", "translate(485,20)")
    .call(legend);
}
demo1();

/** --- Demo # 3 --- **/
function demo3() {
  var svg = d3.select("#demo3");

  /*** Draw X-Axis ***/
  var xScale = d3.scaleLinear()
    .domain([0, 9])
    .range([25, 475]);

  var xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", "translate(0,80)")
    .call(xAxis);

  /*** Create color scale ***/
  var colorScale = d3.scaleQuantize()
    .domain([0, 2500])
    .range(["one", "two", "three", "four"]);

  /*** Draw data points using color scale ***/
  svg.selectAll("circle")
    .data([300, 580, 900, 1200, 1500, 1800, 2100, 2400])
    .enter()
    .append("circle")
    .attr("cx", (d, i) => xScale(i + 1))
    .attr("cy", 50)
    .attr("r", 13);

  // Assign circle color as a 'class' name
  svg.selectAll("circle")
    .each((d, i, nodes) => {
      nodes[i].classList.add(colorScale(d));
    });

  /*** Create and draw the legend 
   *    useClass assigns a class name to each symbol
   *    and so sets the 'colour' for the fill
   * ***/
  var legend = d3.legendColor()
    .scale(colorScale)
    .useClass(true);

  svg.append("g")
    .attr("transform", "translate(500,10)")
    .call(legend);
}
demo3();