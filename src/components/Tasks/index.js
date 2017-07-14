import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    merge
} from 'lodash/fp';
import {
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED
} from 'models/googlemap';
import {
    COMPLETED_TASKS,
    COMPLETED_TASKS_LINE
} from 'models/highchartConfig';
import {
    capitalize
} from 'utils';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import Highchart from 'react-highcharts/ReactHighcharts';
// const ReactHighcharts = require('react-highcharts');
// const HighchartsMore = require('highcharts-more');
// HighchartsMore(ReactHighcharts.Highcharts);
// const HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);
import LegendRow from 'components/ListItem/LegendRow';
import ListRowReverse from 'components/ListItem/ListRowReverse';
import CircularChart from './CircularChart';
import SelectBoxItem from 'components/SelectBoxItem';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import dataMapMarkerTasks from 'data/dataMapMarkerTask';


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
                            <div styleName="list_column_highcharts">
                                <Highchart config={COMPLETED_TASKS} />
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <LegendRow
                                        color={'#c6d92e'}
                                        title={'Installations'}
                                    />
                                    <LegendRow
                                        color={'#6ebe46'}
                                        title={'Repair Services'}
                                    />
                                </div>
                            </div>
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
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        {
                            props.completedTasksHistogram.series.map((field, index) => (
                                <LegendRow
                                    key={index}
                                    color={COMPLETED_TASKS_LINE.colors[index]}
                                    title={field.name}
                                />
                            ))
                        }
                    </div>
                    <Highchart config={merge(props.completedTasksHistogram, COMPLETED_TASKS_LINE)} />
                </Substrate>
                <Substrate title={'TASK STATUS'}>
                    <SelectBoxItem
                        options={[
                            { value: TASK_STATYS_COMPLETED, label: capitalize(TASK_STATYS_COMPLETED) },
                            { value: TASK_STATYS_ASSIGNED, label: capitalize(TASK_STATYS_ASSIGNED) },
                            { value: TASK_STATYS_UNASSIGNED, label: capitalize(TASK_STATYS_UNASSIGNED) },
                            { value: TASK_STATYS_DECLINED, label: capitalize(TASK_STATYS_DECLINED) },
                            { value: TASK_STATYS_CANCELLED, label: capitalize(TASK_STATYS_CANCELLED) }
                        ]}
                        onChange={props.onChangeTaskStatusHandler}
                        value={props.tasks}

                    />
                    <GoogleMapTasks
                        tasks={props.tasks}
                        data={dataMapMarkerTasks}
                    />
                </Substrate>
            </div>
        </div>

    );
}

Tasks.propTypes = {
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired,
    onChangeCategoryHandler: PropTypes.func.isRequired,
    onChangeTaskStatusHandler: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired
};

export default CSSModules(Tasks, styles);

