function addStroke() {
  d3.select("g")
    .selectAll("circle")
    .attr("stroke", "gray")
    .attr("stroke-width", "3");
}

function removeStroke(){
  d3.select("g")
    .selectAll('circle')
    .attr("stroke-width","0")
}

function colorThemBlue(){
  d3.select("#groupSVG")
    .selectAll("circle")
      .attr('fill', 'lightBlue');
}

function colorThemPink(){
  d3.select("#groupSVG")
    .selectAll("circle")
      .attr('fill', 'pink');
}

function filterOnRadius() {
  d3.selectAll("#filterOnRadius circle")
      .filter((d,i,nodes) => nodes[i].getAttribute("r") >= 20)
      .attr('fill', 'lightBlue');
}


 
