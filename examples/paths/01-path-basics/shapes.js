const dataArray = [5,11,18];

const svg = d3.select("body")
  .append("svg").attr("height", "100%").attr("width", "100%");

svg.selectAll("rect")
      .data(dataArray)
      .join("rect")
      .attr("height",(d) => d*15)
      .attr("width","50")
      .attr("fill","pink")
      .attr("x", (d,i) =>60*i)
      .attr("y",(d,i) =>300-(d*15));

var newX = 300;
svg.selectAll("circle.first")
  .data(dataArray)
  .join("circle")
  .attr("class","first")
  .attr("cx", (d,i) => {newX+=(d*3)+(i*20); return newX;})
  .attr("cy","100")
  .attr("r", (d) => d*3);

var newX = 600;
svg.selectAll("ellipse")
  .data(dataArray)
  .join("ellipse")
  .attr("class","second")
  .attr("cx", (d,i) => {newX+=(d*3)+(i*20); return newX;})
  .attr("cy","100")
  .attr("rx", (d) => d*3)
  .attr("ry","30");

var newX = 900;
svg.selectAll("line")
  .data(dataArray)
  .join("line")
  .attr("x1",newX)
  .attr("stroke-width","2")
  .attr("y1", (d,i) => 80+(i*20))
  .attr("x2", (d) => newX+(d*15))
  .attr("y2", (d,i) => 80+(i*20));

var textArray = ['start','middle','end'];
svg.append("text").selectAll("tspan")
    .data(textArray)
    .enter().append("tspan")
      .attr("x",newX)
      .attr("y", (d,i) => 150 + (i*30))
      .attr("fill","none")
      .attr("stroke","blue")
      .attr("stroke-width","2")
      .attr("dominant-baseline","middle")
      .attr("text-anchor","start")
      .attr("font-size","30")
      .text( (d) => d);

svg.append("line")
  .attr("x1",newX)
  .attr("y1","150")
  .attr("x2",newX)
  .attr("y2","210");
