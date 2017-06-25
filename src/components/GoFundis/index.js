import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

function GoFundis(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>GoFundis</div>

            </div>
        </div>
    );
}

GoFundis.propTypes = {
};

export default CSSModules(GoFundis, styles);
