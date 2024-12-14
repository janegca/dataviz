// Demo 1 - Ordinal scale used to map colours to specific years
var svg = d3.select("#demo1");

var data = [
    {"date": "January 1, 1970", "event": "A"},
    {"date": "April 1, 1970", "event": "B"},
    {"date": "July 1, 1970", "event": "C"},
    {"date": "October 1, 1970", "event": "D"},
    {"date": "January 1, 1971", "event": "E"},
    {"date": "April 1, 1971", "event": "F"},
    {"date": "July 1, 1971", "event": "G"},
    {"date": "October 1, 1971", "event": "H"},
    {"date": "January 1, 1972", "event": "I"},
    {"date": "April 1, 1972", "event": "J"},
    {"date": "July 1, 1972", "event": "K"},
    {"date": "October 1, 1972", "event": "L"},
    {"date": "January 1, 1973", "event": "M"},
    {"date": "April 1, 1973", "event": "N"},
    {"date": "July 1, 1973", "event": "O"},
    {"date": "October 1, 1973", "event": "P"}
];

var parseTime = d3.timeParse("%B %d, %Y");

var dates = [];
for (let obj of data) {
    dates.push(parseTime(obj.date));
}

var domain = d3.extent(dates);
domain = [d3.timeYear.floor(dates[0]), d3.timeYear.ceil(domain[1])];

var xScale = d3.scaleTime()
    .domain(domain)
    .range([25, 555]);

var xAxis = d3.axisBottom(xScale)
    .ticks(d3.timeYear);

svg.append("g")
   .attr("transform", "translate(0,70)")
   .call(xAxis);

var years = d3.map(dates, (d) => d.getFullYear()).keys();
console.log(years);

var colorScale = d3.scaleOrdinal()
    .domain(years)
    .range(["red", "orange", "green", "blue"]);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(parseTime(d.date)))
    .attr("y", 40)
    .attr("width", 10)
    .attr("height", 30)
    .attr("fill", (d) => colorScale(parseTime(d.date).getFullYear()));

// Demo 2 - Band scale 
var svg = d3.select("#demo2");

var colors = ["red", "orange", "green", "blue"];

var xScale = d3.scaleBand()
    .domain(colors)
    .range([25, 555]);

var xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0,70)")
   .call(xAxis);

svg.selectAll("rect")
    .data(colors)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d))
    .attr("y", 40)
    .attr("width", xScale.bandwidth())
    .attr("height", 30)
    .attr("fill", (d) => d);

// Adding padding to a band scale
var svg = d3.select("#demo3");

var colors = ["red", "orange", "green", "blue"];

var xScale = d3.scaleBand()
    .domain(colors)
    .range([25, 555])
    .paddingOuter([.25])
    .paddingInner([.5]);

var xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0,70)")
   .call(xAxis);

svg.selectAll("rect")
    .data(colors)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d))
    .attr("y", 40)
    .attr("width", (d) => xScale.bandwidth())
    .attr("height", 30)
    .attr("fill", (d) => d);

// Point scales
var svg = d3.select("#demo4");

var colors = ["red", "orange", "green", "blue"];

var xScale = d3.scalePoint()
    .domain(colors)
    .range([25, 555]);

var xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0,70)")
   .call(xAxis);

svg.selectAll("circle")
    .data(colors)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d))
    .attr("cy", 40)
    .attr("r", 20)
    .attr("fill", (d) => d);

