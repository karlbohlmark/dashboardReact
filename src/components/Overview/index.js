import React, { PropTypes } from 'react';
import FIcon from 'react-fontawesome';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import GoogleMap from 'components/GoogleMap';

function Overview(props) {
    return (
        <div styleName={props.compact ? 'root_compact' : 'root'}>
            <div styleName="placeholder">
                <FIcon
                    styleName="icon"
                    name="image"
                    size="5x"
                />
            </div>
            <GoogleMap/>
            <h4 styleName="title">
                {props.title}
            </h4>

            {props.children}
        </div>
    );
}

Overview.propTypes = {
};

export default CSSModules(Overview, styles);
