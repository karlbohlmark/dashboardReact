import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    CATEGORY_ALL,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL
} from 'models/googlemap';
import {
    COMPLETED_TASKS,
    GOFUNDIS
} from 'models/highchartConfig';
import {
    capitalize
} from 'utils';
import Highchart from 'react-highcharts/ReactHighcharts';
import TasksHistogram from 'components/TasksHistogram';
import TasksStatusMap from 'components/TasksStatusMap';
import UsersMap from 'components/UsersMap';
import ReportRow from 'components/ListItem/ReportRow';
import LegendRow from 'components/ListItem/LegendRow';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import GoogleMapCategory from 'components/GoogleMap/Category';
import SelectBoxItem from 'components/SelectBoxItem';
import dataMapMarkerCategory from 'data/dataMapMarkerCategory';

function Overview(props) {

    return (
        <div>
            <SubPanel
                title="OVERVIEW"
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
                dateRangePicker={props.dateRangePicker}
                onRangeDate={props.onRangeDate}
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
                                    styleChildren={{backgroundColor: '#07944a'}}
                                    upItem={25}
                                    item={'COMPLETED TASKS PER DAY'}
                                    subItem={'(IN AVERAGE PER GOFUNDI)'}
                                >
                                    <div styleName="completed-tasks" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#fbaa1a'}}
                                    upItem={6}
                                    item={'ACTIVE GOFUNDIS'}
                                    subItem={'(IN AVERAGE PER DAY)'}
                                >
                                    <div styleName="user" />
                                </ReportRow>
                            </div>
                            <div styleName="list_column" style={{marginLeft: 20}}>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#ffde00'}}
                                    styleReportBlock={{width: 185}}
                                    upItem={'00:45 hr'}
                                    item={'AVERAGE TIME FOR COMPLETION'}
                                    subItem={'(FROM ASSIGNED TO COMPLETED)'}
                                >
                                    <div styleName="assigned-tasks" />
                                </ReportRow>
                                <ReportRow
                                    styleChildren={{backgroundColor: '#c21e51'}}
                                    styleReportBlock={{width: 185}}
                                    upItem={'15%'}
                                    item={'INCREASE SINCE LAST MONTH'}
                                    subItem={'(TASKS COMPLETED)'}
                                >
                                    <div styleName="line-chart" />
                                </ReportRow>
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
                <Substrate title={'USERS'}>
                    <UsersMap
                        dataUsersLocation={props.userLocation}
                        uiUsers={props.users}
                        onUiUsersHandler={props.onUserLocationHandler}/>
                </Substrate>
                <Substrate title={'COMPLETED TASKS'}>
                    <TasksHistogram data={props.completedTasksHistogram}/>
                </Substrate>
                <Substrate title={'TASK STATUS'}>
                    <TasksStatusMap
                        dataTasksLocationStatus={props.tasksLocationStatus}
                        uiTasks={props.tasks}
                        onUiTasksHandler={props.onChangeTaskStatusHandler}/>/>
                </Substrate>
                <Substrate title={'CATEGORIES'}>
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
                </Substrate>
            </div>
        </div>
    );
}

Overview.propTypes = {
    dateRangePicker: PropTypes.object.isRequired,
    completedTasksHistogram: PropTypes.object.isRequired,
    userLocation: PropTypes.object.isRequired,
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
