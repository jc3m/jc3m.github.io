var height = 6;
var width = 250;

var x = d3.scaleLinear()
  .domain([0, 10])
  .range([0, width]);

d3.selectAll('svg')
  .attr('height', height)
  .attr('width', width)
  .each(function(d, i) {
    var weight = d3.select(this).attr("weight");
    d3.select(this)
      .append('rect')
      .attr('height', height)
      .attr('width', function() { return x(weight); })
      .style('fill', '#999');
  });
