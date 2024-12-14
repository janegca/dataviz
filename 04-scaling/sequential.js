var colorA = "purple", colorB = "orange";

function drawScale(id, interpolator) {
  var data = Array.from(Array(100).keys());

  var cScale = d3.scaleSequential()
      .interpolator(interpolator)
      .domain([0,99]);

  var xScale = d3.scaleLinear()
      .domain([0,99])
      .range([0, 580]);

  var u = d3.select("#" + id)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => Math.floor(xScale(d)))
      .attr("y", 0)
      .attr("height", 40)
      .attr("width", (d) => {
          if (d == 99) {
              return 6;
          }
          return Math.floor(xScale(d+1)) - Math.floor(xScale(d)) + 1;
       })
      .attr("fill", (d) => cScale(d));
}

drawScale("seq1", d3.interpolate(colorA, colorB));

drawScale("seq20", d3.interpolateRgb(colorA, colorB));
drawScale("seq21", d3.interpolateRgbBasis([colorA, colorB]));
drawScale("seq22", d3.interpolateRgbBasisClosed([colorA, colorB]));

drawScale("seq23", d3.interpolateHsl(colorA, colorB));
drawScale("seq24", d3.interpolateHslLong(colorA, colorB));
drawScale("seq25", d3.interpolateLab(colorA, colorB));
drawScale("seq26", d3.interpolateHcl(colorA, colorB));
drawScale("seq27", d3.interpolateHclLong(colorA, colorB));

drawScale("seq28", d3.interpolateCubehelix(colorA, colorB));
drawScale("seq29", d3.interpolateCubehelixLong(colorA, colorB));