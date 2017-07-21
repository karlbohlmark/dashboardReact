import Maybe from 'data.maybe';

import config from 'config';

import {
    processResponse,
    processErrors
} from './common';

const METHOD = 'query/ListDashboardCategories';


export function listDashboardCategories() {
    return fetch(`${config.url}${config.version}${METHOD}?query={}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(processResponse, processErrors)
        .catch(errors => Promise.reject({
            common: Maybe.fromNullable(errors.non_field_errors)
        }));
}
