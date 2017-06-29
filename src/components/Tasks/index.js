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
import Highchart from 'react-highcharts/ReactHighcharts';
import FIcon from 'react-fontawesome';
// var ReactHighcharts = require('react-highcharts');
// var HighchartsMore = require('highcharts-more');
// HighchartsMore(ReactHighcharts.Highcharts);
// var HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);
import CircularProgressbar from 'react-circular-progressbar';
import SelectBoxItem from 'components/SelectBoxItem';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import dataMapMarkerTasks from 'data/dataMapMarkerTask';

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();


function Tasks(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>HIGHLIGHTS</div>
                <div styleName="returning_subscribers">
                    <div style={{textAlign: 'center'}}>
                        <div styleName='sub_container_header'>COMPLETED TASKS</div>
                        <div styleName="list_column_highcharts">
                            <Highchart config={{
                                credits: {
                                    enabled: false
                                },
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: 0,
                                    plotShadow: false,
                                    width: 180,
                                    height: 180
                                },
                                colors: ['#6ebe46', '#c6d92e'],
                                title: {
                                    text: '<strong>120</strong>',
                                    style: { color: '#58585a', fontSize: '18px' },
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    y: 7
                                },
                                tooltip: {
                                    // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                },
                                plotOptions: {
                                    pie: {
                                        dataLabels: {
                                            enabled: false,
                                            distance: -50,
                                            style: {
                                                fontWeight: 'bold',
                                                color: 'white'
                                            }
                                        },
                                        startAngle: 0,
                                        endAngle: 360,
                                        center: ['50%', '50%']
                                    }
                                },
                                series: [{
                                    type: 'pie',
                                    name: '',
                                    innerSize: '70%',
                                    data: [
                                        ['Repair Services', 40.00],
                                        ['Installations', 60.00]
                                    ]
                                }]
                            }} />
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                                <div styleName="reparate_item">
                                    <div style={{backgroundColor: '#c6d92e', width: 15, height: 15, marginRight: 7}} />
                                    <div style={{fontSize: '12px', fontWeight: 300}}>Installations</div>
                                </div>
                                <div styleName="reparate_item">
                                    <div style={{backgroundColor: '#6ebe46', width: 15, height: 15, marginRight: 7}} />
                                    <div style={{fontSize: '12px', fontWeight: 300}}>Repair Services</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div styleName="list_column" style={{marginLeft: 20}}>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number">165</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> NUMBER OF TASKS REPORTED</div>
                                <div styleName="list_column_itemSmall">(FOR SELECTED PERIOD)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number">38</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> ASSIGNED TASKS</div>
                                <div styleName="list_column_itemSmall">
                                    (ASSIGNED TO GOFUNDI BUT PENDING COMPLETION)
                                </div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number">18</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> NUMBER OF DECLINES</div>
                                <div styleName="list_column_itemSmall">(FOR SELECTED PERIOD)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number_pink">45 sec</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> AVERAGE TIME FOR ASSINMENT</div>
                                <div styleName="list_column_itemSmall">(FROM REQUESTED ACCEPTED)</div>
                            </div>
                        </div>
                    </div>
                    <div styleName="list_column" style={{marginLeft: 20}}>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number">2</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> UNASSIGNED TASKS</div>
                                <div styleName="list_column_itemSmall">(TASK NOT YET ACCEPTED BY GOFUNDI)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number">15%</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> INCREASE SINCE LAST MONTH</div>
                                <div styleName="list_column_itemSmall">(TASKS COMPLETED)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number">5</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> NUMBER OF CANCELLATIONS</div>
                                <div styleName="list_column_itemSmall">(FOR SELECTED PERIOD)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse" style={{marginTop: 5, marginBottom: 5}}>
                            <div styleName="list_item_number_pink">1 hr</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> AVERAGE TIME FOR COMPLETION</div>
                                <div styleName="list_column_itemSmall">(FROM REQUESTED TO COMPLETED)</div>
                            </div>
                        </div>
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
                            <div styleName="outer" className='install_decoder' >
                                <CircularProgressbar
                                    initialAnimation
                                    percentage={25}
                                    textForPercentage={(pct) => ``}
                                    strokeWidth={5}
                                />
                                <div styleName="inner">
                                    <div>
                                        <FIcon
                                            size={'4x'}
                                            name={'user-circle'}
                                            styleName='inline_items_fav'
                                            style={{color: '#58585a'}}
                                        />
                                        <div styleName="small_text">
                                            DECODER
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div styleName="outer" className='install_antena' >
                                <CircularProgressbar
                                    initialAnimation
                                    percentage={45}
                                    textForPercentage={(pct) => ``}
                                    strokeWidth={5}
                                />
                                <div styleName="inner">
                                    <div>
                                        <FIcon
                                            size={'4x'}
                                            name={'user-circle'}
                                            styleName='inline_items_fav'
                                            style={{color: '#58585a'}}
                                        />
                                        <div styleName="small_text">
                                            ANTENA/SIGNAL
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div styleName="outer" className='install_error' >
                                <CircularProgressbar
                                    initialAnimation
                                    percentage={30}
                                    textForPercentage={(pct) => ``}
                                    strokeWidth={5}
                                />
                                <div styleName="inner">
                                    <div>
                                        <FIcon
                                            size={'4x'}
                                            name={'user-circle'}
                                            styleName='inline_items_fav'
                                            style={{color: '#58585a'}}
                                        />
                                        <div styleName="small_text">
                                            OTHER/ERROR
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <div styleName='container_header_sub'>REPAIR INSTALLATION</div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div styleName="outer" className='repair_install_decoder' >
                                <CircularProgressbar
                                    initialAnimation
                                    percentage={25}
                                    textForPercentage={(pct) => ``}
                                    strokeWidth={5}
                                />
                                <div styleName="inner">
                                    <div>
                                        <FIcon
                                            size={'4x'}
                                            name={'user-circle'}
                                            styleName='inline_items_fav'
                                            style={{color: '#58585a'}}
                                        />
                                        <div styleName="small_text">
                                            DECODER
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div styleName="outer" className='repair_install_antena' >
                                <CircularProgressbar
                                    initialAnimation
                                    percentage={35}
                                    textForPercentage={(pct) => ``}
                                    strokeWidth={5}
                                />
                                <div styleName="inner">
                                    <div>
                                        <FIcon
                                            size={'4x'}
                                            name={'user-circle'}
                                            styleName='inline_items_fav'
                                            style={{color: '#58585a'}}
                                        />
                                        <div styleName="small_text">
                                            ANTENA/SIGNAL
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div styleName="outer" className='repair_install_error' >
                                <CircularProgressbar
                                    initialAnimation
                                    percentage={40}
                                    textForPercentage={(pct) => ``}
                                    strokeWidth={5}
                                />
                                <div styleName="inner">
                                    <div>
                                        <FIcon
                                            size={'4x'}
                                            name={'user-circle'}
                                            styleName='inline_items_fav'
                                            style={{color: '#58585a'}}
                                        />
                                        <div styleName="small_text">
                                            OTHER/ERROR
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div styleName='users_container'>
                <div styleName='user_container_header'>COMPLETED TASKS</div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <div styleName="reparate_item" style={{marginLeft: 5, marginRight: 5}}>
                        <div style={{backgroundColor: '#c6d92e', width: 15, height: 15, marginRight: 7}} />
                        <div style={{fontSize: '12px', fontWeight: 300}}>Installations</div>
                    </div>
                    <div styleName="reparate_item" style={{marginLeft: 5, marginRight: 5}}>
                        <div style={{backgroundColor: '#6ebe46', width: 15, height: 15, marginRight: 7}} />
                        <div style={{fontSize: '12px', fontWeight: 300}}>Repair Services</div>
                    </div>
                </div>
                <Highchart config={{
                    credits: {
                        enabled: false
                    },
                    colors: ['#6ebe46', '#c6d92e'],
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    yAxis: {
                        title: {
                            text: 'Tasks'
                        }
                    },
                    legend: {
                        enabled: false,
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    series: [{
                        name: 'Installations',
                        data: [49, 55, 51, 66, 90, 199, 171, 241]
                    }, {
                        name: 'Repair Services',
                        data: [29, 40, 97, 21, 20, 22, 31, 44]
                    }]
                }} />
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
    );
}

Tasks.propTypes = {
};

export default CSSModules(Tasks, styles);

