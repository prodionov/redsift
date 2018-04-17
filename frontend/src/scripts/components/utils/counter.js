import React, { Component } from 'react';
import * as d3 from 'd3';

class Counter extends Component {
  state = {
    data: [10, 40, 30, 20, 60, 80],
    color: ['#6e7f80', '#536872', '#708090', '#536878', '#4d6776', '#7591b0'],
  };

  width = 0.45 * window.innerWidth;
  height = this.width;
  radius = 0.6 * this.height;
  pie = d3
    .pie()
    .startAngle(-0.5 * Math.PI)
    .endAngle(0.5 * Math.PI);

  arc = d3
    .arc()
    .outerRadius(this.radius * 0.5)
    .innerRadius(this.radius * 0.3);

  componentDidMount() {
    this.initialise();
  }

  compileDataSet = (data, color) => {
    return data.map((label, i) => {
      return { value: data[i], color: color[i] };
    });
  };

  initialise = () => {
    let data = this.compileDataSet(this.state.data, this.state.color);
    const svg = d3.select('#counter');

    const g = svg
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2.3 + ',' + this.height / 1.8 + ')'
      );

    g.append('g').attr('class', 'slices');
    g.append('g').attr('class', 'labels');

    let slice = svg
      .select('.slices')
      .selectAll('path.slice')
      .data(this.pie(this.state.data))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .style('fill', (d, i) => {
        return this.state.color[i];
      })
      .attr('class', 'slice');
  };

  render() {
    return (
      <div>
        <h2>Fancy pie chart</h2>
        <svg id="counter" className="firs-line" />
      </div>
    );
  }
}

export default Counter;
