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

const METHOD = 'query/TaskLocationByCategory';


export function taskLocationByCategory(from, to, category) {
    const query = encodeURIComponent(JSON.stringify(
        isNull(from) || isNull(to) || !isArray(category) ? {} :
        {
            category: category ? category : null,
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
