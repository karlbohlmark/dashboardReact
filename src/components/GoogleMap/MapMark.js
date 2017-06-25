import React, { PropTypes } from 'react';
import FIcon from 'react-fontawesome';
import CSSModules from 'react-css-modules';
import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED
} from 'models/googlemap';
import styles from './styles.css';


class MapMark extends React.Component {

    render() {
        let color;
        let name;
        switch (this.props.type) {
            case USER_TYPE_SUBSCRIBER:
                color = '#c6d92c';
                name = 'user-circle';
                break;
            case USER_TYPE_GOFUNDIS:
                color = '#fbaa1a';
                name = 'user-circle';
                break;
            case TASK_STATYS_COMPLETED:
                color = '#b8fb14';
                name = 'user-circle';
                break;
            case TASK_STATYS_ASSIGNED:
                color = '#fab1fb';
                name = 'user-circle';
                break;
            case TASK_STATYS_UNASSIGNED:
                color = '#4b445e';
                name = 'user-circle';
                break;
            case TASK_STATYS_DECLINED:
                color = '#3682ca';
                name = 'user-circle';
                break;
            case TASK_STATYS_CANCELLED:
                color = '#ca3523';
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
