import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import CheckBoxItem from 'components/CheckBoxItem';

import styles from '../styles.css';

function GoFundisPanel(props) {
    return (
        <div styleName='row_items'>
            <CheckBoxItem
                value={props.value.all.getOrElse(false)}
                onChange={props.onAllStatusHandler}
            >
                All
            </CheckBoxItem>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.value.online.getOrElse(false)}
                    onChange={props.onOnlineStatusHandler}
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
                    onChange={props.onOfflineStatusHandler}
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

    onAllStatusHandler: PropTypes.func.isRequired,
    onOnlineStatusHandler: PropTypes.func.isRequired,
    onOfflineStatusHandler: PropTypes.func.isRequired
};

export default CSSModules(GoFundisPanel, styles);
