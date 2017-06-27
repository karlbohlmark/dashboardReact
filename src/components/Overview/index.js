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
import GoogleMapUsers from 'components/GoogleMap';
import GoogleMapTasks from 'components/GoogleMap/Tasks';
import GoogleMapCategory from 'components/GoogleMap/Category';
import UserPanel from 'components/Overview/UserPanel';
import SelectBoxItem from 'components/SelectBoxItem';
import dataMapMarkerUsers from 'data/dataMapMarker';
import dataMapMarkerTasks from 'data/dataMapMarkerTask';
import dataMapMarkerCategory from 'data/dataMapMarkerCategory';

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

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
                        { value: CATEGORY_ALL, label: capitalize(CATEGORY_ALL) },
                        { value: CATEGORY_NEW_INSTALL_DECODER, label: capitalize(CATEGORY_NEW_INSTALL_DECODER) },
                        { value: CATEGORY_NEW_INSTALL_SIGNAL, label: capitalize(CATEGORY_NEW_INSTALL_SIGNAL) },
                        { value: CATEGORY_NEW_INSTALL_ERROR, label: capitalize(CATEGORY_NEW_INSTALL_ERROR) },
                        { value: CATEGORY_REPAIR_INSTALL_DECODER, label: capitalize(CATEGORY_REPAIR_INSTALL_DECODER) },
                        { value: CATEGORY_REPAIR_INSTALL_SIGNAL, label: capitalize(CATEGORY_REPAIR_INSTALL_SIGNAL) }
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
    );
}

Overview.propTypes = {
};

export default CSSModules(Overview, styles);