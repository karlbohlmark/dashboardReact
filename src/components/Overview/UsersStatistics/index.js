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
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end'
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
                                                } name={'star'} />
                                            ) : '0'}

                                    item={
                                        fields.averageRating &&
                                        !isNull(fields.averageRating.title) ?
                                            fields.averageRating.title.toUpperCase() : ''}
                                />
                            </div>
                        )
                    }),
                    Just: errors => (
                        <div>{errors}</div>
                    )
                })}
            </div>
            {/*<div styleName="list_column" style={{margin: 10}}>*/}
                {/*{props.data.errors.cata({*/}
                    {/*Nothing: () => props.data.results.cata({*/}
                        {/*Nothing: () => (*/}
                            {/*<Placeholder*/}
                                {/*style={{width: 200, height: 190}}*/}
                                {/*busy={props.data.busy}*/}
                                {/*size={[ '220px', '190px' ]} />*/}
                        {/*),*/}
                        {/*Just: fields => (*/}
                            {/*<div>*/}
                                {/*<ReportRow*/}
                                    {/*styleChildren={{*/}
                                        {/*backgroundColor: (fields.paidOutTasks.color &&*/}
                                            {/*!isNull(fields.paidOutTasks.color)) ?*/}
                                            {/*fields.paidOutTasks.color : '#07944a'*/}
                                    {/*}}*/}
                                    {/*styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}*/}
                                    {/*styleReportBlock={{width: 165}}*/}
                                    {/*upItem={*/}
                                        {/*fields.paidOutTasks &&*/}
                                        {/*!isNull(fields.paidOutTasks.value) ?*/}
                                            {/*fields.paidOutTasks.value : '0'}*/}
                                    {/*item={*/}
                                        {/*fields.paidOutTasks &&*/}
                                        {/*!isNull(fields.paidOutTasks.title) ?*/}
                                            {/*fields.paidOutTasks.title.toUpperCase() : ''}*/}
                                    {/*// subItem={'(IN AVERAGE PER GOFUNDI)'}*/}
                                {/*>*/}
                                    {/*<div styleName="line-chart" />*/}
                                {/*</ReportRow>*/}
                                {/*<ReportRow*/}
                                    {/*styleChildren={{*/}
                                        {/*backgroundColor: (fields.pendingPayments.color &&*/}
                                            {/*!isNull(fields.pendingPayments.color)) ?*/}
                                            {/*fields.pendingPayments.color : '#07944a'*/}
                                    {/*}}*/}
                                    {/*styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}*/}
                                    {/*styleReportBlock={{width: 165}}*/}
                                    {/*upItem={*/}
                                        {/*fields.pendingPayments &&*/}
                                        {/*!isNull(fields.pendingPayments.value) ?*/}
                                            {/*fields.pendingPayments.value : '0'}*/}
                                    {/*item={*/}
                                        {/*fields.pendingPayments &&*/}
                                        {/*!isNull(fields.pendingPayments.title) ?*/}
                                            {/*fields.pendingPayments.title.toUpperCase() : ''}*/}
                                    {/*// subItem={'(TASKS COMPLETED)'}*/}
                                {/*>*/}
                                    {/*<div styleName="line-chart" />*/}
                                {/*</ReportRow>*/}
                            {/*</div>*/}
                        {/*)*/}
                    {/*}),*/}
                    {/*Just: errors => (*/}
                        {/*<div>{errors}</div>*/}
                    {/*)*/}
                {/*})}*/}
            {/*</div>*/}
        </div>
    );
}

OverviewUsersStatistics.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewUsersStatistics, styles);
