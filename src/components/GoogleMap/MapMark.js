import React, { PropTypes } from 'react';
import FIcon from 'react-fontawesome';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


class MapMark extends React.Component {

    render() {
        let color;
        let name;
        switch (this.props.type) {
            case 'people':
                color = 'blue';
                name = 'user-circle';
                break;
            case 'event':
                color = 'red';
                name = 'user-circle';
                break;
            case 'group':
                color = 'green';
                name = 'user-circle';
                break;
            case 'me':
                color = 'red';
                name = 'user-circle';
                break;
            default:
                color = 'blue';
                name = 'user-circle';
        }

        return (
            <FIcon
                styleName='google_map__pin'
                size={'3x'}
                name={name}
                style={{color, borderBottomColor: color, display: 'block'}}
            />
        );
  }
}
MapMark.propTypes = {
};
export default CSSModules(MapMark, styles);
