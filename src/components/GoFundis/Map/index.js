import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
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
                goFundis={props.goFundis}
                onOfflineStatusHandler={props.onOfflineStatusHandler}
                onOnlineStatusHandler={props.onOnlineStatusHandler}
                onAllStatusHandler={props.onAllStatusHandler}
            />
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapSegment
                            data={props.data.results.getOrElse([])}
                            filterData={filterGoFundis(props.goFundis)}
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
    goFundis: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,

    onAllStatusHandler: PropTypes.func.isRequired,
    onOnlineStatusHandler: PropTypes.func.isRequired,
    onOfflineStatusHandler: PropTypes.func.isRequired
};

export default CSSModules(GoFundisMap, styles);
