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
    TASK_STATYS_CANCELLED,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL,
    GOFUNDIS_STATYS_OFFLINE,
    GOFUNDIS_STATYS_ONLINE,
    SUBSCRIBERS_ALL
} from 'models/googlemap';
import styles from './styles.css';


class MapMark extends React.Component {

    render() {
        let color = '';
        let name = '';
        switch (this.props.type) {
            case GOFUNDIS_STATYS_OFFLINE:
                color = '#d9baab';
                name = 'user-circle';
                break;
            case GOFUNDIS_STATYS_ONLINE:
                color = '#55d996';
                name = 'user-circle';
                break;
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
            case CATEGORY_NEW_INSTALL_DECODER:
                color = '#47cab2';
                name = 'user-circle';
                break;
            case CATEGORY_NEW_INSTALL_SIGNAL:
                color = '#4865ca';
                name = 'user-circle';
                break;
            case CATEGORY_NEW_INSTALL_ERROR:
                color = '#42a7ca';
                name = 'user-circle';
                break;
            case CATEGORY_REPAIR_INSTALL_DECODER:
                color = '#cab343';
                name = 'user-circle';
                break;
            case CATEGORY_REPAIR_INSTALL_SIGNAL:
                color = '#50cabe';
                name = 'user-circle';
                break;
            case SUBSCRIBERS_ALL:
                color = '#b8fb14';
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
    type: PropTypes.string.isRequired
};
export default CSSModules(MapMark, styles);
