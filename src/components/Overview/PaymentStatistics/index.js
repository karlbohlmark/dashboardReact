import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isNull
} from 'lodash/fp';
import Placeholder from 'components/Placeholder';
import ReportRow from 'components/ListItem/ReportRow';

function OverviewPaymentStatistics(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}>
            <div styleName="list_column" style={{margin: 10}}>
                {props.data.errors.cata({
                    Nothing: () => props.data.results.cata({
                        Nothing: () => (
                            <Placeholder
                                style={{width: 235, height: 190}}
                                busy={props.data.busy}
                                size={[ '220px', '190px' ]} />
                        ),
                        Just: fields => (
                            <div>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#07944a'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 200}}
                                    upItem={
                                        fields.completedTasksPerDay &&
                                        !isNull(fields.completedTasksPerDay) ?
                                            fields.completedTasksPerDay : '0'}
                                    item={'TOTAL TASKS VALUE'}
                                    // subItem={'(IN AVERAGE PER GOFUNDI)'}
                                >
                                    <div styleName="completed-tasks" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#F2EC2B'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 200}}
                                    upItem={
                                        fields.increasePercentage &&
                                        !isNull(fields.increasePercentage) ?
                                            fields.increasePercentage : '0'}
                                    item={'TOTAL GOFUNDI EARNINGS'}
                                    // subItem={'(TASKS COMPLETED)'}
                                >
                                    <div styleName="line-chart" />
                                </ReportRow>
                            </div>
                        )
                    }),
                    Just: errors => (
                        <div>{errors}</div>
                    )
                })}
            </div>
            <div styleName="list_column" style={{margin: 10}}>
                {props.data.errors.cata({
                    Nothing: () => props.data.results.cata({
                        Nothing: () => (
                            <Placeholder
                                style={{width: 200, height: 190}}
                                busy={props.data.busy}
                                size={[ '220px', '190px' ]} />
                        ),
                        Just: fields => (
                            <div>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#C53752'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 165}}
                                    upItem={
                                        fields.completedTasksPerDay &&
                                        !isNull(fields.completedTasksPerDay) ?
                                            fields.completedTasksPerDay : '0'}
                                    item={'PAID OUT TASKS'}
                                    // subItem={'(IN AVERAGE PER GOFUNDI)'}
                                >
                                    <div styleName="line-chart" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#F47321'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 165}}
                                    upItem={
                                        fields.increasePercentage &&
                                        !isNull(fields.increasePercentage) ?
                                            fields.increasePercentage : '0'}
                                    item={'PENDING PAYMENTS'}
                                    // subItem={'(TASKS COMPLETED)'}
                                >
                                    <div styleName="line-chart" />
                                </ReportRow>
                            </div>
                        )
                    }),
                    Just: errors => (
                        <div>{errors}</div>
                    )
                })}
            </div>
        </div>
    );
}

OverviewPaymentStatistics.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewPaymentStatistics, styles);
