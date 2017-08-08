import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import CompletedTasksHightChart from 'components/CompletedTasksHightChart';
import OverviewBlockStats from 'components/Overview/BlockStats';
import GofundisHightChart from 'components/GoFundis/HightChart';
import TasksHistogram from 'components/Tasks/Histogram';
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
                <div styleName='users_container_empty'>
                    <div styleName="returning_subscribers" style={{flexWrap: 'wrap'}}>
                        <OverviewBlockStats data={props.getOverviewStats}/>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around'
                        }}>
                            <CompletedTasksHightChart data={props.getOverviewStats} />
                            <GofundisHightChart data={props.getOverviewStats} />
                        </div>
                    </div>
                </div>
                <Substrate title={'USERS'}>
                    <UsersMap
                        data={props.userLocation}
                        value={props.users}
                        onChange={props.onUserLocationHandler}/>
                </Substrate>
                <Substrate title={'COMPLETED TASKS'}>
                    <TasksHistogram data={props.completedTasksHistogram}/>
                </Substrate>
                <Substrate title={'TASK STATUS'}>
                    <TasksStatusMap
                        data={props.tasksLocationStatus}
                        value={props.tasks}
                        onChange={props.onChangeTaskStatusHandler}/>
                </Substrate>
                <Substrate title={'CATEGORIES'}>
                    <CategoriesMap
                        options={props.listCategories}
                        data={props.tasksLocationByCategory}
                        value={props.categories}
                        onChange={props.onChangeCategoryHandler}/>
                </Substrate>
            </div>
        </div>
    );
}

Overview.propTypes = {
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