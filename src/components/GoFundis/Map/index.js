import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import GoFundisPanel from 'components/GoFundis/Map/GoFundisPanel';
import GoogleMapSegment from 'components/GoogleMap';
import Placeholder from 'components/Placeholder';
import {
    filterGoFundis
} from 'utils';


function GoFundisMap(props) {
    return (
        <div>
            <GoFundisPanel
                value={props.value}
                onOfflineStatusHandler={props.onOfflineStatus}
                onOnlineStatusHandler={props.onOnlineStatus}
                onAllStatusHandler={props.onAllStatus}
            />
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapSegment
                            data={props.data.results.getOrElse([])}
                            filterData={filterGoFundis(props.value)}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
        </div>
    );
}

GoFundisMap.propTypes = {
    value: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,

    onAllStatus: PropTypes.func.isRequired,
    onOnlineStatus: PropTypes.func.isRequired,
    onOfflineStatus: PropTypes.func.isRequired
};

export default CSSModules(GoFundisMap, styles);
