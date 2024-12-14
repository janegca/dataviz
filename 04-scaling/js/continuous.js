// Scaling data to values for circle radii
const data = [
  {"state": "California","population": 134278 },
  {"state": "Florida",   "population": 32190 },
  {"state": "Washington","population": 21112 },
  {"state": "New York","population": 89503 },
  {"state": "Texas","population": 23548 }
];

const rScale = d3.scaleLinear()
  .domain([0,140000])   // population data range
  .range([1,30]);       // radii range

const xScale = d3.scaleLinear()
  // position on x-axis
  .domain([0,4])      // number of states
  .range([50,550]);   // x-coords range
xScale.clamp(true);   // only allow values within the range

d3.select("#homeless1")   
  // create, position, and style visual elements
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d,i) => xScale(i))
  .attr("cy", 50)
  .attr("r", (d,i) => rScale(d.population))
  .attr("fill", "pink");

d3.select("#homeless1")
  // create and position element labels
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text((d) => d.state)
  .attr('x', (d,i) => xScale(i))
  .attr('y', 95)
  .attr('text-anchor', 'middle');

// Scaling Colour
const cScale = d3.scaleLinear()
      .domain([0,140000])
      .range(["yellow", "red"]);  

d3.select("#homeless2")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d,i) => xScale(i))
  .attr("cy", 50)
  .attr("r", (d) => rScale(d.population))
  .attr("fill", (d) => cScale(d.population));

d3.select("#homeless2")
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text((d) => d.state)
  .attr('x', (d,i) => xScale(i))
  .attr('y', 95)
  .attr('text-anchor', 'middle');
