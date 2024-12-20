// radians to degrees = radiants x 180/Math.PI
// degrees to radians = degrees x Math.PI/180

// Draw the Chart (demo1 to 3)
function drawChart(id, col, angles, radii) {
  d3.select(id)
  .append("g")
  .attr("transform", "translate(100,100)");

  var arcGen = d3.arc()
    .innerRadius(radii[0])
    .outerRadius(radii[1])
    .startAngle(angles[0])    
    .endAngle(angles[1]);

  d3.select( id  + " g")
    .append("path")
    .attr("d", arcGen)
    .attr("fill", col)
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Pie Chart
function demo4() {
  d3.select("#demo4")
  .append("g")
  .attr("transform", "translate(100,100)");

  var data = [
    {startAngle: 0, endAngle: Math.PI/4},         //   0° -  45°
    {startAngle: Math.PI/4, endAngle: Math.PI/2}, //  45° -  90°
    {startAngle: Math.PI/2, endAngle: Math.PI},   //  90° - 180°
    {startAngle: Math.PI, endAngle: 2*Math.PI}    // 180° - 360°
  ];

  var arcGen = d3.arc()
    .innerRadius(0)
    .outerRadius(90);

  d3.select("#demo4 g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arcGen)
    .attr("fill", "pink")
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Using d3.pie()
function demo5() {
  d3.select("#demo5")
    .append("g")
    .attr("transform", "translate(100,100)");

  var angleGen = d3.pie();

  // Generates the angles based on portions
  // [1,1,1,1] - 4 equal slices
  // [4,] - splits 1/2 into 4 slices
  var data = angleGen([1,1,1,1,4,2,2,4]);

  var arcGen = d3.arc()
    .innerRadius(0)
    .outerRadius(90);

  d3.select("#demo5 g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arcGen)
    .attr("fill", "pink")
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Using d3.pie() with an array of named values
function demo6() {
  d3.select("#demo6")
  .append("g")
  .attr("transform", "translate(100,100)");

var input = [
  {name: "a", size: "1"},
  {name: "b", size: "1"},
  {name: "c", size: "1"},
  {name: "d", size: "1"},
  {name: "e", size: "4"},
  {name: "f", size: "2"},
  {name: "g", size: "2"},
  {name: "h", size: "4"}
];

var angleGen = d3.pie()
  .value((d) => d.size);

var data = angleGen(input);

var arcGen = d3.arc()
  .innerRadius(0)
  .outerRadius(90);

d3.select("#demo6 g")
  .selectAll("path")
  .data(data)
  .join("path")
  .attr("d", arcGen)
  .attr("fill", "pink")
  .attr("stroke", "gray")
  .attr("stroke-width", 1);
}

// Sort on input data before calling the arc generator
function demo7() {
  d3.select("#demo7")
  .append("g")
  .attr("transform", "translate(100,100)");

  // sort based data array values
  var angleGen = d3.pie()
    .sort((a,b) => a > b ? 1 : -1);

  var data = angleGen([1,1,1,1,4,2,2,4]);

  var arcGen = d3.arc()
    .innerRadius(0)
    .outerRadius(90);

  d3.select("#demo7 g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arcGen)
    .attr("fill", "lightsteelblue")
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Sort on a named value in the input
function demo8() {
  d3.select("#demo8")
  .append("g")
  .attr("transform", "translate(100,100)");

  var input = [
    {name: "a", size: "1"},
    {name: "b", size: "1"},
    {name: "c", size: "1"},
    {name: "d", size: "1"},
    {name: "e", size: "4"},
    {name: "f", size: "2"},
    {name: "g", size: "2"},
    {name: "h", size: "4"}
  ];

  // sort on a named values
  var angleGen = d3.pie()
    .value((d) => d.size)
    .sortValues((a,b) => a < b ? 1 : -1);

  var data = angleGen(input);

  var arcGen = d3.arc()
    .innerRadius(0)
    .outerRadius(90);

  d3.select("#demo8 g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arcGen)
    .attr("fill", "lightblue")
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Change start and end angles
function demo9() {
  d3.select("#demo9")
  .append("g")
  .attr("transform", "translate(100,100)");

  var input = [
    {name: "a", size: "1"},
    {name: "b", size: "1"},
    {name: "c", size: "1"},
    {name: "d", size: "1"},
    {name: "e", size: "4"},
    {name: "f", size: "2"},
    {name: "g", size: "2"},
    {name: "h", size: "4"}
  ];

  var angleGen = d3.pie()
    .startAngle(Math.PI / 4)
    .endAngle(7 * Math.PI / 4)
    .value((d) => d.size)
    .sortValues((a,b) => a < b ? 1 : -1);

  var data = angleGen(input);

  var arcGen = d3.arc()
    .innerRadius(0)
    .outerRadius(90);

  d3.select("#demo9 g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arcGen)
    .attr("fill", "aquamarine")
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Add padding between slices
function demo10() {
  d3.select("#demo10")
    .append("g")
    .attr("transform", "translate(100,100)");

 var input = [
    {name: "a", size: "1"},
    {name: "b", size: "1"},
    {name: "c", size: "1"},
    {name: "d", size: "1"},
    {name: "e", size: "4"},
    {name: "f", size: "2"},
    {name: "g", size: "2"},
    {name: "h", size: "4"}
  ];

  var angleGen = d3.pie()
    .startAngle(Math.PI / 4)
    .endAngle(7 * Math.PI / 4)
    .padAngle(.05)
    .value((d) => d.size)
    .sortValues((a,b) => a < b ? 1 : -1);

  var data = angleGen(input);

  var arcGen = d3.arc()
    .innerRadius(50)
    .outerRadius(90);

  d3.select("#demo10 g")
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arcGen)
    .attr("fill", "pink")
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Adding colour scale
function demo11() {
  d3.select("#demo11")
    .append("g")
    .attr("transform", "translate(100,100)");
    
  var input = [
      {name: "a", size: "1"},
      {name: "b", size: "1"},
      {name: "c", size: "1"},
      {name: "d", size: "1"},
      {name: "e", size: "4"},
      {name: "f", size: "2"},
      {name: "g", size: "2"},
      {name: "h", size: "4"}
  ];
  
  var angleGen = d3.pie()
        .startAngle(Math.PI / 4)
        .endAngle(7 * Math.PI / 4)
        .padAngle(.05)
        .value((d) => d.size)
        .sortValues((a,b) => a < b ? 1 : -1);;

  var data = angleGen(input);

  var arcGen = d3.arc()
    .innerRadius(50)
    .outerRadius(90);

  var colorScale = d3.scaleSequential(d3.interpolate("pink", "lightsteelblue"))
    .domain([1,4]);

  d3.select("#demo11 g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", arcGen)
    .attr("fill", (d) => colorScale(d.value))
    .attr("stroke", "gray")
    .attr("stroke-width", 1);
}

// Adding labels
function demo12() {
  d3.select("#demo12")
  .append("g")
  .attr("transform", "translate(100,100)");

  var input = [
      {name: "a", size: "1"},
      {name: "b", size: "1"},
      {name: "c", size: "1"},
      {name: "d", size: "1"},
      {name: "e", size: "4"},
      {name: "f", size: "2"},
      {name: "g", size: "2"},
      {name: "h", size: "4"}
  ];

  var angleGen = d3.pie()
        .startAngle(Math.PI / 4)
        .endAngle(7 * Math.PI / 4)
        .padAngle(.05)
        .value((d) => d.size)
        .sortValues((a,b) => a < b ? 1 : -1);;

  var data = angleGen(input);

  var arcGen = d3.arc()
    .innerRadius(50)
    .outerRadius(90);

  var colorScale = d3.scaleSequential(d3.interpolate("pink", "lightsteelblue"))
    .domain([1,4]);

  d3.select("#demo12 g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", arcGen)
    .attr("fill", (d) => colorScale(d.value))
    .attr("stroke", "gray")
    .attr("stroke-width", 1);

  d3.select("#demo12")
    .selectAll("newText")
    .data(data)
    .join("text")
    //  .attr("x", d => d3.pointRadial((d.startAngle + d.endAngle  - 0.1)/2 , (50+90)/2)[0])
    //  .attr("y", d => d3.pointRadial((d.startAngle + d.endAngle  - 0.1)/2 , (50+90)/2)[1])
    .attr("text-anchor", "middle")
    .text(d => d.data.name)
    // centroid not quite as neatly placed as direct calculation
    .attr("x", (d) => arcGen.centroid(d)[0])
    .attr("y", (d) => arcGen.centroid(d)[1])
    .attr("font-size", "15px")
    .attr("fill", "blue")
    .attr("transform","translate(100,100)");
}

// Call functions
drawChart("#demo1", "pink", [Math.PI/4, 3*Math.PI/4], [0,90]);  // slice
drawChart("#demo2", "pink", [0,2*Math.PI], [0,90]);             // circle
drawChart("#demo3", "pink", [0,2*Math.PI], [70,90]);            // donut
demo4();  // pie from angle array
demo5();  // input array
demo6();  // named values
demo7();  // sorted input
demo8();  // sort on a named value
demo9();  // changed start and end angles
demo10(); // add padding between slices
demo11(); // adding a color scale
demo12(); // adding labels