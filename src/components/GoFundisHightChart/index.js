import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    merge,
    reduce,
    map,
    toString
} from 'lodash/fp';
import {
    GOFUNDIS
} from 'models/highchartConfig';
import Highchart from 'react-highcharts/ReactHighcharts';
import LegendRow from 'components/ListItem/LegendRow';
import Placeholder from 'components/Placeholder';

function GoFundisHightChart(props) {
    return (
        <div style={{
            textAlign: 'center',
            backgroundColor: '#fff',
            marginLeft: 10,
            marginRight: 10
        }}>
            <div styleName='sub_container_header'>GOFUNDIS</div>
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{ width: 200, height: 222}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <div styleName="list_column_highcharts" style={{margin: 5}}>
                            <Highchart config={merge(
                                GOFUNDIS,
                                {title: {
                                    text: toString(reduce(
                                        (sum, n) => (sum + n), 0,
                                        map(field => (field.numberOfFundis), fields.fundiStatuses)))
                                },
                                    series: [{
                                        data: map(field => (
                                            [field.status, parseFloat(field.numberOfFundis)]
                                        ), fields.fundiStatuses)
                                    }]
                                }
                            )} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                                {
                                    fields.fundiStatuses.map((field, index) => (
                                        <LegendRow
                                            key={index}
                                            color={GOFUNDIS.colors[index]}
                                            title={field.status}
                                        />
                                    ))
                                }
                            </div>
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

GoFundisHightChart.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(GoFundisHightChart, styles);
