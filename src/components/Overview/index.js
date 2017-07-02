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
import {
    COMPLETED_TASKS,
    COMPLETED_TASKS_LINE,
    GOFUNDIS
} from 'models/highchartConfig';
import {
    capitalize
} from 'utils';
import Highchart from 'react-highcharts/ReactHighcharts';
import ReportRow from 'components/ListItem/ReportRow';
import LegendRow from 'components/ListItem/LegendRow';
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
                                <ReportRow
                                    styleChildren={{backgroundColor: '#6ebe46'}}
                                    upItem={25}
                                    item={'COMPLETED TASKS PER DAY'}
                                    subItem={'(IN AVERAGE PER GOFUNDI)'}
                                />
                                <ReportRow
                                    styleChildren={{backgroundColor: '#fbaa1a'}}
                                    upItem={6}
                                    item={'ACTIVE GOFUNDIS'}
                                    subItem={'(IN AVERAGE PER DAY)'}
                                />
                            </div>
                            <div styleName="list_column" style={{marginLeft: 20}}>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#c21e51'}}
                                    styleReportBlock={{width: 185}}
                                    upItem={'00:45 hr'}
                                    item={'AVERAGE TIME FOR COMPLETION'}
                                    subItem={'(FROM ASSIGNED TO COMPLETED)'}
                                />
                                <ReportRow
                                    styleChildren={{backgroundColor: '#f2ec2b'}}
                                    styleReportBlock={{width: 185}}
                                    upItem={'15%'}
                                    item={'INCREASE SINCE LAST MONTH'}
                                    subItem={'(TASKS COMPLETED)'}
                                />
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
                                    <Highchart config={COMPLETED_TASKS} />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent:
                                            'space-around'
                                    }}>
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
                            <div style={{
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                                <div styleName='sub_container_header'>GOFUNDIS</div>
                                <div styleName="list_column_highcharts" style={{margin: 5}}>
                                    <Highchart config={GOFUNDIS} />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <LegendRow
                                            color={'#c21f50'}
                                            title={'Approved'}
                                        />
                                        <LegendRow
                                            color={'#1d5c51'}
                                            title={'Onboarding'}
                                        />
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
