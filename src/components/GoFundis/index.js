import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    NUMBER_OF_GOFUNDIS
} from 'models/highchartConfig';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import LegendRow from 'components/ListItem/LegendRow';
import Highchart from 'react-highcharts/ReactHighcharts';
import GoFundisMap from 'components/GoFundisMap';
import GoFundisHightChart from 'components/GoFundisHightChart';
import GoFundisStatuses from 'components/GoFundisStatuses';
import GoFundisHighlights from 'components/GoFundisHighlights';
import GoFundisChartsRight from 'components/GoFundisCharts/ContentRight';
import Placeholder from 'components/Placeholder';
import {
    merge
} from 'lodash/fp';

function GoFundis(props) {
    return (
        <div>
            <SubPanel
                title="GOFUNDIS"
                listCategories={props.listCategories}
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
                dateRangePicker={props.dateRangePicker}
                onRangeDate={props.onRangeDate}
            />
            <div styleName='root'>
                <Substrate title={'HIGHLIGHTS'}>
                    <div styleName="returning_subscribers">
                        <GoFundisHightChart data={props.getOverviewStats} />
                        <GoFundisStatuses data={props.goFundisStatuses} />
                        <GoFundisHighlights data={props.goFundisStatuses} />
                    </div>
                </Substrate>
                <div styleName='users_container_empty'>
                    <div styleName="returning_subscribers">
                        <div style={{ backgroundColor: '#fff', padding: 10, width: '69%'}}>
                            <div styleName='sub_container_header'>NUMBER OF GOFUNDIS</div>

                            {props.goFundisCharts.errors.cata({
                                Nothing: () => props.goFundisCharts.results.cata({
                                    Nothing: () => (
                                        <Placeholder busy={props.goFundisCharts.busy} size={[ '100%', '300px' ]} />
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
                        <GoFundisChartsRight data={props.goFundisCharts} />
                    </div>
                </div>
                <Substrate title={'ACTIVE GO FUNDIS'}>
                    <GoFundisMap
                        data={props.activeGoFundis}
                        goFundis={props.goFundis}
                        onOfflineStatusHandler={props.onOfflineStatusHandler}
                        onOnlineStatusHandler={props.onOnlineStatusHandler}
                        onAllStatusHandler={props.onAllStatusHandler}
                    />

                </Substrate>
            </div>
        </div>
    );
}

GoFundis.propTypes = {
    goFundisCharts: PropTypes.object.isRequired,
    goFundisStatuses: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    getOverviewStats: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired,
    goFundis: PropTypes.object.isRequired,
    activeGoFundis: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,

    onChangeCategoryHandler: PropTypes.func.isRequired,
    onOfflineStatusHandler: PropTypes.func.isRequired,
    onOnlineStatusHandler: PropTypes.func.isRequired,
    onAllStatusHandler: PropTypes.func.isRequired
};

export default CSSModules(GoFundis, styles);
