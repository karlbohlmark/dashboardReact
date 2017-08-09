import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isNull
} from 'lodash/fp';
import Placeholder from 'components/Placeholder';
import ReportRow from 'components/ListItem/ReportRow';
import IconLoop from 'components/IconLoop';

function OverviewUsersStatistics(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100%'
        }}>
            <div style={{
                margin: 10
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    padding: 10
                }}>
                    GOFUNDIS
                </div>

                <div styleName="list_column" style={{marginTop: 10, marginBottom: 10}}>
                    {props.data.errors.cata({
                        Nothing: () => props.data.results.cata({
                            Nothing: () => (
                                <Placeholder
                                    style={{width: '100%', height: 190}}
                                    busy={props.data.busy}
                                    size={[ '100%', '100%' ]} />
                            ),
                            Just: fields => (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        marginRight: 5,
                                        marginLeft: 5
                                    }}>
                                        <ReportRow
                                            styleChildren={{
                                                backgroundColor: '#FBAA1A'
                                            }}
                                            styleUpItem={{
                                                color: (fields.activeGoFundis.color &&
                                                    !isNull(fields.activeGoFundis.color)) ?
                                                    fields.activeGoFundis.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.activeGoFundis &&
                                                !isNull(fields.activeGoFundis.value) ?
                                                    fields.activeGoFundis.value : '0'}
                                            item={
                                                fields.activeGoFundis &&
                                                !isNull(fields.activeGoFundis.title) ?
                                                    fields.activeGoFundis.title.toUpperCase() : ''}
                                            subItem={'(in average per day)'.toUpperCase()}
                                        >
                                            <div styleName="user" />
                                        </ReportRow>
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageTravelDistance.color &&
                                                    !isNull(fields.averageTravelDistance.color)) ?
                                                    fields.averageTravelDistance.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageTravelDistance &&
                                                !isNull(fields.averageTravelDistance.value) ?
                                                    fields.averageTravelDistance.value : '0'}
                                            item={
                                                fields.averageTravelDistance &&
                                                !isNull(fields.averageTravelDistance.title) ?
                                                    fields.averageTravelDistance.title.toUpperCase() : ''}
                                            subItem={'\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageRating.color &&
                                                    !isNull(fields.averageRating.color)) ?
                                                    fields.averageRating.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageRating &&
                                                !isNull(fields.averageRating.value) ?
                                                    (
                                                        <IconLoop number={
                                                            Math.floor(fields.averageRating.value ?
                                                                parseFloat(fields.averageRating.value).toFixed(2) : 0)
                                                        } name={'star'} style={{height: '30px'}} />
                                                    ) : '0'}

                                            item={
                                                fields.averageRating &&
                                                !isNull(fields.averageRating.title) ?
                                                    fields.averageRating.title.toUpperCase() : ''}
                                        />
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        marginRight: 5,
                                        marginLeft: 5
                                    }}>
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageExecutionTime.color &&
                                                    !isNull(fields.averageExecutionTime.color)) ?
                                                    fields.averageExecutionTime.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageExecutionTime &&
                                                !isNull(fields.averageExecutionTime.value) ?
                                                    fields.averageExecutionTime.value : '0'}
                                            item={
                                                fields.averageExecutionTime &&
                                                !isNull(fields.averageExecutionTime.title) ?
                                                    fields.averageExecutionTime.title.toUpperCase() : ''}
                                            subItem={'\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageResponseTime.color &&
                                                    !isNull(fields.averageResponseTime.color)) ?
                                                    fields.averageResponseTime.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageResponseTime &&
                                                !isNull(fields.averageResponseTime.value) ?
                                                    fields.averageResponseTime.value : '0'}
                                            item={
                                                fields.averageResponseTime &&
                                                !isNull(fields.averageResponseTime.title) ?
                                                    fields.averageResponseTime.title.toUpperCase() : ''}
                                            subItem={'\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageCompletionTime.color &&
                                                    !isNull(fields.averageCompletionTime.color)) ?
                                                    fields.averageCompletionTime.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageCompletionTime &&
                                                !isNull(fields.averageCompletionTime.value) ?
                                                    fields.averageCompletionTime.value : '0'}

                                            item={
                                                fields.averageCompletionTime &&
                                                !isNull(fields.averageCompletionTime.title) ?
                                                    fields.averageCompletionTime.title.toUpperCase() : ''}
                                        />
                                    </div>

                                </div>
                            )
                        }),
                        Just: errors => (
                            <div>{errors}</div>
                        )
                    })}
                </div>
            </div>
            <div style={{
                margin: 10
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    padding: 10
                }}>
                    SUBSCRIBERS
                </div>

                <div styleName="list_column" style={{marginTop: 10, marginBottom: 10}}>
                    {props.data.errors.cata({
                        Nothing: () => props.data.results.cata({
                            Nothing: () => (
                                <Placeholder
                                    style={{width: '100%', height: 190}}
                                    busy={props.data.busy}
                                    size={[ '100%', '100%' ]} />
                            ),
                            Just: fields => (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        marginRight: 5,
                                        marginLeft: 5
                                    }}>
                                        <ReportRow
                                            styleChildren={{
                                                backgroundColor: '#C6D92D'
                                            }}
                                            styleUpItem={{
                                                color: (fields.averageNumberOfReportedIssues.color &&
                                                    !isNull(fields.averageNumberOfReportedIssues.color)) ?
                                                    fields.averageNumberOfReportedIssues.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageNumberOfReportedIssues &&
                                                !isNull(fields.averageNumberOfReportedIssues.value) ?
                                                    fields.averageNumberOfReportedIssues.value : '0'}
                                            item={
                                                fields.averageNumberOfReportedIssues &&
                                                !isNull(fields.averageNumberOfReportedIssues.title) ?
                                                    fields.averageNumberOfReportedIssues.title.toUpperCase() : ''}
                                            subItem={'(per subscriber)'.toUpperCase()}
                                        >
                                            <div styleName="user" />
                                        </ReportRow>
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.percentageOfFollowUpTasks.color &&
                                                    !isNull(fields.percentageOfFollowUpTasks.color)) ?
                                                    fields.percentageOfFollowUpTasks.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.percentageOfFollowUpTasks &&
                                                !isNull(fields.percentageOfFollowUpTasks.value) ?
                                                    fields.percentageOfFollowUpTasks.value : '0'}
                                            item={
                                                fields.percentageOfFollowUpTasks &&
                                                !isNull(fields.percentageOfFollowUpTasks.title) ?
                                                    fields.percentageOfFollowUpTasks.title.toUpperCase() : ''}
                                            subItem={'(same subscriber-same category)'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.percentageOfRecurringTasks.color &&
                                                    !isNull(fields.percentageOfRecurringTasks.color)) ?
                                                    fields.percentageOfRecurringTasks.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.percentageOfRecurringTasks &&
                                                !isNull(fields.percentageOfRecurringTasks.value) ?
                                                    fields.percentageOfRecurringTasks.value : '0'}

                                            item={
                                                fields.percentageOfRecurringTasks &&
                                                !isNull(fields.percentageOfRecurringTasks.title) ?
                                                    fields.percentageOfRecurringTasks.title.toUpperCase() : ''}
                                            subItem={'(same subscriber-different category)'.toUpperCase()}
                                        />
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                        marginRight: 5,
                                        marginLeft: 5
                                    }}>
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.preferredTimeForService.color &&
                                                    !isNull(fields.preferredTimeForService.color)) ?
                                                    fields.preferredTimeForService.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.preferredTimeForService &&
                                                !isNull(fields.preferredTimeForService.value) ?
                                                    fields.preferredTimeForService.value : '0'}
                                            item={
                                                fields.preferredTimeForService &&
                                                !isNull(fields.preferredTimeForService.title) ?
                                                    fields.preferredTimeForService.title.toUpperCase() : ''}
                                            subItem={'\u00a0'.toUpperCase()}
                                        />
                                    </div>
                                </div>
                            )
                        }),
                        Just: errors => (
                            <div>{errors}</div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}

OverviewUsersStatistics.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewUsersStatistics, styles);
