import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import CheckBoxItem from 'components/CheckBoxItem';
import {
    GOFUNDIS_STATYS_OFFLINE,
    GOFUNDIS_STATYS_ONLINE,
    GOFUNDIS_ALL
} from 'models/googlemap';

function GoFundisPanel(props) {
    return (
        <div styleName='row_items'>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.all.getOrElse(false)}
                    onChange={f => props.onChange(GOFUNDIS_ALL, f)}
                >
                    All
                </CheckBoxItem>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.online.getOrElse(false)}
                    onChange={f => props.onChange(GOFUNDIS_STATYS_ONLINE, f)}
                >
                    Online
                </CheckBoxItem>
                <div styleName="gofundis_online_block">
                    <div styleName="gofundis_inner" />
                </div>
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.offline.getOrElse(false)}
                    onChange={f => props.onChange(GOFUNDIS_STATYS_OFFLINE, f)}
                >
                    OffLine
                </CheckBoxItem>
                <div styleName="gofundis_offline_block">
                    <div styleName="gofundis_inner" />
                </div>
            </div>

        </div>
    );
}

GoFundisPanel.propTypes = {
    value: PropTypes.object.isRequired,

    onChange: PropTypes.func.isRequired
};

export default CSSModules(GoFundisPanel, styles);
