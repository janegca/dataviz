const dataArray = [20, 29, 32, 41, 47,
  49, 55, 60, 63, 68, 70, 74, 77, 83, 88, 91, 115];

const dataYears = ['2000', '2001', '2002', '2003', '2004', '2005',
  '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014',
  '2015', '2015'];

const width = 500;
const height = 130;

const areaGen = d3.area()
  .x((d,i) => i * 20 )  // spacing for data points
  .y0(height)
  .y1((d) => height - d);  // upper data points
  

const svg = d3.select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

svg.append("path")
  .attr("d", areaGen(dataArray));