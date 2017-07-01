import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED,
    CATEGORY_ALL,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL
} from 'models/googlemap';
import Highchart from 'react-highcharts/ReactHighcharts';
import GoogleMapUsers from 'components/GoogleMap';
import SubPanel from 'components/SubPanel';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import GoogleMapCategory from 'components/GoogleMap/Category';
import UserPanel from 'components/Overview/UserPanel';
import FIcon from 'react-fontawesome';
import SelectBoxItem from 'components/SelectBoxItem';
import dataMapMarkerUsers from 'data/dataMapMarker';
import dataMapMarkerTasks from 'data/dataMapMarkerTask';
import dataMapMarkerCategory from 'data/dataMapMarkerCategory';

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

function Overview(props) {
    return (
        <div>
            <SubPanel
                title="OVERVIEW"
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
            />
            <div styleName='root'>
                <div styleName='users_container_empty'>
                    <div styleName="returning_subscribers">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                            <div styleName="list_column" style={{marginLeft: 0}}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: 7,
                                    marginTop: 7
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#6ebe46',
                                        display: 'flex',
                                        alignSelf: 'center'
                                    }}>
                                        <FIcon
                                            size={'2x'}
                                            name={'user-circle'}
                                            styleName='inline_items'
                                            style={{color: '#ffffff'}}
                                        />
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                        padding: '10px',
                                        width: 170
                                    }}>
                                        <div styleName="list_item_number">6</div>
                                        <div styleName="list_columnItemStart">
                                            <div styleName="list_column_item"> COMPLETED TASKS PER DAY</div>
                                            <div styleName="list_column_itemSmall">(IN AVERAGE PER GOFUNDI)</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: 7,
                                    marginTop: 7
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#fbaa1a',
                                        display: 'flex',
                                        alignSelf: 'center'
                                    }}>
                                        <FIcon
                                            size={'2x'}
                                            name={'user-circle'}
                                            styleName='inline_items'
                                            style={{color: '#ffffff'}}
                                        />
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                        padding: '10px',
                                        width: 170
                                    }}>
                                        <div styleName="list_item_number">25</div>
                                        <div styleName="list_columnItemStart">
                                            <div styleName="list_column_item"> ACTIVE GOFUNDIS</div>
                                            <div styleName="list_column_itemSmall">(IN AVERAGE PER DAY)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div styleName="list_column" style={{marginLeft: 20}}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: 7,
                                    marginTop: 7
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#c21e51',
                                        display: 'flex',
                                        alignSelf: 'center'
                                    }}>
                                        <FIcon
                                            size={'2x'}
                                            name={'user-circle'}
                                            styleName='inline_items'
                                            style={{color: '#ffffff'}}
                                        />
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                        padding: '10px',
                                        width: 185
                                    }}>
                                        <div styleName="list_item_number">00:45 hr</div>
                                        <div styleName="list_columnItemStart">
                                            <div styleName="list_column_item"> AVERAGE TIME FOR COMPLETION</div>
                                            <div styleName="list_column_itemSmall">(FROM ASSIGNED TO COMPLETED)</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: 7,
                                    marginTop: 7
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#f2ec2b',
                                        display: 'flex',
                                        alignSelf: 'center'
                                    }}>
                                        <FIcon
                                            size={'2x'}
                                            name={'user-circle'}
                                            styleName='inline_items'
                                            style={{color: '#ffffff'}}
                                        />
                                    </div>
                                    <div style={{
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                        padding: '10px',
                                        width: 185
                                    }}>
                                        <div styleName="list_item_number">15%</div>
                                        <div styleName="list_columnItemStart">
                                            <div styleName="list_column_item"> INCREASE SINCE LAST MONTH</div>
                                            <div styleName="list_column_itemSmall">(TASKS COMPLETED)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div style={{
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                                <div styleName='sub_container_header'>COMPLETED TASKS</div>
                                <div styleName="list_column_highcharts" style={{margin: 5}}>
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
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent:
                                            'space-around'
                                    }}>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#c6d92e',
                                                width: 15, height: 15,
                                                marginRight: 7
                                            }} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Installations</div>
                                        </div>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#6ebe46',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7
                                            }} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Repair Services</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                                <div styleName='sub_container_header'>GOFUNDIS</div>
                                <div styleName="list_column_highcharts" style={{margin: 5}}>
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
                                        colors: ['#1d5c51', '#c21f50'],
                                        title: {
                                            text: '<strong>250</strong>',
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
                                                ['Onboarding', 15.00],
                                                ['Approved', 85.00]
                                            ]
                                        }]
                                    }} />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#c21f50',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7
                                            }} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Approved</div>
                                        </div>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#1d5c51',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7
                                            }} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Onboarding</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>USERS</div>
                    <UserPanel
                        users={props.users}
                        allHandler={props.allHandler}
                        subscriberHandler={props.subscriberHandler}
                        gofundisHandler={props.gofundisHandler}
                    />
                    <GoogleMapUsers
                        users={props.users}
                        data={dataMapMarkerUsers}
                    />
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
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
                <div styleName='users_container'>
                    <div styleName='user_container_header'>CATEGORIES</div>
                    <SelectBoxItem
                        style={{width: '300px'}}
                        options={[
                            { value: CATEGORY_ALL,
                                label: capitalize(CATEGORY_ALL) },
                            { value: CATEGORY_NEW_INSTALL_DECODER,
                                label: capitalize(CATEGORY_NEW_INSTALL_DECODER) },
                            { value: CATEGORY_NEW_INSTALL_SIGNAL,
                                label: capitalize(CATEGORY_NEW_INSTALL_SIGNAL) },
                            { value: CATEGORY_NEW_INSTALL_ERROR,
                                label: capitalize(CATEGORY_NEW_INSTALL_ERROR) },
                            { value: CATEGORY_REPAIR_INSTALL_DECODER,
                                label: capitalize(CATEGORY_REPAIR_INSTALL_DECODER) },
                            { value: CATEGORY_REPAIR_INSTALL_SIGNAL,
                                label: capitalize(CATEGORY_REPAIR_INSTALL_SIGNAL) }
                        ]}
                        onChange={props.onChangeCategoryHandler}
                        value={props.categories}

                    />
                    <GoogleMapCategory
                        categories={props.categories}
                        data={dataMapMarkerCategory}
                    />
                </div>
            </div>
        </div>
    );
}

Overview.propTypes = {
    categories: PropTypes.object.isRequired,
    onChangeCategoryHandler: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired,
    onChangeTaskStatusHandler: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    allHandler: PropTypes.func.isRequired,
    subscriberHandler: PropTypes.func.isRequired,
    gofundisHandler: PropTypes.func.isRequired

};

export default CSSModules(Overview, styles);
