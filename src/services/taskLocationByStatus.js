import {
    isNull,
    isArray
} from 'lodash/fp';
import Maybe from 'data.maybe';

import config from 'config';

import {
    processResponse,
    processErrors
} from './common';

const METHOD = 'query/TaskLocationByStatus';


export function taskLocationByStatus(from, to, status) {
    const query = encodeURIComponent(JSON.stringify(
        isNull(from) || isNull(to) || !isArray(status) ? {} :
        {
            status: status ? status : null,
            timespan: {
                from: from ? from : null,
                to: to ? to : null
            }
        }
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
