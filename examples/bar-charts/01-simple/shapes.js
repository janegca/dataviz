const dataArray = [5, 11, 18];

const svg = d3.select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

svg.selectAll("rect")
  .data(dataArray)
  .join("rect")
  .attr("fill", "lightsteelblue")
  .attr("width", "50")
  .attr("height", (d) => d * 15)
  .attr("x", (d,i) => i * 60)
  .attr("y", (d) => 300 - d * 15);