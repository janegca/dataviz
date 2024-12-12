// Function to display text
function drawText(id, data) {
  d3.select(id)
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("y", (d,i) => i * 20 + 20)
    .attr("x", 10)
    .text((d) => d.letter + " " + d.number + " " + d.color);
}

// Import a .csv file
d3.csv("data/sample.csv")
  .then(function(data) {
    drawText("#csvDemo", data);
});
 
// Import a JSON file
d3.json("data/sample.json")
.then(function(data) {

    // data is an object, convert to array.
    data = [data[0], data[1]];

    drawText("#jsonDemo", data);
});
 
// Import an HTML file
d3.html("data/sample.html")
  .then(function(data) {
    // data is an HTML document, parse document
    data = [].map.call(data.querySelectorAll("p"), function(node) {
        let tokens = node.textContent.split(" ");
        return {
            letter: tokens[0],
            number: tokens[1],
            color: tokens[2]
        };
    });

    drawText("#htmlDemo", data);
  });

// Import a text file
d3.text("data/sample.txt")
  .then(function(data) {
      // data is a string
      data = data.split("\n");

      data = data.map((str) => {
          let tokens = str.split(" ");
          return {
              letter: tokens[0],
              number: tokens[1],
              color: tokens[2]
          };
    });

    drawText("#textDemo", data);
  });  
 
// Import an SVG File
d3.svg("data/sample.svg")
  .then(function(data) {
      var oldChild = document.getElementById("svgDemo");
      document.getElementById("svgDemo").parentNode.replaceChild(data.documentElement, oldChild);
  });

// Import a PNG File
d3.image("data/sample.png")
  .then(function(data) {
      let canvas = document.getElementById("imageDemo");
      let ctx = canvas.getContext('2d');
      ctx.drawImage(data, 0,0);
  });