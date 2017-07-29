import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Highchart from 'react-highcharts/ReactHighcharts';
import styles from './styles.css';
import {
    merge
} from 'lodash/fp';
import {
    LIVE_ACTIVE_GOFUNDIS
} from 'models/highchartConfig';
import Placeholder from 'components/Placeholder';

function GoFundisChartsRight(props) {
    return (
        <div style={{ backgroundColor: '#fff', padding: 10, width: '29%'}}>
            <div styleName='sub_container_header'
                 style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                LIVE ACTIVE GOFUNDIS
                <div style={{
                    marginLeft: 7,
                    width: 10,
                    height: 10,
                    backgroundColor: '#6ebe46',
                    borderRadius: '50%'
                }} />
            </div>
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '190px' ]} />
                    ),
                    Just: fields => (
                        <div styleName="list_column_highcharts_large" style={{margin: 5}}>
                            <Highchart config={merge(
                                fields.fundiLiveActive ? fields.fundiLiveActive : {},
                                LIVE_ACTIVE_GOFUNDIS
                            )} />
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

GoFundisChartsRight.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(GoFundisChartsRight, styles);

