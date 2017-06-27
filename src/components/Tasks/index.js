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
                        <div styleName="list_column">
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
