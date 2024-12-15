const dataArray = [
  { x: 5, y: 5 },
  { x: 10, y: 15 },
  { x: 20, y: 7 },
  { x: 30, y: 18 },
  { x: 40, y: 10 }
];

const interpolateTypes = [
  d3.curveLinear,
  d3.curveNatural,
  d3.curveStep,
  d3.curveBasis,
  d3.curveBundle,
  d3.curveCardinal
];

const svg = d3.select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

for (let j = 0; j < 6; j++) {
  // a line generator
  let lineGen = d3.line()
    .x((d) => d.x * 6)
    .y((d) => d.y * 4)
    .curve(interpolateTypes[j]);
  
  let shiftX = j * 250;
  let shiftY = 0;
  let chartGrp = svg.append("g")
    .attr("class", "group" + j)
    .attr("transform", "translate("+shiftX+",0)");

  chartGrp.append("path")
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("d", lineGen(dataArray));

  chartGrp.selectAll("circle.grp" + j)
    .data(dataArray)
    .join("circle")
    .attr("class", (d, i) => "grp" + i)
    .attr("cx", (d) => d.x * 6)
    .attr("cy", (d) => d.y * 4)
    .attr("r", "2");
}