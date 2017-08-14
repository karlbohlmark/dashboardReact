import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    findIndex
} from 'lodash/fp';
import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    USER_TYPE_ALL
} from 'models/googlemap';
import CheckBoxItem from 'components/CheckBoxItem';

function UserPanel(props) {
    return (
        <div styleName='row_items' style={{flexWrap: 'wrap'}}>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={(!!~findIndex(item => (item === USER_TYPE_ALL), props.value.getOrElse([])))}
                    onChange={f => props.onChange(USER_TYPE_ALL, f)}
                >
                    All
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={(!!~findIndex(item => (item === USER_TYPE_SUBSCRIBER), props.value.getOrElse([])))}
                    onChange={f => props.onChange(USER_TYPE_SUBSCRIBER, f)}
                >
                    Subscribers
                </CheckBoxItem>
                <div styleName="subscribers_user_block">
                    <div styleName="user_inner" />
                </div>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={(!!~findIndex(item => (item === USER_TYPE_GOFUNDIS), props.value.getOrElse([])))}
                    onChange={f => props.onChange(USER_TYPE_GOFUNDIS, f)}
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
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CSSModules(UserPanel, styles);
