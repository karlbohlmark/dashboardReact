import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    merge,
    reduce,
    map,
    toString
} from 'lodash/fp';
import {
    COMPLETED_TASKS
} from 'models/highchartConfig';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import Highchart from 'react-highcharts/ReactHighcharts';
import TasksHistogram from 'components/TasksHistogram';
import TasksStatusMap from 'components/TasksStatusMap';
// const ReactHighcharts = require('react-highcharts');
// const HighchartsMore = require('highcharts-more');
// HighchartsMore(ReactHighcharts.Highcharts);
// const HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);
import LegendRow from 'components/ListItem/LegendRow';
import ListRowReverse from 'components/ListItem/ListRowReverse';
import CircularChart from './CircularChart';
import Placeholder from 'components/Placeholder';


function Tasks(props) {
    return (
        <div>
            <SubPanel
                title="TASKS"
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
                dateRangePicker={props.dateRangePicker}
                onRangeDate={props.onRangeDate}
            />
            <div styleName='root'>
                <Substrate title={'HIGHLIGHTS'}>
                    <div styleName="returning_subscribers">
                        <div style={{textAlign: 'center'}}>
                            <div styleName='sub_container_header'>COMPLETED TASKS</div>
                            {props.getOverviewStats.errors.cata({
                                Nothing: () => props.getOverviewStats.results.cata({
                                    Nothing: () => (
                                        <Placeholder
                                            style={{ width: 200, height: 200}}
                                            busy={props.getOverviewStats.busy}
                                            size={[ '100%', '100%' ]} />
                                    ),
                                    Just: fields => (
                                        <div styleName="list_column_highcharts" style={{margin: 5}}>
                                            <Highchart config={merge(
                                                COMPLETED_TASKS,
                                                {title: {
                                                    text: toString(reduce(
                                                        (sum, n) => (sum + n), 0,
                                                        map(field => (parseFloat(field.completedTasks)),
                                                            fields.categoryTasks)))
                                                },
                                                    series: [{
                                                        data: map(field => (
                                                            [field.category.name,
                                                                parseFloat(field.completedTasks)]
                                                        ), fields.categoryTasks)
                                                    }]
                                                }
                                            )} />
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent:
                                                    'space-around'
                                            }}>
                                                {
                                                    fields.categoryTasks.map((field, index) => (
                                                        <LegendRow
                                                            key={index}
                                                            color={COMPLETED_TASKS.colors[index]}
                                                            title={field.category.name}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }),
                                Just: errors => (
                                    <div>{errors}</div>
                                )
                            })}
                        </div>
                        <div styleName="list_column" style={{marginLeft: 20}}>
                            <ListRowReverse
                                rightItem={165}
                                item={'NUMBER OF TASKS REPORTED'}
                                subItem={'(FOR SELECTED PERIOD)'}
                            />
                            <ListRowReverse
                                rightItem={38}
                                item={'ASSIGNED TASKS'}
                                subItem={'(ASSIGNED TO GOFUNDI BUT PENDING COMPLETION)'}
                            />
                            <ListRowReverse
                                rightItem={18}
                                item={'NUMBER OF DECLINES'}
                                subItem={'(FOR SELECTED PERIOD)'}
                            />
                            <ListRowReverse
                                styleRightItem={{color: '#ed1967'}}
                                rightItem={'45 sec'}
                                item={'AVERAGE TIME FOR ASSINMENT'}
                                subItem={'(FROM REQUESTED ACCEPTED)'}
                            />
                        </div>
                        <div styleName="list_column" style={{marginLeft: 20}}>
                            <ListRowReverse
                                rightItem={2}
                                item={'UNASSIGNED TASKS'}
                                subItem={'(TASK NOT YET ACCEPTED BY GOFUNDI)'}
                            />
                            <ListRowReverse
                                rightItem={'15%'}
                                item={'INCREASE SINCE LAST MONTH'}
                                subItem={'(TASKS COMPLETED)'}
                            />
                            <ListRowReverse
                                rightItem={5}
                                item={'NUMBER OF CANCELLATIONS'}
                                subItem={'(FOR SELECTED PERIOD)'}
                            />
                            <ListRowReverse
                                styleRightItem={{color: '#ed1967'}}
                                rightItem={'1 hr'}
                                item={'AVERAGE TIME FOR COMPLETION'}
                                subItem={'(FROM REQUESTED TO COMPLETED)'}
                            />
                        </div>
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

