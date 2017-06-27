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
                    <div>
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
                        </div>
                    </div>
                    <div styleName="list_column" style={{marginLeft: 20}}>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number">165</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> NUMBER OF TASKS REPORTED</div>
                                <div styleName="list_column_itemSmall">(FOR SELECTED PERIOD)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number">38</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> ASSIGNED TASKS</div>
                                <div styleName="list_column_itemSmall">
                                    (ASSIGNED TO GOFUNDI BUT PENDING COMPLETION)
                                </div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number">18</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> NUMBER OF DECLINES</div>
                                <div styleName="list_column_itemSmall">(FOR SELECTED PERIOD)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number_pink">45 sec</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> AVERAGE TIME FOR ASSINMENT</div>
                                <div styleName="list_column_itemSmall">(FROM REQUESTED ACCEPTED)</div>
                            </div>
                        </div>
                    </div>
                    <div styleName="list_column" style={{marginLeft: 20}}>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number">2</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> UNASSIGNED TASKS</div>
                                <div styleName="list_column_itemSmall">(TASK NOT YET ACCEPTED BY GOFUNDI)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number">15%</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> INCREASE SINCE LAST MONTH</div>
                                <div styleName="list_column_itemSmall">(TASKS COMPLETED)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number">5</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> NUMBER OF CANCELLATIONS</div>
                                <div styleName="list_column_itemSmall">(FOR SELECTED PERIOD)</div>
                            </div>
                        </div>
                        <div styleName="list_row_reverse">
                            <div styleName="list_item_number_pink">1 hr</div>
                            <div styleName="list_columnItemStart">
                                <div styleName="list_column_item"> AVERAGE TIME FOR COMPLETION</div>
                                <div styleName="list_column_itemSmall">(FROM REQUESTED TO COMPLETED)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div styleName='users_container'>
                <div styleName='user_container_header'>COMPLETED TASKS</div>
                <Highchart config={{
                    credits: {
                        enabled: false
                    },
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

