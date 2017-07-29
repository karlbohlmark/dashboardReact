import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';

import GoFundisMap from 'components/GoFundisMap';
import GoFundisHightChart from 'components/GoFundisHightChart';
import GoFundisStatuses from 'components/GoFundisStatuses';
import GoFundisHighlights from 'components/GoFundisHighlights';
import GoFundisChartsRight from 'components/GoFundisCharts/ContentRight';
import GoFundisChartsLeft from 'components/GoFundisCharts/ContentLeft';


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
                        <GoFundisChartsLeft data={props.goFundisCharts} />
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
