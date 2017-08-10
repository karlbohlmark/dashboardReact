import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    TASK_STATYS_ALL,
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_CANCELLED,
    TASK_STATYS_SCHEDULED,
    TASK_STATYS_RATED
} from 'models/googlemap';
import CheckBoxItem from 'components/CheckBoxItem';

function TaskPanel(props) {
    return (
        <div styleName='row_items' style={{flexWrap: 'wrap'}}>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.all.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_ALL, f)}
                >
                    All
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.completed.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_COMPLETED, f)}
                >
                    Completed
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.assigned.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_ASSIGNED, f)}
                >
                    Assigned
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.unassigned.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_UNASSIGNED, f)}
                >
                    Unassigned
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.cancelled.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_CANCELLED, f)}
                >
                    Cancelled
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.scheduled.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_SCHEDULED, f)}
                >
                    Scheduled
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.rated.getOrElse(false)}
                    onChange={f => props.onChange(TASK_STATYS_RATED, f)}
                >
                    Rated
                </CheckBoxItem>
            </div>
        </div>
    );
}

TaskPanel.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CSSModules(TaskPanel, styles);
