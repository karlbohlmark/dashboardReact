import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import CompletedTasksHightChart from 'components/CompletedTasksHightChart';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import TasksHighlightsLeft from 'components/TasksHighlights/ContentLeft';
import TasksHighlightsRight from 'components/TasksHighlights/ContentRight';
import TasksHistogram from 'components/TasksHistogram';
import TasksStatusMap from 'components/TasksStatusMap';
// const ReactHighcharts = require('react-highcharts');
// const HighchartsMore = require('highcharts-more');
// HighchartsMore(ReactHighcharts.Highcharts);
// const HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);
import CircularChart from './CircularChart';


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
                    <div styleName="returning_subscribers">
                        <CompletedTasksHightChart data={props.getOverviewStats} />
                        <TasksHighlightsLeft data={props.tasksHighlights} />
                        <TasksHighlightsRight data={props.tasksHighlights} />
                    </div>
                </Substrate>
                <div styleName='users_container_empty'>
                    <div styleName='user_container_header'>CATEGORY BREAKDOWN OF COMPLETED TASKS</div>

                    <div styleName="returning_subscribers">
                        <div styleName="reparate_item_col" style={{
                            textAlign: 'center',
                            height: '72px',
                            display: 'flex',
                            width: '10%',
                            flexDirection: 'column',
                            alignSelf: 'flex-end',
                            backgroundColor: '#8f9092'
                        }}>
                            <div styleName="small_text_panel">REPORTED</div>
                            <div styleName="small_text_panel">COMPLETED</div>
                        </div>
                        <div style={{
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div styleName='container_header_sub'>NEW INSTALLATION</div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                zIndex: 1
                            }}>
                                <CircularChart
                                    className={'install_decoder'}
                                    percentage={25}
                                    strokeWidth={5}
                                    upder={
                                        <div styleName="reparate_item_col"
                                             style={{width: '100%', backgroundColor: '#58585a'}}>
                                            <div styleName="small_text_panel">1 EVERY MINUTE</div>
                                            <div styleName="small_text_panel">1 EVERY 20 MINUTES</div>
                                        </div>
                                    }
                                >
                                    <div styleName="new-installation-decoder" />
                                    <div styleName="small_text">
                                        DECODER
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'install_antena'}
                                    percentage={45}
                                    strokeWidth={5}
                                    upder={
                                        <div styleName="reparate_item_col"
                                             style={{width: '100%', backgroundColor: '#58585a'}}>
                                            <div styleName="small_text_panel">1 EVERY HOUR</div>
                                            <div styleName="small_text_panel">1 EVERY HOUR</div>
                                        </div>
                                    }
                                >
                                    <div styleName="new-installation-antenna" />
                                    <div styleName="small_text">
                                        ANTENA/SIGNAL
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'install_error'}
                                    percentage={30}
                                    strokeWidth={5}
                                    upder={
                                        <div styleName="reparate_item_col"
                                             style={{width: '100%', backgroundColor: '#58585a'}}>
                                            <div styleName="small_text_panel">1 EVERY 2 HOURS</div>
                                            <div styleName="small_text_panel">1 EVERY 25 MINUTES</div>
                                        </div>
                                    }
                                >
                                    <div styleName="new-installation-other" />
                                    <div styleName="small_text">
                                        OTHER/ERROR
                                    </div>
                                </CircularChart>
                            </div>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                zIndex: 0,
                                left: 0,
                                bottom: 0,
                                backgroundColor: 'rgb(88, 88, 90)',
                                height: '72px'}}>

                            </div>
                        </div>
                        <div style={{
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div styleName='container_header_sub'>REPAIR INSTALLATION</div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                zIndex: 1
                            }}>
                                <CircularChart
                                    className={'repair_install_decoder'}
                                    percentage={25}
                                    strokeWidth={5}
                                    upder={
                                        <div styleName="reparate_item_col"
                                             style={{width: '100%', backgroundColor: '#58585a'}}>
                                            <div styleName="small_text_panel">1 EVERY 10 DAYS</div>
                                            <div styleName="small_text_panel">1 EVERY 5 DAYS</div>
                                        </div>
                                    }
                                >
                                    <div styleName="repair-decoder" />
                                    <div styleName="small_text">
                                        DECODER
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'repair_install_antena'}
                                    percentage={35}
                                    strokeWidth={5}
                                    upder={
                                        <div styleName="reparate_item_col"
                                             style={{width: '100%', backgroundColor: '#58585a'}}>
                                            <div styleName="small_text_panel">1 EVERY 30 DAYS</div>
                                            <div styleName="small_text_panel">1 EVERY 15 DAYS</div>
                                        </div>
                                    }
                                >
                                    <div styleName="repair-antenna" />
                                    <div styleName="small_text">
                                        ANTENA/SIGNAL
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'repair_install_error'}
                                    percentage={40}
                                    strokeWidth={5}
                                    upder={
                                        <div styleName="reparate_item_col"
                                             style={{width: '100%', backgroundColor: '#58585a'}}>
                                            <div styleName="small_text_panel">1 EVERY 6 DAYS</div>
                                            <div styleName="small_text_panel">1 EVERY 7 DAYS</div>
                                        </div>
                                    }
                                >
                                    <div styleName="repair-other" />
                                    <div styleName="small_text">
                                        OTHER/ERROR
                                    </div>
                                </CircularChart>
                            </div>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                zIndex: 0,
                                left: 0,
                                bottom: 0,
                                backgroundColor: 'rgb(88, 88, 90)',
                                height: '72px'}}>

                            </div>
                        </div>
                    </div>
                </div>
                <Substrate title={'COMPLETED TASKS'}>
                    <TasksHistogram data={props.completedTasksHistogram}/>
                </Substrate>
                <Substrate title={'TASK STATUS'}>
                    <TasksStatusMap
                        dataTasksLocationStatus={props.tasksLocationStatus}
                        uiTasks={props.tasks}
                        onUiTasksHandler={props.onChangeTaskStatusHandler}/>
                </Substrate>
            </div>
        </div>

    );
}

Tasks.propTypes = {
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

