import {
    isNull
} from 'lodash/fp';
import Maybe from 'data.maybe';

import config from 'config';

import {
    processResponse,
    processErrors
} from './common';

const METHOD = 'query/TaskLocationByCategory';


export function taskLocationByCategory(from, to, category) {
    const query = isNull(from) || isNull(to) ? {} :
    {
        timespan: {
            from: from ? from : null,
            to: to ? to : null
        }
    };
    if (category && category.length > 0) {
        query.category = category;
    }
    return fetch(`${config.url}${config.version}${METHOD}?query=${serializeQuery(query)}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(processResponse, processErrors)
    .catch(errors => Promise.reject({
        common: Maybe.fromNullable(errors.non_field_errors)
    }));
}

function serializeQuery(q) {
    return encodeURIComponent(JSON.stringify(q));
}
