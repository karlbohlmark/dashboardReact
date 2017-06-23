import React, { PropTypes } from 'react';
import {
    Panel
} from 'react-bootstrap';
import {
    property
} from 'lodash/fp';
import {
    Just
} from 'data.maybe';

import PropTypes_ from 'utils/prop-types';
import GroupDropzone from 'components/GroupDropzone';


const pSmall = property('small');
const pMedium = property('medium');
const pLarge = property('large');

export default function PanelImages(props) {
    return (
        <Panel header={
            <h1>Images</h1>
            }>
            <GroupDropzone
                label={Just('Small image (chat index)')}
                image={props.fields.small}
                errors={props.errors.chain(pSmall)}
                placeholder="Drop small image here"
                size={[ '100%', '80px' ]}
                onUpload={props.onUploadSmallImage}
                onRemove={props.onRemoveSmallImage}
            />

            <GroupDropzone
                label={Just('Medium image (channel view)')}
                image={props.fields.medium}
                errors={props.errors.chain(pMedium)}
                placeholder="Drop medium image here"
                size={[ '100%', '150px' ]}
                onUpload={props.onUploadMediumImage}
                onRemove={props.onRemoveMediumImage}
            />

            <GroupDropzone
                label={Just('Large image (offer view)')}
                image={props.fields.large}
                errors={props.errors.chain(pLarge)}
                placeholder="Drop large image here"
                size={[ '100%', '230px' ]}
                onUpload={props.onUploadLargeImage}
                onRemove={props.onRemoveLargeImage}
            />
        </Panel>
    );
}

const mObject = PropTypes_.Maybe(
    PropTypes.object.isRequired
);

const mShape = shape => PropTypes_.Maybe(
    PropTypes.shape(shape).isRequired
);

const mArrayOfString = PropTypes_.Maybe(
    PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
);

PanelImages.propTypes = {
    fields: PropTypes.shape({
        small: mObject.isRequired,
        medium: mObject.isRequired,
        large: mObject.isRequired
    }).isRequired,
    busy: PropTypes.bool.isRequired,
    errors: mShape({
        small: mArrayOfString.isRequired,
        medium: mArrayOfString.isRequired,
        large: mArrayOfString.isRequired
    }).isRequired,

    onUploadSmallImage: PropTypes.func.isRequired,
    onUploadMediumImage: PropTypes.func.isRequired,
    onUploadLargeImage: PropTypes.func.isRequired,
    onRemoveSmallImage: PropTypes.func.isRequired,
    onRemoveMediumImage: PropTypes.func.isRequired,
    onRemoveLargeImage: PropTypes.func.isRequired
};
