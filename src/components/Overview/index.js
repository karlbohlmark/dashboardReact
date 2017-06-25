import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import GoogleMapUsers from 'components/GoogleMap';
import UserPanel from 'components/Overview/UserPanel';
import dataMapMarkerUsers from 'data/dataMapMarker';

function Overview(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>USERS</div>
                <UserPanel
                    users={props.users}
                    allHandler={props.allHandler}
                    subscriberHandler={props.subscriberHandler}
                    gofundisHandler={props.gofundisHandler}
                />
                <GoogleMapUsers
                    users={props.users}
                    data={dataMapMarkerUsers}
                />
            </div>
        </div>
    );
}

Overview.propTypes = {
};

export default CSSModules(Overview, styles);
