var data = [];

data[0] = [];
data[1] = [];
data[2] = [];
data[3] = [];

data[0][0] = [1,2,3];
data[0][1] = [4,5,6];
data[1][0] = [7,8];
data[1][1] = [9,10,11,12];
data[1][2] = [13,14,15];
data[2][0] = [16];
data[3][0] = [17,18];

//console.log(data);

/*-- Display Stacked Bars --*/
var width = 1000;
var height = 240;
var barWidth = 100;
var barGap = 10;

var margin = {left:50,right:50,top:0,bottom:0};

var svg = d3.select("body").append("svg").attr("width",width).attr("height",height);
var chartGroup = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Column groups - shift horizontally on x-axis
var firstGroups = chartGroup.selectAll("g")
	.data(data)
	.join("g")
		.attr("class",(d,i) =>"firstLevelGroup"+i)
		.attr("transform", (d,i) =>"translate("+(i*(barWidth+barGap))+",0)")

//console.log(firstGroups);

// Block groups added to columns, shifted on y-axis
var secondGroups = firstGroups.selectAll("g")
	.data( (d) => d)
	.join("g")
		.attr("class", (d,i,j) => "secondLevelGroup"+i)
		.attr("transform", (d,i,j) => "translate(0,"+(height-((i+1)*50))+")");

// Add the blocks
secondGroups.append("rect")
	.attr("x", (d,i) => 0)
	.attr("y","0")
	.attr("width",100)
	.attr("height",50)
	.attr("class","secondLevelRect");

// Add the circles
secondGroups.selectAll("circle")
	.data( (d) => d)
	.join("circle")
		.attr("cx", (d,i) => { console.log(d);return ((i*21)+10); })
		.attr("cy","25")
		.attr("r","10")

// Add the text in the cricles
//  'nodes' acts as 'j' index
secondGroups.selectAll("text")
	.data( (d) => d)
	.enter()
  .append("text")
	.attr("x", (d,i) => ((i*21)+10))
	.attr("y","25")
	.attr("class","txt")
	.attr("text-anchor","middle")
	.attr("dominant-baseline","middle")
	.text( (d,i,nodes) => {console.log(nodes);return d;}); 
