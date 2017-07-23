import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import CompletedTasksHightChart from 'components/CompletedTasksHightChart';
import GofundisHightChart from 'components/GofundisHightChart';
import TasksHistogram from 'components/TasksHistogram';
import TasksStatusMap from 'components/TasksStatusMap';
import CategoriesMap from 'components/CategoriesMap';
import UsersMap from 'components/UsersMap';
import ReportRow from 'components/ListItem/ReportRow';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import Placeholder from 'components/Placeholder';

function Overview(props) {

    return (
        <div>
            <SubPanel
                title="OVERVIEW"
                listCategories={props.listCategories}
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
                                {props.getOverviewStats.errors.cata({
                                    Nothing: () => props.getOverviewStats.results.cata({
                                        Nothing: () => (
                                            <Placeholder
                                                style={{width: 220, height: 190}}
                                                busy={props.getOverviewStats.busy}
                                                size={[ '220px', '190px' ]} />
                                        ),
                                        Just: fields => (
                                            <div>
                                                <ReportRow
                                                    styleChildren={{backgroundColor: '#07944a'}}
                                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                                    upItem={
                                                        fields.completedTasksPerDay ?
                                                        fields.completedTasksPerDay : ''}
                                                    item={'COMPLETED TASKS PER DAY'}
                                                    subItem={'(IN AVERAGE PER GOFUNDI)'}
                                                >
                                                    <div styleName="completed-tasks" />
                                                </ReportRow>
                                                <ReportRow
                                                    styleChildren={{backgroundColor: '#fbaa1a'}}
                                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                                    upItem={
                                                        fields.activeGoFundis ?
                                                        fields.activeGoFundis : ''}
                                                    item={'ACTIVE GOFUNDIS'}
                                                    subItem={'(IN AVERAGE PER DAY)'}
                                                >
                                                    <div styleName="user" />
                                                </ReportRow>
                                            </div>
                                        )
                                    }),
                                    Just: errors => (
                                        <div>{errors}</div>
                                    )
                                })}
                            </div>
                            <div styleName="list_column" style={{marginLeft: 20}}>
                                {props.getOverviewStats.errors.cata({
                                    Nothing: () => props.getOverviewStats.results.cata({
                                        Nothing: () => (
                                            <Placeholder
                                                style={{ width: 235, height: 190}}
                                                busy={props.getOverviewStats.busy}
                                                size={[ '100%', '100%' ]} />
                                        ),
                                        Just: fields => (
                                            <div>
                                                <ReportRow
                                                    styleChildren={{backgroundColor: '#ffde00'}}
                                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                                    styleReportBlock={{width: 185}}
                                                    upItem={
                                                        fields.averageCompletionTime ?
                                                        fields.averageCompletionTime : ''}
                                                    item={'AVERAGE TIME FOR COMPLETION'}
                                                    subItem={'(FROM ASSIGNED TO COMPLETED)'}
                                                >
                                                    <div styleName="assigned-tasks" />
                                                </ReportRow>
                                                <ReportRow
                                                    styleChildren={{backgroundColor: '#c21e51'}}
                                                    styleUpItem={{textOverflow: 'ellipsis', overflow: 'hidden'}}
                                                    styleReportBlock={{width: 185}}
                                                    upItem={
                                                        fields.increasePercentage ?
                                                        fields.increasePercentage : ''}
                                                    item={'INCREASE SINCE LAST MONTH'}
                                                    subItem={'(TASKS COMPLETED)'}
                                                >
                                                    <div styleName="line-chart" />
                                                </ReportRow>
                                            </div>
                                        )
                                    }),
                                    Just: errors => (
                                        <div>{errors}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <CompletedTasksHightChart data={props.getOverviewStats} />
                            <GofundisHightChart data={props.getOverviewStats} />
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
                        onUiTasksHandler={props.onChangeTaskStatusHandler}/>
                </Substrate>
                <Substrate title={'CATEGORIES'}>
                    <CategoriesMap
                        listCategories={props.listCategories}
                        dataTasksLocationByCategory={props.tasksLocationByCategory}
                        uiCategories={props.categories}
                        onUiCategoriesHandler={props.onChangeCategoryHandler}/>
                </Substrate>
            </div>
        </div>
    );
}

Overview.propTypes = {
    listCategories: PropTypes.object.isRequired,
    getOverviewStats: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    completedTasksHistogram: PropTypes.object.isRequired,
    userLocation: PropTypes.object.isRequired,
    tasksLocationByCategory: PropTypes.object.isRequired,
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
