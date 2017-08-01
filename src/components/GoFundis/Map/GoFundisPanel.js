import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import CheckBoxItem from 'components/CheckBoxItem';

import styles from '../styles.css';

function GoFundisPanel(props) {
    return (
        <div styleName='row_items'>
            <CheckBoxItem
                value={props.goFundis.all.getOrElse(false)}
                onChange={props.onAllStatusHandler}
            >
                All
            </CheckBoxItem>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.goFundis.online.getOrElse(false)}
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
                    value={props.goFundis.offline.getOrElse(false)}
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
    goFundis: PropTypes.object.isRequired,

    onAllStatusHandler: PropTypes.func.isRequired,
    onOnlineStatusHandler: PropTypes.func.isRequired,
    onOfflineStatusHandler: PropTypes.func.isRequired
};

export default CSSModules(GoFundisPanel, styles);
