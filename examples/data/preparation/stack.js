const parseDate = d3.timeParse("%Y");

d3.xml("data2.xml")
  .then(function (data) {
    const width = 500;
    const height = 200;
    const margin = { left: 50, right: 50, top: 40, bottom: 0 };

    // data is an XML document, parse document
    data = [].map.call(data.querySelectorAll("dat"), (d) => {
        return {
          date: parseDate(d.getAttribute("id")),
          top: +d.querySelector("top").textContent,
          middle: +d.querySelector("middle").textContent,
          bottom: +d.querySelector("bottom").textContent
        };
    });
  
    // Scales and Coord Generators
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);
    
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.top + d.middle + d.bottom)])
      .range([height, 0]);
    
    const categories = ["top", "middle", "bottom"];

    const stackGen = d3.stack().keys(categories);
    const areaGen = d3.area()
      .x((d) => xScale(d.data.date))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]));
    
    // Display chart
    var svg = d3.select("body")
      .append("svg")
      .attr("height", "100%")
      .attr("width", "100%");
    
    const chartGroup = svg.append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    
    const stacked = stackGen(data);

    chartGroup.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0,"+height+")")
      .call(d3.axisBottom(xScale));
    
    chartGroup.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale).ticks(5));
    
    // chartGroup.selectAll("path.area")
    //   .data(stacked)
    //   .join("path")
    //   .attr("class", "area")
    //   .attr("d", (d) => areaGen(d));

    chartGroup.selectAll("g.area")
      .data(stacked)
      .attr("class", "area")
      .join("path")
      .attr("class", "area")
      .attr("d", (d) => areaGen(d));
 });
