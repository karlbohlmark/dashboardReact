import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import GoogleMapSubscribers from 'components/GoogleMap/Subscribers';
import dataMapMarkerSubscribers from 'data/dataMapMarkerSubscribers';

function Subscribers(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>RETURNING SUBSCRIBERS</div>
                <div styleName="returning_subscribers">
                    <div styleName="list_column">
                        <div styleName="list_row">
                            <div styleName="list_item_number">15</div>
                            <div styleName="list_column_item"> NUMBER OF RETURNING SUBSCRIBERS</div>
                        </div>

                        <div styleName="list_row">
                            <div styleName="list_item_number">10</div>
                            <div styleName="list_columnItem">
                                <div styleName="list_column_item"> NUMBER OF FOLLOW UP TASKS</div>
                                <div styleName="list_column_itemSmall">(SAME SUBSCRIBER SAME CATEGORY)</div>
                            </div>
                        </div>
                        <div styleName="list_row">
                            <div styleName="list_item_number">5</div>
                            <div styleName="list_columnItem">
                                <div styleName="list_column_item"> NUMBER OF RECURRING TASKS</div>
                                <div styleName="list_column_itemSmall">(SAME SUBSCRIBER DIFFERENT CATEGORY)</div>
                            </div>
                        </div>


                    </div>
                    <div> sdf f</div>
                    <div> df sf</div>
                </div>
            </div>
            <div styleName='users_container'>
                <div styleName='user_container_header'>SUBSCRIBERS</div>
                <GoogleMapSubscribers
                    data={dataMapMarkerSubscribers}
                />
            </div>
        </div>
    );
}

Subscribers.propTypes = {
};

export default CSSModules(Subscribers, styles);
