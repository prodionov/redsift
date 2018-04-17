import React, { Component } from 'react';
import * as d3 from 'd3';

class Counter extends Component {
  state = {};
  color = ['#6e7f80', '#536872', '#708090', '#536878', '#4d6776', '#7591b0'];
  labels = ['happy', 'sad', 'spam', 'personal', 'dangerous', 'boss'];

  width = 0.45 * window.innerWidth;
  height = 0.4 * window.innerHeight;

  radius = 0.8 * this.height;
  arc = d3
    .arc()
    .outerRadius(this.radius * 0.5)
    .innerRadius(this.radius * 0.3);

  outerArc = d3
    .arc()
    .innerRadius(this.radius * 0.6)
    .outerRadius(this.radius * 0.6);

  pie = d3
    .pie()
    .sort(null)
    .value(d => {
      return d.value;
    })
    .startAngle(-0.5 * Math.PI)
    .endAngle(0.5 * Math.PI);

  componentDidMount() {
    let data = this.compileDataSet(this.props.data, this.color, this.labels);
    this.initialise(data, this.radius, this.arc, this.outerArc);
  }

  compileDataSet = (data, color, labels) => {
    return labels.map((label, i) => {
      return { label, value: data[i], color: color[i] };
    });
  };

  initialise = (data, radius, arc, outerArc) => {
    //let data = this.compileDataSet(this.props.data, this.state.color);
    const format = d3.format('.1f');
    const svg = d3.select('#counter');

    const g = svg
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2.3 + ',' + this.height / 1.2 + ')'
      );

    g.append('g').attr('class', 'slices');
    g.append('g').attr('class', 'labels');
    g.append('g').attr('class', 'lines');

    /* ------- PIE SLICES -------*/
    let slice = svg
      .select('.slices')
      .selectAll('path.slice')
      .data(this.pie(data))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .style('fill', (d, i) => {
        return d.data.color;
      })
      .attr('class', 'slice');

    /* ------- TEXT LABELS -------*/
    let text = svg
      .select('.labels')
      .selectAll('text')
      .data(this.pie(data));

    text
      .enter()
      .append('text')
      .attr('font-size', '1em')
      .attr('font-family', 'ubuntu')
      .attr('dy', '.35em')
      .text(function(d) {
        return `${d.data.label} ${d.data.value}`;
      })
      .attr('transform', d => {
        let c = outerArc.centroid(d);
        return `translate(${c[0]},${1.01 * c[1]})`;
      });

    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    /* ------- SLICE TO TEXT POLYLINES -------*/

    let polyline = svg
      .select('.lines')
      .selectAll('polyline')
      .data(this.pie(data))
      .enter()
      .append('polyline');

    polyline
      .transition()
      .duration(1000)
      .attr('points', function(d) {
        return [arc.centroid(d), outerArc.centroid(d)];
      });
  };

  render() {
    return (
      <div>
        <h2>Email sentiment aggregation</h2>
        <svg id="counter" className="firs-line" />
      </div>
    );
  }
}

export default Counter;
