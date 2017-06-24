import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import GoogleMap from 'components/GoogleMap';

function Overview(props) {
    console.log('Overview', props);
    return (
        <div styleName={props.compact ? 'root_compact' : 'root'}>

            <GoogleMap
                {...props}
            />
        </div>
    );
}

Overview.propTypes = {
};

export default CSSModules(Overview, styles);
