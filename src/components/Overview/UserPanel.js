import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import CheckBoxItem from 'components/CheckBoxItem';
import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    USER_TYPE_ALL
} from 'models/googlemap';
import styles from './styles.css';

function UserPanel(props) {
    return (
        <div styleName='row_items'>
            <CheckBoxItem
                value={props.users.all.getOrElse(false)}
                onChange={f => props.onUserLocationHandler(USER_TYPE_ALL, f)}
            >
                All
            </CheckBoxItem>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.users.subscriber.getOrElse(false)}
                    onChange={f => props.onUserLocationHandler(USER_TYPE_SUBSCRIBER, f)}
                >
                    Subscribers
                </CheckBoxItem>
                <div styleName="subscribers_user_block">
                    <div styleName="user_inner" />
                </div>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.users.gofundis.getOrElse(false)}
                    onChange={f => props.onUserLocationHandler(USER_TYPE_GOFUNDIS, f)}
                >
                    GoFundis
                </CheckBoxItem>
                <div styleName="gofundis_user_block">
                    <div styleName="user_inner" />
                </div>
            </div>
        </div>
    );
}

UserPanel.propTypes = {
    users: PropTypes.object.isRequired,
    onUserLocationHandler: PropTypes.func.isRequired
};

export default CSSModules(UserPanel, styles);
