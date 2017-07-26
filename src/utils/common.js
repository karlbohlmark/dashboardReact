import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED,
    CATEGORY_ALL,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL,
    CATEGORY_REPAIR_INSTALL_ERROR
} from 'models/googlemap';
import {
    filter,
    isArray,
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

export const filterUser = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => {
            if (option.all.getOrElse(false)) {
                return option.all.getOrElse(false);
            } else if (item.type === USER_TYPE_SUBSCRIBER) {
                return option.subscriber.getOrElse(false);
            } else if (item.type === USER_TYPE_GOFUNDIS) {
                return option.gofundis.getOrElse(false);
            }
            return false;
        }, arr) : (false)
    )
);

export const filterTask = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => (
            ((item.type === TASK_STATYS_COMPLETED && TASK_STATYS_COMPLETED === option.getOrElse('')) ||
                (item.type === TASK_STATYS_ASSIGNED && TASK_STATYS_ASSIGNED === option.getOrElse('')) ||
                (item.type === TASK_STATYS_UNASSIGNED && TASK_STATYS_UNASSIGNED === option.getOrElse('')) ||
                (item.type === TASK_STATYS_UNASSIGNED && TASK_STATYS_UNASSIGNED === option.getOrElse('')) ||
                (item.type === TASK_STATYS_DECLINED && TASK_STATYS_DECLINED === option.getOrElse('')) ||
                (item.type === TASK_STATYS_CANCELLED && TASK_STATYS_CANCELLED === option.getOrElse(''))
            )
        ), arr) : (false)
    )
);

export const filterCategory = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => (
            ((CATEGORY_ALL === option.getOrElse('')) ||
                (item.type === CATEGORY_NEW_INSTALL_DECODER &&
                    CATEGORY_NEW_INSTALL_DECODER === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_NEW_INSTALL_SIGNAL &&
                    CATEGORY_NEW_INSTALL_SIGNAL === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_NEW_INSTALL_ERROR &&
                    CATEGORY_NEW_INSTALL_ERROR === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_DECODER &&
                    CATEGORY_REPAIR_INSTALL_DECODER === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_SIGNAL &&
                    CATEGORY_REPAIR_INSTALL_SIGNAL === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_ERROR &&
                    CATEGORY_REPAIR_INSTALL_ERROR === option.getOrElse('')
                )
            )
        ), arr) : (false)
    )
);
