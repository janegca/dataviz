const dataArray = [5, 11, 18];
const dataDays = ["Mon", "Wed", "Fri"];

const rainbow = d3.scaleSequential(d3.interpolateRainbow)
  .domain([0, 10]);
  
const rainbow2 = d3.scaleSequential(d3.interpolateRainbow)
  .domain([0, 3]);

// Using a pre-defined color scheme
const colourScheme = d3.scaleOrdinal(d3.schemePastel1);

// const xScale = d3.scaleOrdinal()
//   .domain(dataDays)
//   .range([25, 85, 145]);

// const xScale = d3.scalePoint()
//   .domain(dataDays)
//   .range([0,170]);  // pixels

// easier to use with bar charts
const xScale = d3.scaleBand()
  .domain(dataDays)
  .range([0, 170])
  .paddingInner(0.1176);  // % of chart dedicated to whitespace

const xAxis = d3.axisBottom(xScale);

const svg = d3.select("body")
  .append("svg").attr("height", "100%").attr("width", "100%");

svg.selectAll("rect")
  .data(dataArray)
  .join("rect")
  .attr("height",(d,i)=> d*15)
  .attr("width","50")
  .attr("fill",(d,i) => rainbow(i))
  .attr("x", (d,i) => 60*i)
  .attr("y", (d,i) => 300-(d*15));

svg.append('g')
  .attr("class", "x axis hidden")
  .attr("transform", "translate(0,300)")
  .call(xAxis);

let newX = 300;
svg.selectAll("circle.first")
  .data(dataArray)
  .join("circle")
  .attr("class", "first")
  .attr("fill", (d,i) => rainbow2(i))
  .attr("cx", (d, i) => {
    newX += (d * 3) + (i * 20);
    return newX;
  })
  .attr("cy","100")
  .attr("r", (d) => d*3);

newX = 600;
svg.selectAll("ellipse")
  .data(dataArray)
  .join("ellipse")
  .attr("class", "second")
  .attr("fill", (d,i) => colourScheme(i) )
  .attr("cx", (d, i) => {
    newX += (d * 3) + (i * 20);
    return newX;
  })
  .attr("cy","100")
  .attr("rx",(d) => d*3)
  .attr("ry","30");

newX = 900;
svg.selectAll("line")
  .data(dataArray)
  .join("line")
  .attr("x1",newX)
  .attr("stroke-width","2")
  .attr("y1", (d,i) => 80+(i*20))
  .attr("x2", (d) => newX+(d*15))
  .attr("y2", (d,i) => 80+(i*20));

let textArray = ['start','middle','end'];
svg.append("text").selectAll("tspan")
  .data(textArray)
  .join("tspan")
  .attr("x",newX)
  .attr("y",(d,i) => 150 + (i*30))
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
