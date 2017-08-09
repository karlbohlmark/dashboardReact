import React, { PropTypes } from 'react';
import {
    merge
} from 'lodash/fp';
import {
    REVENUE_LINE
} from 'models/highchartConfig';
import Highchart from 'react-highcharts/ReactHighcharts';
import Placeholder from 'components/Placeholder';
import LegendRow from 'components/ListItem/LegendRow';

function TasksHistogram(props) {
    return (
        <div>
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '180px' ]} />
                    ),
                    Just: fields => (
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                {
                                    fields.series.map((field, index) => (
                                        <LegendRow
                                            key={index}
                                            color={REVENUE_LINE.colors[index]}
                                            title={field.name}
                                        />
                                    ))
                                }
                            </div>
                            <Highchart config={merge(fields, REVENUE_LINE)} />
                        </div>
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
        </div>
    );
}

TasksHistogram.propTypes = {
    data: PropTypes.object.isRequired
};

export default TasksHistogram;
