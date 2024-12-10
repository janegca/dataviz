function applyEach(){
  d3.selectAll("#eachSVG circle").each((d,i,nodes) => {
      if (i % 2 == 0) {
          nodes[i].setAttribute("fill", "pink");
      };
})};

function resetFill(){
  d3.selectAll("#eachSVG circle")
    .attr('fill', 'lightBlue');
};

function removeFill(){
  d3.selectAll("#eachSVG circle")
  .attr('fill', null);
}

function addStyle() {
  d3.selectAll("#styleExample .box")
    .style("border-radius", "15px");
};

function setRadii() {
  d3.selectAll("#setterExampleSVG circle")
    .attr("r", (d,i,nodes) => 10 + (10 * i));
}

// Add/Remove Class
function addClass() {
  d3.selectAll("#classedExampleSVG circle")
    .classed("lightblue", true);
  classedExampleButtonHandler = removeClass;
  d3.select("#classedExampleButton").text('Remove Class');
}
function removeClass() {
  d3.selectAll("#classedExampleSVG circle")
    .classed("lightblue", false);
  classedExampleButtonHandler = addClass;
  d3.select("#classedExampleButton").text('Add Class');
}
var classedExampleButtonHandler = addClass;

// Reverse Text
function reverseText() {
  let str = d3.select("#textContainer .text-box").text();
  str = str.split("").reverse().join("");
  d3.select("#textContainer .text-box").text(str);
}
