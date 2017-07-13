import {
    // isArray
} from 'lodash/fp';
import Maybe from 'data.maybe';

import config from 'config';

import {
    processResponse,
    processErrors
} from './common';


const METHOD = 'query/ListUserLocations';

export function listUserLocations(userType) {
    const query = encodeURIComponent(JSON.stringify(
        // isArray(userType) ?
        { userTypes: userType ? userType : []}
        // : {}
        ));
    return fetch(`${config.url}${config.version}${METHOD}?query=${query}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(processResponse, processErrors)
    .catch(errors => Promise.reject({
        common: Maybe.fromNullable(errors.non_field_errors)
    }));
}
