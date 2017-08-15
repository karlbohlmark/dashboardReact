import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isNull
} from 'lodash/fp';
import Placeholder from 'components/Placeholder';
import ReportRow from 'components/ListItem/ReportRow';

function OverviewTaskStatistics(props) {
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
                                    styleChildren={{
                                        backgroundColor: (fields.completedTasksPerDay.iconBackground &&
                                            !isNull(fields.completedTasksPerDay.iconBackground)) ?
                                            fields.completedTasksPerDay.iconBackground : '#07944a'
                                    }}
                                    styleUpItem={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        color: (fields.completedTasksPerDay.color &&
                                            !isNull(fields.completedTasksPerDay.color)) ?
                                            fields.completedTasksPerDay.color : '#07944a'
                                    }}
                                    styleReportBlock={{width: 185}}
                                    upItem={
                                        fields.completedTasksPerDay &&
                                        !isNull(fields.completedTasksPerDay.value) ?
                                            fields.completedTasksPerDay.value : '0'}
                                    item={
                                        fields.completedTasksPerDay &&
                                        !isNull(fields.completedTasksPerDay.title) ?
                                            fields.completedTasksPerDay.title.toUpperCase() : ''}
                                    subItem={
                                        fields.completedTasksPerDay &&
                                        !isNull(fields.completedTasksPerDay.subtitle) ?
                                            fields.completedTasksPerDay.subtitle.toUpperCase() : ''}
                                >
                                    <div styleName="check" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{
                                        backgroundColor: (fields.increasePercentage.iconBackground &&
                                            !isNull(fields.increasePercentage.iconBackground)) ?
                                            fields.increasePercentage.iconBackground : '#07944a'
                                    }}
                                    styleUpItem={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        color: (fields.increasePercentage.color &&
                                            !isNull(fields.increasePercentage.color)) ?
                                            fields.increasePercentage.color : '#07944a'
                                    }}
                                    styleReportBlock={{width: 185}}
                                    upItem={
                                        fields.increasePercentage &&
                                        !isNull(fields.increasePercentage.value) ?
                                            fields.increasePercentage.value : '0'}
                                    item={
                                        fields.increasePercentage &&
                                        !isNull(fields.increasePercentage.title) ?
                                            fields.increasePercentage.title.toUpperCase() : ''}
                                    subItem={
                                        fields.increasePercentage &&
                                        !isNull(fields.increasePercentage.subtitle) ?
                                            fields.increasePercentage.subtitle.toUpperCase() : ''}
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

OverviewTaskStatistics.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewTaskStatistics, styles);
