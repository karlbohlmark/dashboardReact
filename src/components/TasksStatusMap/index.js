import React, { PropTypes } from 'react';
import Placeholder from 'components/Placeholder';
import SelectBoxItem from 'components/SelectBoxItem';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import {
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED
} from 'models/googlemap';
import {
    capitalize
} from 'utils';

function TasksStatusMap(props) {
    return (
        <div>
            <SelectBoxItem
                options={[
                    { value: TASK_STATYS_COMPLETED, label: capitalize(TASK_STATYS_COMPLETED) },
                    { value: TASK_STATYS_ASSIGNED, label: capitalize(TASK_STATYS_ASSIGNED) },
                    { value: TASK_STATYS_UNASSIGNED, label: capitalize(TASK_STATYS_UNASSIGNED) },
                    { value: TASK_STATYS_DECLINED, label: capitalize(TASK_STATYS_DECLINED) },
                    { value: TASK_STATYS_CANCELLED, label: capitalize(TASK_STATYS_CANCELLED) }
                ]}
                onChange={props.onUiTasksHandler}
                value={props.uiTasks}

            />
            {props.dataTasksLocationStatus.errors.cata({
                Nothing: () => props.dataTasksLocationStatus.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.dataTasksLocationStatus.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapTasks
                            uiTasks={props.uiTasks}
                            data={props.dataTasksLocationStatus.results.getOrElse([])}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
        </div>
    );
}

TasksStatusMap.propTypes = {
    dataTasksLocationStatus: PropTypes.object.isRequired,
    uiTasks: PropTypes.object.isRequired,
    onUiTasksHandler: PropTypes.func.isRequired
};

export default TasksStatusMap;

