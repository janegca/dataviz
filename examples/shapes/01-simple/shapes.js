// data used to position and size shapes
const dataArray = [5, 11, 18];

const svg = d3.select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

// Rectangles 
svg.selectAll("rect")
  .data(dataArray)
  .join("rect")
  .attr("fill", "lightsteelblue")
  .attr("width", "50")
  .attr("height", (d) => d * 15)
  .attr("x", (d,i) => i * 60)
  .attr("y", (d) => 300 - d * 15);
  
// Circles 
let newX = 200;
svg.selectAll("circle.first")
  .data(dataArray)
  .join("circle")
  .attr("class", "first")
  .attr("cx", (d, i) => {
    newX += (d * 3) + (i * 20);
    return newX;
  })
  .attr("cy", "100")
  .attr("r", (d) => d * 3);

// Ellipses
newX = 450;

svg.selectAll("ellipse")
  .data(dataArray)
  .join("ellipse")
  .attr("cx", (d, i) => {
    newX += (d * 3) + (i * 20);
    return newX;
  })
  .attr("cy", "100")
  .attr("rx", (d) => d * 3)
  .attr("ry", 30);

// Lines
newX = 700;

svg.selectAll("line")
  .data(dataArray)
  .join("line")
  // -- 1 way to add style
  // 'attr' adds a direct property to the element
  //.attr("stroke", "blue")
  //.attr("stroke-width", "2")
  // -- 2nd way to add style
  // 'style' adds an inline 'style' to the element
  .style("stroke", "green")
  // .style("stroke-width", "2")
  .attr("stroke", "blue")   // inline or external 'style' takes precedence
  // -- 3rd way - external .css file; both this and inline style take
  //              take precedence over 'attr' property
  .attr("x1", newX)
  .attr("y1", (d,i) => 80 + (i*20))
  .attr("x2", (d) => newX + (d * 15))
  .attr("y2", (d,i) => 80 + (i*20));

// --- ADDING TEXT MANUALLY ---
// Text position defaults to bottom-left = (0,0)
// Letters are all individual shapes that can be manipulated
// 'text-anchor' - aligns the text horizontally
// 'dominant-baseline' - aligns the text vertically
svg.append("text")
  .attr("x", newX)
  .attr("y", 150)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", "2")
  .attr("font-size", 30)
  .attr("text-anchor", "start")
  .attr("dominant-baseline", "middle")
  .text("start");

svg.append("text")
  .attr("x", newX)
  .attr("y", 180)
  .attr("fill", "blue")
  .attr("stroke", "none")
  .attr("font-size", 30)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .text("middle");

svg.append("text")
  .attr("x", newX)
  .attr("y", 210)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("font-size", 30)
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")
  .text("end");

svg.append("line")
  .attr("x1", newX)
  .attr("y1", 150)
  .attr("x2", newX)
  .attr("y2", 210);

// --- ADDING TEXT DYNAMICALLY ---
const textArray = ['start', 'middle', 'end'];

svg.append("text")
  .selectAll("tspan")
  .data(textArray)
  .join("tspan")
  .attr("x", newX)
  .attr("y", (d,i) => 250 + (i*30))
  .attr("fill", "none")
  .attr("stroke", "green")
  .attr("stroke-width", "2")
  .attr("font-size", 30)
  .attr("text-anchor", "start")
  .attr("dominant-baseline", "middle")
  .text((d) => d);

  svg.append("line")
  .attr("x1", newX)
  .attr("y1", 250)
  .attr("x2", newX)
  .attr("y2", 310);
