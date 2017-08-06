import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isNull
} from 'lodash/fp';
import Placeholder from 'components/Placeholder';
import ReportRow from 'components/ListItem/ReportRow';

function OverviewBlockStats(props) {
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
                                style={{width: 220, height: 190}}
                                busy={props.data.busy}
                                size={[ '220px', '190px' ]} />
                        ),
                        Just: fields => (
                            <div>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#07944a'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    upItem={
                                        fields.completedTasksPerDay &&
                                        !isNull(fields.completedTasksPerDay) ?
                                            fields.completedTasksPerDay : '0'}
                                    item={'COMPLETED TASKS PER DAY'}
                                    subItem={'(IN AVERAGE PER GOFUNDI)'}
                                >
                                    <div styleName="completed-tasks" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#fbaa1a'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    upItem={
                                        fields.activeGoFundis &&
                                        !isNull(fields.activeGoFundis) ?
                                            fields.activeGoFundis : '0'}
                                    item={'ACTIVE GOFUNDIS'}
                                    subItem={'(IN AVERAGE PER DAY)'}
                                >
                                    <div styleName="user" />
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
                                style={{ width: 235, height: 190}}
                                busy={props.data.busy}
                                size={[ '100%', '100%' ]} />
                        ),
                        Just: fields => (
                            <div>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#ffde00'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 185}}
                                    upItem={
                                        fields.averageCompletionTime &&
                                        !isNull(fields.averageCompletionTime) ?
                                            fields.averageCompletionTime : '0'}
                                    item={'AVERAGE TIME FOR COMPLETION'}
                                    subItem={'(FROM ASSIGNED TO COMPLETED)'}
                                >
                                    <div styleName="assigned-tasks" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#c21e51'}}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 185}}
                                    upItem={
                                        fields.increasePercentage &&
                                        !isNull(fields.increasePercentage) ?
                                            fields.increasePercentage : '0'}
                                    item={'INCREASE SINCE LAST MONTH'}
                                    subItem={'(TASKS COMPLETED)'}
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

OverviewBlockStats.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewBlockStats, styles);
