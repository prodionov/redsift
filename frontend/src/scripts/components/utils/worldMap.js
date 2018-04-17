import React, { Component } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';

class Worldmap extends Component {
  state = {
    worldData: [],
  };

  width = 0.7 * window.innerWidth;
  height = 0.6 * window.innerHeight;

  projection = d3
    .geoMercator()
    .scale(130)
    .translate([this.width / 2, this.height / 2]);

  path = d3.geoPath().projection(this.projection);

  componentDidMount() {
    fetch('https://unpkg.com/world-atlas@1/world/110m.json').then(response => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`);
        return;
      }
      response
        .json()
        .then(worldData => {
          this.setState({
            worldData: feature(worldData, worldData.objects.countries).features,
          });
        })
        .then(data => {
          this.initialise();
        });
    });
  }

  initialise = () => {
    const svg = d3.select('#worldMap');
    svg
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'grey')
      .attr('opacity', '0.05');
    svg
      .append('g')
      .attr('class', 'countries')
      .selectAll('path')
      .data(this.state.worldData)
      .enter()
      .append('path')
      .attr('d', this.path)
      .attr('fill', 'lightblue')
      .style('stroke', 'white')
      .style('opacity', 0.8)
      .style('stroke-width', 0.3);
  };

  render() {
    return <svg id="worldMap" />;
  }
}

export default Worldmap;
