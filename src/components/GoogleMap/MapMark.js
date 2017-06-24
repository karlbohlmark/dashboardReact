import React, { PropTypes } from 'react';
import FIcon from 'react-fontawesome';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


class MapMark extends React.Component {

    render() {
        let color;
        let name;
        switch (this.props.type) {
            case 'SUBSCRIBER':
                color = '#c6d92c';
                name = 'user-circle';
                break;
            case 'GOFUNDIS':
                color = '#fbaa1a';
                name = 'user-circle';
                break;
            default:
                color = 'blue';
                name = 'user-circle';
        }

        return (
            <FIcon
                // styleName='google_map__pin'
                size={'2x'}
                name={name}
                // style={{color, borderBottomColor: color, display: 'block'}}
                style={{color}}
            />
        );
    }
}
MapMark.propTypes = {
};
export default CSSModules(MapMark, styles);
