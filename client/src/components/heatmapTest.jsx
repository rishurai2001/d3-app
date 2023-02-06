import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import getIntensity from '../fixtures/getIntensity';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPotentialPointer, setActivePointer } from '../actions/pointers';


const Heatmap = ({xLabel,yLabel, data }) => {

  

  // console.log(data.map())
  // xLabel
  const svgRef = useRef(null);
  var margin = {top: 10, right: 10, bottom: 10, left: 80},
  width = 4000 - margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom;

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove();
    let svg= d3.select(svgRef.current).append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
;
    


    const xScale = d3.scaleBand()
      .domain(data.map(d => d[xLabel]))
       .range([0, width])
      .padding(0.05);

      svg.append("g")
      .style("font-size", 7)
      .attr("transform", "translate(0," + height/1.03+ ")")
      .call(d3.axisBottom(xScale).tickSize(0))
      .select(".domain").remove()

    const yScale = d3.scaleBand()
      .domain(data.map(d => d[yLabel]))
      .range([height, 0])
      .padding(0.1);

      svg.append("g")
      .style("font-size", 8)
      .call(d3.axisLeft(yScale).tickSize(0))
      .select(".domain").remove()
 
    const colorScale = d3.scaleSequential()
    .interpolator(d3.interpolateInferno)
      .domain([1,10]);

      
        
        svg.selectAll('rect')
    .data(data, function(d) {return d[xLabel]+':'+d[yLabel];})
    .enter()
    .append("rect")
      .attr("x", function(d) { return xScale(d[xLabel]) })
      .attr("y", function(d) { return yScale(d[yLabel]) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", xScale.bandwidth() )
      .attr("height", yScale.bandwidth()/2)
      .style("fill", function(d) { return colorScale(d.intensity)} )
      .style("stroke-width", 4) .style("stroke", "none").style("opacity", 0.8)
     


   
  }, [data,xLabel,yLabel]);

  return (
    <svg ref={svgRef} width={width} height={height} />
  );
};



export default Heatmap;

