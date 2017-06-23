import React from 'react';
import {
    Grid,
    PageHeader
} from 'react-bootstrap';

import PanelChart from './PanelChart';
import PanelTable from './PanelTable';


function Reports(props) {
    return (
        <Grid fluid>
            <PageHeader>
                Reports
            </PageHeader>

            <PanelChart {...props} />

            <PanelTable {...props} />
        </Grid>
    );
}

export default Reports;
