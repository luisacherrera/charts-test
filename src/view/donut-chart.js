import * as d3 from 'd3';

const DonutChart = (data, id) => {

  const width = 200;
  const height = 200;
  const innerRadius = 90;
  const outerRadius = 100;

  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)

  const pie = d3.pie()
    .sort(null)
    .value(d => d.value);

  const svg = d3.select("#donut-" + id)
    .append("svg")
    .data([data])
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  svg.selectAll("svg")
    .data(pie)
    .enter()
    .append("path")
    .attr("d", arc)
    .style("fill", d => d3.color(d.data.color))
}

export default DonutChart;