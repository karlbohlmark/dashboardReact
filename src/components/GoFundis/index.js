import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import GoFundisPanel from 'components/GoFundis/GoFundisPanel';
import GoogleMapGoFundis from 'components/GoogleMap/GoFundis';
import dataMapMarkerGoFundis from 'data/dataMapMarkerGoFundis';

function GoFundis(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>ACTIVE GO FUNDIS</div>
                <GoFundisPanel
                    goFundis={props.goFundis}
                    onOfflineStatusHandler={props.onOfflineStatusHandler}
                    onOnlineStatusHandler={props.onOnlineStatusHandler}
                    onAllStatusHandler={props.onAllStatusHandler}
                />
                <GoogleMapGoFundis
                    goFundis={props.goFundis}
                    data={dataMapMarkerGoFundis}
                />
            </div>
        </div>
    );
}

GoFundis.propTypes = {
};

export default CSSModules(GoFundis, styles);
