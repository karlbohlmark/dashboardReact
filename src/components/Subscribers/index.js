import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Subscribers(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>Subscribers</div>

            </div>
        </div>
    );
}

Subscribers.propTypes = {
};

export default CSSModules(Subscribers, styles);
