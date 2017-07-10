import Maybe from 'data.maybe';

import config from 'config';

import {
    processResponse,
    processErrors
} from './common';


const METHOD = 'query';

export function listUserLocations() {
    return fetch(`${config.url}${config.version}${METHOD}/ListUserLocations?query={}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(processResponse, processErrors)
    .catch(errors => Promise.reject({
        common: Maybe.fromNullable(errors.non_field_errors)
    }));
}
