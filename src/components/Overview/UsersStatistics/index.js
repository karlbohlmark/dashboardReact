import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    has
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
                    padding: 10,
                    fontWeight: 500
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
                                                color: (fields.activeGoFundis &&
                                                    has('color', fields.activeGoFundis)) ?
                                                    fields.activeGoFundis.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.activeGoFundis &&
                                                has('value', fields.activeGoFundis) ?
                                                    fields.activeGoFundis.value : '0'}
                                            item={
                                                fields.activeGoFundis &&
                                                has('title', fields.activeGoFundis) ?
                                                    fields.activeGoFundis.title.toUpperCase() : ''}
                                            subItem={
                                                fields.activeGoFundis &&
                                                has('subtitle', fields.activeGoFundis) ?
                                                    fields.activeGoFundis.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
                                        >
                                            <div styleName="user" />
                                        </ReportRow>
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageTravelDistance &&
                                                    has('color', fields.averageTravelDistance)) ?
                                                    fields.averageTravelDistance.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageTravelDistance &&
                                                has('value', fields.averageTravelDistance) ?
                                                    fields.averageTravelDistance.value : '0'}
                                            item={
                                                fields.averageTravelDistance &&
                                                has('title', fields.averageTravelDistance) ?
                                                    fields.averageTravelDistance.title.toUpperCase() : ''}
                                            subItem={
                                                fields.averageTravelDistance &&
                                                has('subtitle', fields.averageTravelDistance) ?
                                                    fields.averageTravelDistance.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageRating &&
                                                    has('color', fields.averageRating)) ?
                                                    fields.averageRating.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageRating &&
                                                has('value', fields.averageRating) ?
                                                    (
                                                        <IconLoop number={
                                                            Math.floor(fields.averageRating.value ?
                                                                parseFloat(fields.averageRating.value).toFixed(2) : 0)
                                                        } name={'star'} style={{height: '30px'}} />
                                                    ) : '0'}

                                            item={
                                                fields.averageRating &&
                                                has('title', fields.averageRating) ?
                                                    fields.averageRating.title.toUpperCase() : ''}
                                            subItem={
                                                fields.averageTravelDistance &&
                                                has('subtitle', fields.averageTravelDistance) ?
                                                    fields.averageTravelDistance.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
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
                                                color: (fields.averageExecutionTime &&
                                                    has('color', fields.averageExecutionTime)) ?
                                                    fields.averageExecutionTime.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageExecutionTime &&
                                                has('value', fields.averageExecutionTime) ?
                                                    fields.averageExecutionTime.value : '0'}
                                            item={
                                                fields.averageExecutionTime &&
                                                has('title', fields.averageExecutionTime) ?
                                                    fields.averageExecutionTime.title.toUpperCase() : ''}
                                            subItem={
                                                fields.averageExecutionTime &&
                                                has('subtitle', fields.averageExecutionTime) ?
                                                    fields.averageExecutionTime.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageResponseTime &&
                                                    has('color', fields.averageResponseTime)) ?
                                                    fields.averageResponseTime.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageResponseTime &&
                                                has('value', fields.averageResponseTime) ?
                                                    fields.averageResponseTime.value : '0'}
                                            item={
                                                fields.averageResponseTime &&
                                                has('title', fields.averageResponseTime) ?
                                                    fields.averageResponseTime.title.toUpperCase() : ''}
                                            subItem={
                                                fields.averageResponseTime &&
                                                has('subtitle', fields.averageResponseTime) ?
                                                    fields.averageResponseTime.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.averageCompletionTime &&
                                                    has('color', fields.averageCompletionTime)) ?
                                                    fields.averageCompletionTime.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageCompletionTime &&
                                                has('value', fields.averageCompletionTime) ?
                                                    fields.averageCompletionTime.value : '0'}

                                            item={
                                                fields.averageCompletionTime &&
                                                has('title', fields.averageCompletionTime) ?
                                                    fields.averageCompletionTime.title.toUpperCase() : ''}
                                            subItem={
                                                fields.averageCompletionTime &&
                                                has('subtitle', fields.averageCompletionTime) ?
                                                    fields.averageCompletionTime.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
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
                    padding: 10,
                    fontWeight: 500
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
                                                color: (fields.averageNumberOfReportedIssues &&
                                                    has('color', fields.averageNumberOfReportedIssues)) ?
                                                    fields.averageNumberOfReportedIssues.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.averageNumberOfReportedIssues &&
                                                has('value', fields.averageNumberOfReportedIssues) ?
                                                    fields.averageNumberOfReportedIssues.value : '0'}
                                            item={
                                                fields.averageNumberOfReportedIssues &&
                                                has('title', fields.averageNumberOfReportedIssues) ?
                                                    fields.averageNumberOfReportedIssues.title.toUpperCase() : ''}
                                            subItem={
                                                fields.averageNumberOfReportedIssues &&
                                                has('subtitle', fields.averageNumberOfReportedIssues) ?
                                                    fields.averageNumberOfReportedIssues.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
                                        >
                                            <div styleName="user" />
                                        </ReportRow>
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.percentageOfFollowUpTasks &&
                                                    has('color', fields.percentageOfFollowUpTasks)) ?
                                                    fields.percentageOfFollowUpTasks.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.percentageOfFollowUpTasks &&
                                                has('value', fields.percentageOfFollowUpTasks) ?
                                                    fields.percentageOfFollowUpTasks.value : '0'}
                                            item={
                                                fields.percentageOfFollowUpTasks &&
                                                has('title', fields.percentageOfFollowUpTasks) ?
                                                    fields.percentageOfFollowUpTasks.title.toUpperCase() : ''}
                                            subItem={
                                                fields.percentageOfFollowUpTasks &&
                                                has('subtitle', fields.percentageOfFollowUpTasks) ?
                                                    fields.percentageOfFollowUpTasks.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
                                        />
                                        <ReportRow
                                            styleUpItem={{
                                                color: (fields.percentageOfRecurringTasks &&
                                                    has('color', fields.percentageOfRecurringTasks)) ?
                                                    fields.percentageOfRecurringTasks.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.percentageOfRecurringTasks &&
                                                has('value', fields.percentageOfRecurringTasks) ?
                                                    fields.percentageOfRecurringTasks.value : '0'}

                                            item={
                                                fields.percentageOfRecurringTasks &&
                                                has('title', fields.percentageOfRecurringTasks) ?
                                                    fields.percentageOfRecurringTasks.title.toUpperCase() : ''}
                                            subItem={
                                                fields.percentageOfRecurringTasks &&
                                                has('subtitle', fields.percentageOfRecurringTasks) ?
                                                    fields.percentageOfRecurringTasks.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
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
                                                color: (fields.preferredTimeForService &&
                                                    has('color', fields.preferredTimeForService)) ?
                                                    fields.preferredTimeForService.color : '#FBAA1A',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'}}
                                            styleReportBlock={{width: 200}}
                                            upItem={
                                                fields.preferredTimeForService &&
                                                has('value', fields.preferredTimeForService) ?
                                                    fields.preferredTimeForService.value : '0'}
                                            item={
                                                fields.preferredTimeForService &&
                                                has('title', fields.preferredTimeForService) ?
                                                    fields.preferredTimeForService.title.toUpperCase() : ''}
                                            subItem={
                                                fields.preferredTimeForService &&
                                                has('subtitle', fields.preferredTimeForService) ?
                                                    fields.preferredTimeForService.subtitle.toUpperCase() :
                                                    '\u00a0'.toUpperCase()}
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
