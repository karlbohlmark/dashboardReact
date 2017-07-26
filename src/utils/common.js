import {
    curry
} from 'lodash/fp';

export const createMapOptions = curry(
    maps => (
        {
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_BOTTOM,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false
        }
    )
);

export const locationInScreen = curry(
    (location, nw, se) => (
        (nw.lat > location.lat && location.lat > se.lat) &&
        (nw.lng < location.lng && location.lng < se.lng)
    )
);
