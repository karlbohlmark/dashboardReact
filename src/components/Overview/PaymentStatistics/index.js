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
                                    styleChildren={{
                                        backgroundColor: (fields.totalTaskValue.color &&
                                            !isNull(fields.totalTaskValue.color)) ?
                                            fields.totalTaskValue.color : '#07944a'
                                    }}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 200}}
                                    upItem={
                                        fields.totalTaskValue &&
                                        !isNull(fields.totalTaskValue.value) ?
                                            fields.totalTaskValue.value : '0'}
                                    item={
                                        fields.totalTaskValue &&
                                        !isNull(fields.totalTaskValue.title) ?
                                            fields.totalTaskValue.title.toUpperCase() : ''}
                                    // subItem={'(IN AVERAGE PER GOFUNDI)'}
                                >
                                    <div styleName="line-chart" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{
                                        backgroundColor: (fields.totalGoFundiEarnings.color &&
                                            !isNull(fields.totalGoFundiEarnings.color)) ?
                                            fields.totalGoFundiEarnings.color : '#07944a'
                                    }}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 200}}
                                    upItem={
                                        fields.totalGoFundiEarnings &&
                                        !isNull(fields.totalGoFundiEarnings.value) ?
                                            fields.totalGoFundiEarnings.value : '0'}
                                    item={
                                        fields.totalGoFundiEarnings &&
                                        !isNull(fields.totalGoFundiEarnings.title) ?
                                            fields.totalGoFundiEarnings.title.toUpperCase() : ''}
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
                                    styleChildren={{
                                        backgroundColor: (fields.paidOutTasks.color &&
                                            !isNull(fields.paidOutTasks.color)) ?
                                            fields.paidOutTasks.color : '#07944a'
                                    }}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 165}}
                                    upItem={
                                        fields.paidOutTasks &&
                                        !isNull(fields.paidOutTasks.value) ?
                                            fields.paidOutTasks.value : '0'}
                                    item={
                                        fields.paidOutTasks &&
                                        !isNull(fields.paidOutTasks.title) ?
                                            fields.paidOutTasks.title.toUpperCase() : ''}
                                    // subItem={'(IN AVERAGE PER GOFUNDI)'}
                                >
                                    <div styleName="line-chart" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{
                                        backgroundColor: (fields.pendingPayments.color &&
                                            !isNull(fields.pendingPayments.color)) ?
                                            fields.pendingPayments.color : '#07944a'
                                    }}
                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                    styleReportBlock={{width: 165}}
                                    upItem={
                                        fields.pendingPayments &&
                                        !isNull(fields.pendingPayments.value) ?
                                            fields.pendingPayments.value : '0'}
                                    item={
                                        fields.pendingPayments &&
                                        !isNull(fields.pendingPayments.title) ?
                                            fields.pendingPayments.title.toUpperCase() : ''}
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
