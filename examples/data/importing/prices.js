const parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("prices.csv", (d) => { // accessor
  return {
    month: parseDate(d.month),
    price: Number(d.price.trim().slice(1))
  };
})
.then(function (data) { // callback
  const height = 300;
  const width = 500;

  const max = d3.max(data, (d) => d.price);
  const minDate = d3.min(data, (d) => d.month);
  const maxDate = d3.max(data, (d) => d.month);

  const yScale = d3.scaleLinear()
    .domain([0,max])
    .range([height, 0]);
  
  const xScale = d3.scaleTime()
    .domain([minDate,maxDate])
    .range([0, width]);
  
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Construct chart
  const svg = d3.select("body")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
  
  const margin = {
    left: 50,
    right: 50,
    top: 40,
    botton: 0
  };

  const chartGroup = svg.append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  const lineGen = d3.line()
    .x((d) => xScale(d.month))
    .y((d) => yScale(d.price));
  
  // Draw chart
  chartGroup.append("path").attr('d', lineGen(data));
  chartGroup.append('g')
    .attr("class", "x axis")
    .attr("transform", "translate(0,"+height+")")
    .call(xAxis);
  chartGroup.append("g").attr("class", "y axis").call(yAxis);
})

