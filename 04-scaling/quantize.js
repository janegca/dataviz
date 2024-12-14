var xScale = d3.scaleLinear()
  .domain([0,100])
  .range([25, 555]);

function drawScale(id, cScale) {
  let svg = d3.select("#" + id);

  var xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", "translate(0,70)")
    .call(xAxis);

  var ticks = [].map.call(d3.range(3), (d) => 100 / 3 * (d + 1));

  var topAxis = d3.axisTop(xScale)
    .tickValues(ticks);

  svg.append("g")
    .attr("transform", "translate(0,40)")
    .call(topAxis);

  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d))
    .attr("y", 40)
    .attr("width", 3)
    .attr("height", 30)
    .attr("fill", (d) => cScale(d));
}

// using a Quantize Scale
let data = [].map.call(d3.range(100), (d) => Math.random() * 80);
let colorScale = d3.scaleQuantize()
  .domain([0,100])
  .range(["red", "blue", "green"]);

drawScale("demo1", colorScale);

// using a Quantile Scale
data = [].map.call(d3.range(100), (d) => Math.random() * 80);
colorScale = d3.scaleQuantile()
  .domain(data)
  .range(["red", "blue", "green"]);

drawScale("demo2", colorScale);

// using a Threshold
data = [].map.call(d3.range(100), (d) => Math.random() * 80);
colorScale = d3.scaleThreshold()
  .domain([40,60])
  .range(["red", "blue", "green"]);
drawScale("demo3", colorScale)