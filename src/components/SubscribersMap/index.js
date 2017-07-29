import React, { PropTypes } from 'react';
import GoogleMapSegment from 'components/GoogleMap';
import Placeholder from 'components/Placeholder';
import {
    filterCommon
} from 'utils';

function SubscribersMap(props) {
    return (
        <div style={{
            marginTop: 10,
            marginBottom: 10
        }}>
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapSegment
                            data={props.data.results.getOrElse([])}
                            filterData={filterCommon}
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

SubscribersMap.propTypes = {
    data: PropTypes.object.isRequired
};

export default SubscribersMap;

