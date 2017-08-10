import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    REVENUE_LINE,
    COMPLETED_TASKS_LINE
} from 'models/highchartConfig';
import CompletedTasksHightChart from 'components/CompletedTasksHightChart';
import OverviewTaskStatistics from 'components/Overview/TaskStatistics';
import OverviewTaskLiveStatistics from 'components/Overview/TaskStatistics/Live';
import OverviewPaymentStatistics from 'components/Overview/PaymentStatistics';
import OverviewUsersStatistics from 'components/Overview/UsersStatistics';
import OverviewCategoryStatistics from 'components/Overview/CategoryStatistics';

// import OverviewBlockStats from 'components/Overview/BlockStats';
// import GofundisHightChart from 'components/GoFundis/HightChart';
import TasksHistogram from 'components/Overview/PaymentStatistics/Histogram';
import TasksStatusMap from 'components/Tasks/StatusMap';
import CategoriesMap from 'components/CategoriesMap';
import UsersMap from 'components/UsersMap';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';

function Overview(props) {

    return (
        <div>
            <SubPanel
                title="OVERVIEW"
                listCategories={props.listCategories}
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
                dateRangePicker={props.dateRangePicker}
                onRangeDate={props.onRangeDate}
            />
            <div styleName='root'>
                <div>
                    <div styleName='category_panel_title'>Task statistics</div>
                    <div styleName="returning_subscribers" style={{flexWrap: 'wrap'}}>
                        <CompletedTasksHightChart data={props.getOverviewStats} />
                        <OverviewTaskStatistics data={props.getOverviewStats}/>
                        <div style={{
                            backgroundColor: '#fff',
                            padding: '15px',
                            margin: '10px',
                            width: '50%'
                        }}>
                            <div style={{
                                fontSize: '16px',
                                fontWeight: 300,
                                textDecoration: 'underline'
                            }}>{'COMPLETED TASKS'}</div>
                            <TasksHistogram
                                data={props.completedTasksHistogram}
                                model={COMPLETED_TASKS_LINE}
                            />
                        </div>
                    </div>
                </div>
                <div style={{
                    margin: '15px'
                }}>
                    <div style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'}}>
                        LIVE STATUS
                        <div style={{
                            marginLeft: 10,
                            width: 8,
                            height: 8,
                            backgroundColor: '#6ebe46',
                            borderRadius: '50%'
                        }} />
                    </div>
                    <OverviewTaskLiveStatistics data={props.getLiveStats}/>
                </div>
                <Substrate title={'TASK STATUS'}>
                    <TasksStatusMap
                        data={props.tasksLocationStatus}
                        value={props.tasks}
                        onChange={props.onChangeTaskStatusHandler}/>
                </Substrate>

                <div>
                    <div styleName='category_panel_title'>Users statistics</div>
                    <div styleName="returning_subscribers" style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <OverviewUsersStatistics data={props.getUserStats}/>
                    </div>
                </div>
                <Substrate title={'USERS'}>
                    <UsersMap
                        data={props.userLocation}
                        value={props.users}
                        onChange={props.onUserLocationHandler}/>
                </Substrate>

                <div>
                    <div styleName='category_panel_title'>Category statistics</div>
                    <div styleName="returning_subscribers" style={{flexWrap: 'wrap'}}>

                    </div>
                </div>
                <Substrate>
                    {/*<OverviewCategoryStatistics data={props.getCategoryStatistics} />*/}
                </Substrate>
                <Substrate title={'CATEGORIES'}>
                    <CategoriesMap
                        options={props.listCategories}
                        data={props.tasksLocationByCategory}
                        value={props.categories}
                        onChange={props.onChangeCategoryHandler}/>
                </Substrate>

                <div>
                    <div styleName='category_panel_title'>Payment statistics</div>
                    <div styleName="returning_subscribers" style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <OverviewPaymentStatistics data={props.getPaymentStatistics}/>
                    </div>
                    <Substrate title={'REVENUE'}>
                        <TasksHistogram
                            data={props.getRevenueHistogram}
                            model={REVENUE_LINE}
                        />
                    </Substrate>
                </div>
            </div>
        </div>
    );
}

Overview.propTypes = {
    getCategoryStatistics: PropTypes.object.isRequired,
    getPaymentStatistics: PropTypes.object.isRequired,
    getLiveStats: PropTypes.object.isRequired,
    getUserStats: PropTypes.object.isRequired,
    getRevenueHistogram: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    getOverviewStats: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    completedTasksHistogram: PropTypes.object.isRequired,
    userLocation: PropTypes.object.isRequired,
    tasksLocationByCategory: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    onChangeCategoryHandler: PropTypes.func.isRequired,
    tasksLocationStatus: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    onChangeTaskStatusHandler: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    onUserLocationHandler: PropTypes.func.isRequired,
    onRangeDate: PropTypes.func.isRequired

};

export default CSSModules(Overview, styles);
