function angles() {
    //Visual Illustration of Angles
    var pointRadialArr = [8];
    var textArr = [
        {text: "0", x: "", y: ""},
        {text: "π/4", x: "", y: ""},
        {text: "π/2", x: "", y: ""},
        {text: "3π/4", x: "", y: ""},
        {text: "π", x: "", y: ""},
        {text: "5π/4", x: "", y: ""},
        {text: "3π/2", x: "", y: ""},
        {text: "7π/4", x: "", y: ""}];

    for(let i = 0; i < 8; i += 1){
        pointRadialArr[i] = d3.pointRadial( (i / 4) * Math.PI, 60);
        textArr[i].x = d3.pointRadial( (i / 4) * Math.PI, 80)[0];
        textArr[i].y = d3.pointRadial( (i / 4) * Math.PI, 80)[1];
    }
    d3.select("#angles") // adds the grey circle
    	.append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 60)
        .attr("fill", "none")
        .attr("stroke", "grey")
        .attr("stroke-width", "1.5");

    d3.select("#angles") // adds the dots
    	.selectAll("newCircle")
        .data(pointRadialArr)
        .enter()
        .append("circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1])
        .attr("r", 2.5)
        .attr("transform", "translate(100,100)");

    d3.select("#angles") //adds the tags
        .selectAll("text")
        .data(textArr)
        .enter()
        .append("text")
        .text(d => d.text)
        .attr("x", d => d.x)
        .attr("y", d=> d.y)
        .attr("font-size", "15px")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(100,100)");
}

function radii() {
  //Visual Illustration of different Radii
  var pointRadialArr = [4];
  var textArr = [4];
  for(let i = 0; i < 4; i += 1){
      pointRadialArr[i] = d3.pointRadial( (i / 2) * Math.PI, i * 20 + 20);
      textArr[i] = { text: "", x: "", y: "" };
      textArr[i].text = i  * 20 + 20;
      textArr[i].x = d3.pointRadial( (i / 2) * Math.PI, i * 20 + 30)[0];
      textArr[i].y = d3.pointRadial( (i / 2) * Math.PI, i * 20 + 30)[1];
  }
  console.log(textArr);
  d3.select("#radii") // adds the grey circles
      .selectAll("circle")
      .data(textArr)
      .enter()
    .append("circle")
      .attr("cx", 100)
      .attr("cy", 100)
      .attr("r", d => d.text)
      .attr("fill", "none")
      .attr("stroke", "grey")
      .attr("stroke-width", "1.5");

  d3.select("#radii") // adds the dots
    .selectAll("newCircle")
      .data(pointRadialArr)
      .enter()
      .append("circle")
      .attr("cx", d => d[0])
      .attr("cy", d => d[1])
      .attr("r", 2.5)
      .attr("transform", "translate(100,100)");

  d3.select("#radii") //adds the tags
      .selectAll("text")
      .data(textArr)
      .enter()
      .append("text")
      .text(d => d.text)
      .attr("x", d => d.x)
      .attr("y", d=> d.y)
      .attr("font-size", "10px")
      .attr("text-anchor", "middle")
      .attr("transform", "translate(100,100)");
}

angles();
radii();