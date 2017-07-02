import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
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
import SubPanel from 'components/SubPanel';
import Highchart from 'react-highcharts/ReactHighcharts';
import FIcon from 'react-fontawesome';
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
            />
            <div styleName='root'>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>HIGHLIGHTS</div>
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
                </div>
                <div styleName='users_container_empty'>
                    <div styleName='user_container_header'>CATEGORY BREAKDOWN OF COMPLETED TASKS</div>

                    <div styleName="returning_subscribers">
                        <div style={{textAlign: 'center'}}>
                            <div styleName='container_header_sub'>NEW INSTALLATION</div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <CircularChart
                                    className={'install_decoder'}
                                    percentage={25}
                                    strokeWidth={5}
                                >
                                    <FIcon
                                        size={'4x'}
                                        name={'user-circle'}
                                        styleName='inline_items_fav'
                                        style={{color: '#58585a'}}
                                    />
                                    <div styleName="small_text">
                                        DECODER
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'install_antena'}
                                    percentage={45}
                                    strokeWidth={5}
                                >
                                    <FIcon
                                        size={'4x'}
                                        name={'user-circle'}
                                        styleName='inline_items_fav'
                                        style={{color: '#58585a'}}
                                    />
                                    <div styleName="small_text">
                                        ANTENA/SIGNAL
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'install_error'}
                                    percentage={30}
                                    strokeWidth={5}
                                >
                                    <FIcon
                                        size={'4x'}
                                        name={'user-circle'}
                                        styleName='inline_items_fav'
                                        style={{color: '#58585a'}}
                                    />
                                    <div styleName="small_text">
                                        OTHER/ERROR
                                    </div>
                                </CircularChart>
                            </div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <div styleName='container_header_sub'>REPAIR INSTALLATION</div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <CircularChart
                                    className={'repair_install_decoder'}
                                    percentage={25}
                                    strokeWidth={5}
                                >
                                    <FIcon
                                        size={'4x'}
                                        name={'user-circle'}
                                        styleName='inline_items_fav'
                                        style={{color: '#58585a'}}
                                    />
                                    <div styleName="small_text">
                                        DECODER
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'repair_install_antena'}
                                    percentage={35}
                                    strokeWidth={5}
                                >
                                    <FIcon
                                        size={'4x'}
                                        name={'user-circle'}
                                        styleName='inline_items_fav'
                                        style={{color: '#58585a'}}
                                    />
                                    <div styleName="small_text">
                                        ANTENA/SIGNAL
                                    </div>
                                </CircularChart>
                                <CircularChart
                                    className={'repair_install_error'}
                                    percentage={40}
                                    strokeWidth={5}
                                >
                                    <FIcon
                                        size={'4x'}
                                        name={'user-circle'}
                                        styleName='inline_items_fav'
                                        style={{color: '#58585a'}}
                                    />
                                    <div styleName="small_text">
                                        OTHER/ERROR
                                    </div>
                                </CircularChart>
                            </div>
                        </div>
                    </div>
                    <div styleName="returning_subscribers">
                        <div styleName="reparate_item_col" style={{
                            textAlign: 'center',
                            width: '10%',
                            backgroundColor: '#8f9092'
                        }}>
                            <div styleName="small_text_panel">REPORTED</div>
                            <div styleName="small_text_panel">COMPLETED</div>
                        </div>
                        <div styleName="reparate_item_col" style={{width: '15%', backgroundColor: '#58585a'}}>
                            <div styleName="small_text_panel">1 EVERY MINUTE</div>
                            <div styleName="small_text_panel">1 EVERY 20 MINUTES</div>
                        </div>
                        <div styleName="reparate_item_col" style={{width: '15%', backgroundColor: '#58585a'}}>
                            <div styleName="small_text_panel">1 EVERY HOUR</div>
                            <div styleName="small_text_panel">1 EVERY HOUR</div>
                        </div>
                        <div styleName="reparate_item_col" style={{width: '15%', backgroundColor: '#58585a'}}>
                            <div styleName="small_text_panel">1 EVERY 2 HOURS</div>
                            <div styleName="small_text_panel">1 EVERY 25 MINUTES</div>
                        </div>
                        <div styleName="reparate_item_col" style={{width: '15%', backgroundColor: '#58585a'}}>
                            <div styleName="small_text_panel">1 EVERY 10 DAYS</div>
                            <div styleName="small_text_panel">1 EVERY 5 DAYS</div>
                        </div>
                        <div styleName="reparate_item_col" style={{width: '15%', backgroundColor: '#58585a'}}>
                            <div styleName="small_text_panel">1 EVERY 30 DAYS</div>
                            <div styleName="small_text_panel">1 EVERY 15 DAYS</div>
                        </div>
                        <div styleName="reparate_item_col" style={{width: '15%', backgroundColor: '#58585a'}}>
                            <div styleName="small_text_panel">1 EVERY 6 DAYS</div>
                            <div styleName="small_text_panel">1 EVERY 7 DAYS</div>
                        </div>
                    </div>
                </div>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>COMPLETED TASKS</div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <LegendRow
                           color={'#c6d92e'}
                           title={'Installations'}
                        />
                        <LegendRow
                            color={'#6ebe46'}
                            title={'Repair Services'}
                        />
                    </div>
                    <Highchart config={COMPLETED_TASKS_LINE} />
                </div>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>TASK STATUS</div>
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
                </div>
            </div>
        </div>

    );
}

Tasks.propTypes = {
    onChangeCategoryHandler: PropTypes.func.isRequired,
    onChangeTaskStatusHandler: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired
};

export default CSSModules(Tasks, styles);

