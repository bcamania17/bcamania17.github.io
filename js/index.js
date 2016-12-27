HorizontalBarGraph = function(el, series) {
  this.el = d3.select(el);
  this.series = series;
};

HorizontalBarGraph.prototype.draw = function() {
  var x = d3.scale.linear()
    .domain([0, d3.max(this.series, function(d) { return d.value })])
    .range([0, 100]);

  var segment = this.el
    .selectAll(".horizontal-bar-graph-segment")
      .data(this.series)
    .enter()
      .append("div").classed("horizontal-bar-graph-segment", true);

  segment
    .append("div").classed("horizontal-bar-graph-label", true)
      .text(function(d) { return d.label });

  segment
    .append("div").classed("horizontal-bar-graph-value", true)
      .append("div").classed("horizontal-bar-graph-value-bar", true)
        .style("background-color", function(d) { return d.color })
        .text(function(d) { return d.inner_label ? d.inner_label : "" })
        .transition()
          .duration(2000)
          .style("min-width", function(d) { return x(d.value) + "%" });

};

var graph = new HorizontalBarGraph('#my-graph', [
  {label: "Team A",  inner_label: "100", value: 100, color: "#e74c3c" },
  {label: "Team B",  inner_label: "90",   value: 90,  color: "#e67e22" },
  {label: "Team C",  inner_label: "80",   value: 80,  color: "#27ae60" },
  {label: "Team D",  inner_label: "70",   value: 70,  color: "#2980b9" },
  {label: "Team E",  inner_label: "60",   value: 60,  color: "#95a5a6" },
  {label: "Team F",  inner_label: "50",   value: 50,  color: "#16a085" },
  {label: "Team G",  inner_label: "40",   value: 40,  color: "#34495e" }
]);
graph.draw();
