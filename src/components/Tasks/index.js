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
import SelectBoxItem from 'components/Overview/SelectBoxItem';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import dataMapMarkerTasks from 'data/dataMapMarkerTask';

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

function Tasks(props) {
    return (
        <div styleName='root'>
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
