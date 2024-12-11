/* -- 2-Dimensional Arrays -- */
var arr2 = [[1,2,3],[4,5,6]];

// create a group for each array element
var g_nodes = d3.select('#dataSVG')
  .selectAll('g')
  .data(arr2)
  .join('g');

// create circles for each array entry  
var c_nodes = g_nodes.selectAll('circle')
  .data(d => d)
  .join('circle');

// style the circles
c_nodes.attr('r', d => d * 3)
  .attr('cx' , d => 55 * d)
  .attr('cy', 30)
  .attr('fill', 'pink');
  
/* -- Binding Object Data -- */
var homeless = [
  {state: "California", population: 129972 },
  {state: "New York", population: 91897 },
  {state: "Florida", population: 31030 },
  {state: "Texas", population: 25310 },
  {state: "Washington", population: 22304 }];

var bar = d3.select("#bargraph1")
  .selectAll()
  .data(homeless);

bar.join("text")    // create a text label for each entry
  .text((d) => d.state)
  .attr('x', 96)
  .attr('text-anchor', 'end')
  .attr('y', (d, i) => i * 20 + 17);

bar.join("rect")  // create a bar for each entry
  .attr("height", 19)
  .attr("width", (d) => d.population / 500)
  .attr("x", 100)
  .attr("y", (d, i) => i * 20)
  .attr("fill", "pink");

/*-- Using Key Functions (joinWithoutKey) --*/
var data = [
  {"state": "Washington","population": 21112},
  {"state": "Texas","population": 23548},
  {"state": "Florida",   "population": 32190},
  {"state": "New York","population": 89503}
];

 var homeless1 = [{"state": "California","population": 134278}];

function prependData() {
  if (data.length == 0) {
      return;
  }

  homeless1.unshift(data.pop());
  joinWithoutKey(homeless1);
}

function insertData() {
  if (data.length == 0) {
      return;
  }

  var loc = Math.floor(homeless1.length / 2);
  homeless1.splice(loc, 0, data.pop());
  joinWithoutKey(homeless1);
}

function appendData() {
  if (data.length == 0) {
      return;
  }

  homeless1.push(data.pop());
  joinWithoutKey(homeless1);
}

function reset() {
  data = [
      {"state": "Washington","population": 21112},
      {"state": "Texas","population": 23548},
      {"state": "Florida",   "population": 32190},
      {"state": "New York","population": 89503}
  ];

  homeless1 = [{"state": "California","population": 134278}];
  joinWithoutKey(homeless1);
}


function joinWithoutKey(array) {
  var u = d3.select("#bargraph2")
    .selectAll('rect')
    .data(array);   // No Key used

  u.join('rect')
    .transition()
    .attr("height", 19)
    .attr("width", (d) => d.population/500)
    .attr("x", 100)
    .attr("y", (d, i) => i * 20)
    .attr("fill", "pink");
    
u = d3.select("#bargraph2")
    .selectAll('text')
    .data(array);

  u.join('text')
    .text((d) => d.state)
    .transition()
    .attr('x', 96)
    .attr('text-anchor', 'end')
    .attr('y', (d, i) => i * 20 + 17);
}

joinWithoutKey(homeless1);

/*-- Using Key Functions (joinWithKey) --*/
var data2 = [
  {"state": "Washington","population": 21112},
  {"state": "Texas","population": 23548},
  {"state": "Florida",   "population": 32190},
  {"state": "New York","population": 89503}
];

var homeless2 = [{"state": "California","population": 134278}];

function prependData2() {
  if (data2.length == 0) {
      return;
  }

  homeless2.unshift(data2.pop());
  joinWithKey(homeless2);
}

function insertData2() {
  if (data2.length == 0) {
      return;
  }

  var loc = Math.floor(homeless2.length / 2);
  homeless2.splice(loc, 0, data2.pop());
  joinWithKey(homeless2);
}

function appendData2() {
  if (data2.length == 0) {
      return;
  }

  homeless2.push(data2.pop());
  joinWithKey(homeless2);
}

function reset2() {
  data2 = [
  {"state": "Washington","population": 21112},
  {"state": "Texas","population": 23548},
  {"state": "Florida",   "population": 32190},
  {"state": "New York","population": 89503}
  ];

  homeless2 = [{"state": "California","population": 134278}];
  joinWithKey(homeless2);
}

// selects using 'state' as a Key
function joinWithKey(array) {
  var u = d3.select("#bargraph3")
    .selectAll('rect')
    .data(array, (d) => d.state); // KEY

  u.join('rect')
    .transition()
    .attr("height", 19)
    .attr("width", (d) => d.population/500)
    .attr("x", 100)
    .attr("y", (d, i) => i * 20)
    .attr("fill", "pink");
    
u = d3.select("#bargraph3")
    .selectAll('text')
    .data(array, (d) => d.state); // KEY

  u.join('text')
    .text((d) => d.state)
    .transition()
    .attr('x', 96)
    .attr('text-anchor', 'end')
    .attr('y', (d, i) => i * 20 + 17);
}
joinWithKey(homeless2);