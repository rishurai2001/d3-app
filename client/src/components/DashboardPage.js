import React from 'react';
import Header from './Header';
import HeatMap from './HeatMap';
import PointerSummary from './PointerSummary';
import Coordinates from './Coordinates';
import Filters from './Filters';
import Measures from './Measures';
// import TopPerformers from './TopPerformers';
import PointersTable from './PointersTable';
 

const DashboardPage = () => (
    <div>
        <Header />
        <div className="dashboard-content">
            <HeatMap />
            <div>
                <PointerSummary />
              
                <Coordinates />
                <div style={{ display: "flex" }}>
                    <Filters />
                    <Measures />
                </div>
            </div>
        </div>
        {/* <TopPerformers /> */}
        <PointersTable />
    </div>
);

export default DashboardPage;