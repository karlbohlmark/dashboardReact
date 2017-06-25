import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function Tasks(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>Tasks</div>

            </div>
        </div>
    );
}

Tasks.propTypes = {
};

export default CSSModules(Tasks, styles);
