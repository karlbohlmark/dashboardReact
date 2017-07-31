import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Highchart from 'react-highcharts/ReactHighcharts';
import styles from './styles.css';
import {
    merge
} from 'lodash/fp';
import {
    NUMBER_OF_GOFUNDIS
} from 'models/highchartConfig';
import Placeholder from 'components/Placeholder';
import LegendRow from 'components/ListItem/LegendRow';

function GoFundisChartsLeft(props) {
    return (
        <div style={{ backgroundColor: '#fff', padding: 10, width: '69%'}}>
            <div styleName='sub_container_header'>NUMBER OF GOFUNDIS</div>

            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '200px' ]} />
                    ),
                    Just: fields => (
                        <div styleName="list_column_highcharts_large" style={{margin: 5}}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}>
                                {
                                    fields.fundiNumber.series.map((field, index) => (
                                        <LegendRow
                                            key={index}
                                            color={NUMBER_OF_GOFUNDIS.colors[index]}
                                            title={field.name}
                                        />
                                    ))
                                }
                            </div>
                            <Highchart config={merge(fields.fundiNumber, NUMBER_OF_GOFUNDIS)} />
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

GoFundisChartsLeft.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(GoFundisChartsLeft, styles);

