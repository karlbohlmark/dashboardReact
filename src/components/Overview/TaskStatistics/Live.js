import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isNull
} from 'lodash/fp';
import Placeholder from 'components/Placeholder';
import ReportRow from 'components/ListItem/ReportRow';

function OverviewTaskLiveStatistics(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}>
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{width: 125, height: 75}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                            <ReportRow
                                style={{margin: 5}}
                                styleUpItem={{color: '#F47323', textOverflow: 'ellipsis', overflow: 'hidden'}}
                                styleReportBlock={{width: 125}}
                                upItem={
                                    fields.completedTasksPerDay &&
                                    !isNull(fields.completedTasksPerDay) ?
                                        fields.completedTasksPerDay : '0'}
                                item={'UNASSIGNED TASKS'}
                            />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{width: 125, height: 75}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <ReportRow
                            style={{margin: 5}}
                            styleUpItem={{color: '#C21F50', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            styleReportBlock={{width: 125}}
                            upItem={
                                fields.completedTasksPerDay &&
                                !isNull(fields.completedTasksPerDay) ?
                                    fields.completedTasksPerDay : '0'}
                            item={'ASSIGNED TASKS'}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{width: 125, height: 75}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <ReportRow
                            style={{margin: 5}}
                            styleUpItem={{color: '#0C3A37', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            styleReportBlock={{width: 125}}
                            upItem={
                                fields.completedTasksPerDay &&
                                !isNull(fields.completedTasksPerDay) ?
                                    fields.completedTasksPerDay : '0'}
                            item={'PERFORMED TASKS'}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{width: 125, height: 75}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <ReportRow
                            style={{margin: 5}}
                            styleUpItem={{color: '#6FBE47', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            styleReportBlock={{width: 125}}
                            upItem={
                                fields.completedTasksPerDay &&
                                !isNull(fields.completedTasksPerDay) ?
                                    fields.completedTasksPerDay : '0'}
                            item={'COMPLETED TASKS'}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{width: 125, height: 75}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <ReportRow
                            style={{margin: 5}}
                            styleUpItem={{color: '#ED2324', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            styleReportBlock={{width: 125}}
                            upItem={
                                fields.completedTasksPerDay &&
                                !isNull(fields.completedTasksPerDay) ?
                                    fields.completedTasksPerDay : '0'}
                            item={'CANCELLED TASKS'}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{width: 125, height: 75}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <ReportRow
                            style={{margin: 5}}
                            styleUpItem={{color: '#FFDE00', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            styleReportBlock={{width: 125}}
                            upItem={
                                fields.completedTasksPerDay &&
                                !isNull(fields.completedTasksPerDay) ?
                                    fields.completedTasksPerDay : '0'}
                            item={'SCHEDULED TASKS'}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
        </div>
    );
}

OverviewTaskLiveStatistics.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewTaskLiveStatistics, styles);
