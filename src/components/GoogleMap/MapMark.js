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
import styles from '../__assets__/styles.css';


class MapMark extends React.Component {

    render() {
        let color = '';
        let name = '';
        switch (this.props.type) {
            case GOFUNDIS_STATYS_OFFLINE:
                color = '#d9baab';
                name = 'user-circle';
                return (
                    <FIcon
                        // styleName='google_map__pin'
                        size={'2x'}
                        name={name}
                        // style={{color, borderBottomColor: color, display: 'block'}}
                        style={{color}}
                    />
                );
                // break;
            case GOFUNDIS_STATYS_ONLINE:
                color = '#55d996';
                name = 'user-circle';
                return (
                    <FIcon
                        // styleName='google_map__pin'
                        size={'2x'}
                        name={name}
                        // style={{color, borderBottomColor: color, display: 'block'}}
                        style={{color}}
                    />
                );
                // break;
            case USER_TYPE_SUBSCRIBER:
                color = '#c6d92c';
                name = 'user-circle';
                return (
                    <FIcon
                        // styleName='google_map__pin'
                        size={'2x'}
                        name={name}
                        // style={{color, borderBottomColor: color, display: 'block'}}
                        style={{color}}
                    />
                );
                // break;
            case USER_TYPE_GOFUNDIS:
                color = '#fbaa1a';
                name = 'user-circle';
                return (
                    <FIcon
                        // styleName='google_map__pin'
                        size={'2x'}
                        name={name}
                        // style={{color, borderBottomColor: color, display: 'block'}}
                        style={{color}}
                    />
                );
                // break;
            case TASK_STATYS_COMPLETED:
                return (<div styleName="completed-tasks" />);
            case TASK_STATYS_ASSIGNED:
                return (<div styleName="assigned-tasks" />);
            case TASK_STATYS_UNASSIGNED:
                return (<div styleName="unasigned-tasks" />);
            case TASK_STATYS_DECLINED:
                return (<div styleName="declined-tasks" />);
            case TASK_STATYS_CANCELLED:
                return (<div styleName="cancelled-tasks" />);
            case CATEGORY_NEW_INSTALL_DECODER:
                return (<div styleName="new-installation-decoder" />);
            case CATEGORY_NEW_INSTALL_SIGNAL:
                return (<div styleName="new-installation-antenna" />);
            case CATEGORY_NEW_INSTALL_ERROR:
                return (<div styleName="new-installation-other" />);
            case CATEGORY_REPAIR_INSTALL_DECODER:
                return (<div styleName="repair-decoder" />);
            case CATEGORY_REPAIR_INSTALL_SIGNAL:
                return (<div styleName="repair-antenna" />);
            case SUBSCRIBERS_ALL:
                color = '#b8fb14';
                name = 'user-circle';
                return (
                    <FIcon
                        // styleName='google_map__pin'
                        size={'2x'}
                        name={name}
                        // style={{color, borderBottomColor: color, display: 'block'}}
                        style={{color}}
                    />
                );
                // break;
            default:
                color = 'blue';
                name = 'user-circle';
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

        // return (
        //     <FIcon
        //         // styleName='google_map__pin'
        //         size={'2x'}
        //         name={name}
        //         // style={{color, borderBottomColor: color, display: 'block'}}
        //         style={{color}}
        //     />
        // );
    }
}
MapMark.propTypes = {
    type: PropTypes.string.isRequired
};
export default CSSModules(MapMark, styles);
