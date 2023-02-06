import React from 'react';
import getIntensity from '../fixtures/getIntensity';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPotentialPointer, setActivePointer } from '../actions/pointers';
import HeatmapTest from './heatmapTest';
import data from '../database.json';
const Heatmap = (props) => {
    const pointersCollection = getIntensity(props.database ,props.xLabel,props.yLabel, props.startYear, props.endYear, props.pestle, props.sector, props.country, props.topic, props.region, props.measure);
    const Xheaders = pointersCollection.xheaders;
    const measureCollection = pointersCollection.pointersCollection;
    // console.log(props);
    if (Xheaders.length === 0) {
        return (
            <div className="table-container">
                <h1>No matches for the applied filters!</h1>
            </div>
        );
    }

    return (
        <div className="table-container">
            <Table size="sm" borderless className="table">
            <HeatmapTest xLabel={props.xLabel} yLabel={props.yLabel} data={data}  />
        </Table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    database: state.pointers.database,
    xLabel: state.filters.xLabel,
    yLabel: state.filters.yLabel,
    startYear: state.filters.startYear,
    endYear: state.filters.endYear,
    pestle: state.filters.pestle,
    sector: state.filters.sector,
    country: state.filters.country,
    topic: state.filters.topic,
    region: state.filters.region,
    measure: state.filters.measure
});

const mapDispatchToProps = (dispatch, props) => ({
    setActivePointer: (pointer) => dispatch(setActivePointer(pointer)),
    setPotentialPointer: (pointer) => dispatch(setPotentialPointer(pointer))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap);