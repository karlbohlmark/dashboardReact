import React, { PropTypes } from 'react';
import Placeholder from 'components/Placeholder';
import SelectBoxItem from 'components/SelectBoxItem';
import GoogleMapSegment from 'components/GoogleMap';
import {
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED
} from 'models/googlemap';
import {
    capitalize,
    filterTask
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
                onChange={props.onChange}
                value={props.value}

            />
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapSegment
                            data={props.data.results.getOrElse([])}
                            filterData={filterTask(props.value)}
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
    data: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TasksStatusMap;
