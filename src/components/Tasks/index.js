import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import CompletedTasksHightChart from 'components/CompletedTasksHightChart';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import TasksHighlightsLeft from 'components/Tasks/Highlights/ContentLeft';
import TasksHighlightsRight from 'components/Tasks/Highlights/ContentRight';
import TasksCategoryBreakdown from 'components/Tasks/CategoryBreakdown';
import TasksHistogram from 'components/Tasks/Histogram';
import TasksStatusMap from 'components/Tasks/StatusMap';
// const ReactHighcharts = require('react-highcharts');
// const HighchartsMore = require('highcharts-more');
// HighchartsMore(ReactHighcharts.Highcharts);
// const HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);


function Tasks(props) {
    return (
        <div>
            <SubPanel
                title="TASKS"
                listCategories={props.listCategories}
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
                dateRangePicker={props.dateRangePicker}
                onRangeDate={props.onRangeDate}
            />
            <div styleName='root'>
                <Substrate title={'HIGHLIGHTS'}>
                    <div styleName="returning_subscribers" style={{flexWrap: 'wrap'}}>
                        <CompletedTasksHightChart data={props.getOverviewStats} />
                        <TasksHighlightsLeft data={props.tasksHighlights} />
                        <TasksHighlightsRight data={props.tasksHighlights} />
                    </div>
                </Substrate>
                <div styleName='users_container_empty'>
                    <div styleName='user_container_header'>CATEGORY BREAKDOWN OF COMPLETED TASKS</div>
                    <TasksCategoryBreakdown data={props.tasksCategoryBreakdown} />
                </div>
                <Substrate title={'COMPLETED TASKS'}>
                    <TasksHistogram data={props.completedTasksHistogram}/>
                </Substrate>
                <Substrate title={'TASK STATUS'}>
                    <TasksStatusMap
                        mapSettings={props.getDashboardSettings}
                        data={props.tasksLocationStatus}
                        value={props.tasks}
                        onChange={props.onChangeTaskStatusHandler}/>
                </Substrate>
            </div>
        </div>

    );
}

Tasks.propTypes = {
    getDashboardSettings: PropTypes.object.isRequired,
    tasksCategoryBreakdown: PropTypes.object.isRequired,
    tasksHighlights: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    getOverviewStats: PropTypes.object.isRequired,
    completedTasksHistogram: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    onChangeCategoryHandler: PropTypes.func.isRequired,
    tasksLocationStatus: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    onChangeTaskStatusHandler: PropTypes.func.isRequired
};

export default CSSModules(Tasks, styles);
