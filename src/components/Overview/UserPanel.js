import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import CheckBoxItem from 'components/Overview/CheckBoxItem';

import styles from './styles.css';

function UserPanel(props) {
    return (
        <div >
            <CheckBoxItem
                value={props.users.all.getOrElse(false)}
                onChange={props.allHandler}
            >
                All
            </CheckBoxItem>
        </div>
    );
}

UserPanel.propTypes = {
};

export default CSSModules(UserPanel, styles);
