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
  {label: "Creamsicles",  inner_label: "0", value: 0, color: "#e74c3c" },
  {label: "Mandem",  inner_label: "0",   value: 0,  color: "#e67e22" },
  {label: "Jovan and Friends",  inner_label: "0",   value: 0,  color: "#27ae60" },
  {label: "Baseball Academy",  inner_label: "0",   value: 0,  color: "#2980b9" },
  {label: "Extra(ordinary) Eight",  inner_label: "0",   value: 0,  color: "#95a5a6" },
  {label: "BOW 17OWN",  inner_label: "0",   value: 0,  color: "#16a085" },
  {label: "The I.J.L.S.A",  inner_label: "0",   value: 0,  color: "#e74c3c" },
  {label: "Jeelai Beelai",  inner_label: "0",   value: 0,  color: "#e67e22" },
  {label: "Harrison Won't Pay for Gas",  inner_label: "0",   value: 0,  color: "#27ae60" },
  {label: "Business Girls",  inner_label: "0",   value: 0,  color: "#2980b9" },
  {label: "#WeJustWantToGraduate",  inner_label: "0",   value: 0,  color: "#95a5a6" },
  {label: "Wildcats",  inner_label: "0",   value: 0,  color: "#16a085" },
  {label: "Fuchboys",  inner_label: "0",   value: 0,  color: "#e74c3c" },
  {label: "Phineas and Ferb",  inner_label: "0",   value: 0,  color: "#e67e22" },
  {label: "TBD",  inner_label: "0",   value: 0,  color: "#27ae60" },
  {label: "hermanos de sangre ",  inner_label: "0",   value: 0,  color: "#2980b9" },
  {label: "8 inches",  inner_label: "0",   value: 0,  color: "#95a5a6" },
  {label: "Jesus and His Disciples",  inner_label: "0",   value: 0,  color: "#16a085" },
  {label: "J.E.L.A.N.I.E.",  inner_label: "0",   value: 0,  color: "#e74c3c" },
  {label: "BEARS ON FIRE",  inner_label: "0",   value: 0,  color: "#e67e22" },
  {label: "SIX012",  inner_label: "0",   value: 0,  color: "#27ae60" },
  {label: "Senioritas",  inner_label: "0",   value: 0,  color: "#2980b9" },
  {label: "Harrison Won't Pay for Gas",  inner_label: "0",   value: 0,  color: "#95a5a6" },
  {label: "The Gentlemen",  inner_label: "0",   value: 0,  color: "#16a085" },
  {label: "French Toast Babies",  inner_label: "0",   value: 0,  color: "#e74c3c" },
  {label: "Trivial",  inner_label: "0",   value: 0,  color: "#e67e22" },
  {label: "Quadruplet Threat",  inner_label: "0",   value: 0,  color: "#27ae60" },
  {label: "Sciengbus + Visuwhales",  inner_label: "0",   value: 0,  color: "#2980b9" },
  {label: "The Baseball Academy",  inner_label: "0",   value: 0,  color: "#95a5a6" },
  {label: "Business Girls",  inner_label: "0",   value: 0,  color: "#16a085" },
  {label: "Harrison Won't Pay for Gas",  inner_label: "0",   value: 0,  color: "#e74c3c" },
  {label: "bcabellas",  inner_label: "0",   value: 0,  color: "#e67e22" },
  {label: "Cuhsine Seta",  inner_label: "0",   value: 0,  color: "#27ae60" },
  {label: "The Popsicles ",  inner_label: "0",   value: 0,  color: "#2980b9" },


]);
graph.draw();