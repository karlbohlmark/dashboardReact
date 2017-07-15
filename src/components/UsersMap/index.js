import React, { PropTypes } from 'react';
import GoogleMapUsers from 'components/GoogleMap';
import Placeholder from 'components/Placeholder';
import UserPanel from 'components/UserPanel';

function UsersMap(props) {
    return (
        <div>
            <UserPanel
                uiUsers={props.uiUsers}
                onUiUsersHandler={props.onUiUsersHandler}
            />

            {props.dataUsersLocation.errors.cata({
                Nothing: () => props.dataUsersLocation.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.dataUsersLocation.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapUsers
                            uiUsers={props.uiUsers}
                            data={props.dataUsersLocation.results.getOrElse([])}
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

UsersMap.propTypes = {
    dataUsersLocation: PropTypes.object.isRequired,
    uiUsers: PropTypes.object.isRequired,
    onUiUsersHandler: PropTypes.func.isRequired
};

export default UsersMap;

