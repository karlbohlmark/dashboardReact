import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Select from 'react-select';
import {
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED
} from 'models/googlemap';
import {
    compose,
    property
} from 'lodash/fp';
import styles from './styles.css';
import GoogleMapUsers from 'components/GoogleMap';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import UserPanel from 'components/Overview/UserPanel';
import dataMapMarkerUsers from 'data/dataMapMarker';
import dataMapMarkerTasks from 'data/dataMapMarkerTask';

const pValue = property('value');

function Overview(props) {
    return (
        <div styleName='root'>
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
                <div styleName='user_container_header'>TASK STATUS</div>
                <Select
                    // onChange={props.addLocation}
                    // onInputChange={props.receivePlacesHandler}
                    options={[
                        { value: TASK_STATYS_COMPLETED, label: 'Completed' },
                        { value: TASK_STATYS_ASSIGNED, label: 'Assigned' },
                        { value: TASK_STATYS_UNASSIGNED, label: 'Unassigned' },
                        { value: TASK_STATYS_DECLINED, label: 'Declined' },
                        { value: TASK_STATYS_CANCELLED, label: 'Cancelled' }
                    ]}
                    value={props.tasks.getOrElse(null)}
                    onChange={compose(
                        props.onChangeTaskStatusHandler,
                        pValue
                    )}
                    // backspaceRemoves={true}
                   // placeholder='Add Location'
                   //  labelKey='name'
                />
                <GoogleMapTasks
                    tasks={props.tasks}
                    data={dataMapMarkerTasks}
                    onChangeTaskStatusHandler={props.onChangeTaskStatusHandler}
                />
            </div>
        </div>
    );
}

Overview.propTypes = {
};

export default CSSModules(Overview, styles);
