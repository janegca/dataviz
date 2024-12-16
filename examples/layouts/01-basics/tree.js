const width = 500;
const height = 200;
const margin = { left: 50, right: 50, top: 40, bottom: 0 };
const tree = d3.tree().size([width, height]);

const svg = d3.select("body")
  .append("svg").attr("width", "100%").attr("height", "100%");
const chartGroup = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("treeData.json", (d) => {
  
}).then(function (data) {
  const root = d3.hierarchy(data[0]);
  tree(root);

  chartGroup.selectAll("circle")
    .data(root.descendants())
    .join("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 5);
  
  // lines will be drawn upward or right to left
  chartGroup.selectAll("path")
    .data(root.descendants().slice(1))
    .join("path")
    .attr("class", "link")
    //    .attr("d", (d) =>
    //      "M" + d.x + "," + d.y + "L" + d.parent.x + "," + d.parent.y);
    .attr("d", (d) => // curved lines
      "M" + d.x + "," + d.y +
      "C" + d.x + "," + (d.parent.y + d.y) / 2 + " " +
      d.parent.x + "," + (d.y + d.parent.y) / 2 + " " +
      d.parent.x + "," + d.parent.y);
  

  console.log(root);
});


