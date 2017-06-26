import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import FIcon from 'react-fontawesome';
import CheckBoxItem from 'components/CheckBoxItem';

import styles from './styles.css';

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
                <FIcon
                    size={'2x'}
                    name={'user-circle'}
                    styleName='inline_items'
                    style={{color: '#55d996'}}
                />
            </div>
            <div styleName='inline_items'>
                <CheckBoxItem
                    value={props.goFundis.offline.getOrElse(false)}
                    onChange={props.onOfflineStatusHandler}
                >
                    OffLine
                </CheckBoxItem>
                <FIcon
                    size={'2x'}
                    name={'user-circle'}
                    styleName='inline_items'
                    style={{color: '#d9baab'}}
                />
            </div>

        </div>
    );
}

GoFundisPanel.propTypes = {
};

export default CSSModules(GoFundisPanel, styles);
