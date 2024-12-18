function addArcToOutline(point1, point2, point3, radius, selection){
	//p3 => p2 = a
	//p2 => p1 = b
	//p1 => p3 = c
    
    //Finding lengths of sides
    var a = Math.sqrt(Math.pow(point3[0] - point2[0],2) + Math.pow(point3[1] - point2[1],2) );
    var b = Math.sqrt(Math.pow(point2[0] - point1[0],2) + Math.pow(point2[1] - point1[1],2) );
    var c = Math.sqrt(Math.pow(point3[0] - point1[0],2) + Math.pow(point3[1] - point1[1],2) );
    
    //The angle C, or at p2
    var theta = Math.acos((a*a + b*b - c*c) / (2*a*b));
    
    //Finding point for intercect line from C
    var thetaB = Math.acos((a*a + c*c - b*b) / (2*a*c));
    var theta2 = 3.14 - (theta/2) - thetaB;
    var theta3 = 3.14 - theta2;
    var yM = (Math.sin(theta/2) * a);
    var xM = (Math.tan(theta3)* (1/yM));
    var m = [point3[0] + xM, point3[1] + yM];
    
    //distance from p2 where center of circle lies
    var disC = radius / Math.sin(theta/2);
    
	//distance from p2 to m
    var disA = Math.sqrt(Math.pow(m[0] - point2[0],2) + Math.pow(m[1] - point2[1],2) );
    
	//Position of circle
    var pos = [(point2[0] - (disC*(point2[0]-m[0]))/disA),(point2[1] - (disC*(point2[1]-m[1]))/disA)];
    selection.append("circle")
    	.attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", "2px")
        .attr("r", radius);
     
    //Adds in reference lines
    selection.append("line")
        .attr("x1", point2[0])
        .attr("x2", point3[0])
        .attr("y1", point2[1])
        .attr("y2", point3[1])
        .attr("stroke", "black")
        .attr("stroke-width", "2px");
    selection.append("line")
        .attr("x1", point2[0])
        .attr("x2", point1[0])
        .attr("y1", point2[1])
        .attr("y2", point1[1])
        .attr("stroke", "black")
        .attr("stroke-width", "2px");
        
    let points = [point1, point2, point3];
    //Adds in reference points
    selection.selectAll()
        .data(points)
        .join("circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1])
        .attr("r", 5);
}

function addArcOutline(center, radius, selection){
    //Adds in the main circle
    selection.append("circle")
        .attr("cx", center[0])
        .attr("cy", center[1])
        .attr("r", radius)
        .attr("stroke", "black")
        .attr("stroke-width", "2px")
        .attr("fill", "none");  
    
    var pointLabels = ["3π/2", "0", "π/2", "π"];
    selection.selectAll()
        .data(pointLabels)
        .join("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("x", (d, i) => d3.pointRadial( i * Math.PI / 2, radius + 15)[0])
        .attr("y", (d, i) => d3.pointRadial( i * Math.PI / 2, radius + 15)[1])
        .text( (d) => d)
        .attr("transform", "translate(" + center[0] + "," + center[1] + ")" );
}
function addPathOutline(points, selection){
	selection.selectAll()
    	.data(points)
        .join("circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1])
        .attr("r", (d,i) => i == 0 || i == 3 ? 6 : 4)
        .attr("fill", (d,i) => i == 0 || i == 3 ? "blue" : "black");
        
    
    selection.selectAll()
    	.data(points.slice(0,points.length-1))
        .join("line")
        .attr("x1", (d) => d[0])
        .attr("x2", (d, i) => i < points.length-1 ? points[i+1][0] : null)
        .attr("y1", (d) => d[1])
        .attr("y2", (d, i) => i < points.length-1 ? points[i+1][1] : null)
    	.attr("stroke", (d,i) => i === 2 ? "blue" :"black")
        .attr("stroke-width", "3px")
        .attr("stroke-dasharray", (d,i) => i === 2 ? [3] : [])
        .attr("marker-end", (d,i) => i === 2 ? "url(#markerArrowBlue)": "url(#markerArrow)");
        
	selection.append("line")
    	.attr("x1", points[5][0])
        .attr("x2", points[3][0])
        .attr("y1", points[5][1])
        .attr("y2", points[3][1])
        .attr("stroke", "green")
        .attr("stroke-width", "3px")
        .attr("marker-end", "url(#markerArrowGreen)");
    
    selection.selectAll()
    	.data(["moveTo","lineTo","closePath"])
    	.join("text")
    	.text((d) => d)
        .attr("x", 20)
        .attr("y", (d,i) => 150 + i*20);
    selection.selectAll()
    	.data(["blue","black","green"])
       	.join("circle")
        .attr("cx", 10)
        .attr("cy", (d,i) => 145 + i*20)
        .attr("r", 7.5)
        .attr("fill", (d) => d);
}

function addCurveOutline(qControl, bControl1, bControl2, selection){
    var qData = [[10,10], qControl, [190,10]];
    var bData = [[10,190], bControl1, bControl2, [190,120]];
    
    var data = [ [qData[0],qData[1]], [qData[1],qData[2]], [bData[0],bData[1]], [bData[2],bData[3]] ];
    
    selection.selectAll()
        .data(data)
        .join("line")
        .attr("x1", (d) => d[0][0])
        .attr("x2", (d) => d[1][0])
        .attr("y1", (d) => d[0][1])
        .attr("y2", (d) => d[1][1])
        .attr("stroke-dasharray", 4)
        .attr("stroke", "red");
        
    selection.selectAll()
        .data(qData.concat(bData))
        .join("circle")
        .attr("cx", (d) => d[0])
        .attr("cy", (d) => d[1])
        .attr("r", 5)
        .attr("fill", "red");
}
function addRectOutline(origin, width, height, selection){
	selection.append("circle")
    	.attr("cx", origin[0])
        .attr("cy", origin[1])
        .attr("r", 5)
        .attr("fill", "black");
    selection.append("text")
    	.attr("x", origin[0])
        .attr("y", origin[1]-10)
        .attr("text-anchor", "middle")
        .text("Origin");
    selection.append("line")
    	.attr("x1", origin[0] + width*3/4)
        .attr("x2", origin[0] + width*3/4)
        .attr("y1", origin[1])
        .attr("y2", origin[1] + height)
        .attr("stroke", "black")
        .attr("stroke-width", "3px")
        .attr("marker-start", "url(#markerArrowStart)")
        .attr("marker-end", "url(#markerArrowEnd)");
    selection.append("line")
    	.attr("x1", origin[0])
        .attr("x2", origin[0] + width)
        .attr("y1", origin[1] + height*3/4)
        .attr("y2", origin[1] + height*3/4)
        .attr("stroke", "black")
        .attr("stroke-width", "3px")
        .attr("marker-start", "url(#markerArrowStart)")
        .attr("marker-end", "url(#markerArrowEnd)");
    selection.append("text")
    	.attr("x", origin[0] + width*3/4 - 10)
        .attr("y", origin[1] + 25)
        .text("h")
        .attr("text-anchor", "middle");
    selection.append("text")
    	.attr("x", origin[0] + 25)
        .attr("y", origin[1] + height*3/4 - 5)
        .text("w")
        .attr("text-anchor", "middle");
}
