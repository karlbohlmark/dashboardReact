import React, { PropTypes } from 'react';
import {
    Panel
} from 'react-bootstrap';
import {
    compose,
    property
} from 'lodash/fp';
import {
    Just
} from 'data.maybe';

import PropTypes_ from 'utils/prop-types';
import GroupDropzone from 'components/GroupDropzone';


const pImages = property('images');
const pImagesSmall = compose(
    property('small'),
    pImages
);
const pImagesMedium = compose(
    property('medium'),
    pImages
);
const pImagesLarge = compose(
    property('large'),
    pImages
);

export default function PanelDropzones(props) {
    const [ , mSubmitErrors ] = props.errors;

    return (
        <Panel>
            <GroupDropzone
                label={Just('Small image')}
                image={props.fields.images.small}
                modal={props.modals.images.small}
                errors={mSubmitErrors.chain(pImagesSmall)}
                placeholder="Drop small image here"
                size={[ '100%', '80px' ]}
                onUpload={props.uploadSmallImageHandler}
                onRemove={props.removeSmallImageHandler}
                onModalImageAdd={props.modalPreviewSmallImageAddHandler}
                onShowModal={() => props.modalPreviewSmallImageHandler(true)}
                onCloseModal={() => props.modalPreviewSmallImageHandler(false)}
            />

            <GroupDropzone
                label={Just('Medium image')}
                image={props.fields.images.medium}
                modal={props.modals.images.medium}
                errors={mSubmitErrors.chain(pImagesMedium)}
                placeholder="Drop medium image here"
                size={[ '100%', '150px' ]}
                onUpload={props.uploadMediumImageHandler}
                onRemove={props.removeMediumImageHandler}
                onModalImageAdd={props.modalPreviewMediumImageAddHandler}
                onShowModal={() => props.modalPreviewMediumImageHandler(true)}
                onCloseModal={() => props.modalPreviewMediumImageHandler(false)}
            />

            <GroupDropzone
                label={Just('Large image')}
                image={props.fields.images.large}
                modal={props.modals.images.large}
                errors={mSubmitErrors.chain(pImagesLarge)}
                placeholder="Drop medium image here"
                size={[ '100%', '230px' ]}
                onUpload={props.uploadLargeImageHandler}
                onRemove={props.removeLargeImageHandler}
                onModalImageAdd={props.modalPreviewLargeImageAddHandler}
                onShowModal={() => props.modalPreviewLargeImageHandler(true)}
                onCloseModal={() => props.modalPreviewLargeImageHandler(false)}
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

PanelDropzones.propTypes = {
    fields: PropTypes.shape({
        images: PropTypes.shape({
            small: mObject.isRequired,
            medium: mObject.isRequired,
            large: mObject.isRequired
        }).isRequired
    }).isRequired,
    modals: PropTypes.shape({
        images: PropTypes.shape({
            small: mObject.isRequired,
            medium: mObject.isRequired,
            large: mObject.isRequired
        }).isRequired
    }).isRequired,
    errors: PropTypes_.Tuple([
        mObject.isRequired,
        mShape({
            images: PropTypes.shape({
                small: mArrayOfString.isRequired,
                medium: mArrayOfString.isRequired,
                large: mArrayOfString.isRequired
            }).isRequired
        }).isRequired
    ]).isRequired,

    uploadSmallImageHandler: PropTypes.func.isRequired,
    uploadMediumImageHandler: PropTypes.func.isRequired,
    uploadLargeImageHandler: PropTypes.func.isRequired,
    removeSmallImageHandler: PropTypes.func.isRequired,
    removeMediumImageHandler: PropTypes.func.isRequired,
    removeLargeImageHandler: PropTypes.func.isRequired,
    modalPreviewSmallImageHandler: PropTypes.func.isRequired,
    modalPreviewSmallImageAddHandler: PropTypes.func.isRequired,
    modalPreviewMediumImageHandler: PropTypes.func.isRequired,
    modalPreviewMediumImageAddHandler: PropTypes.func.isRequired,
    modalPreviewLargeImageHandler: PropTypes.func.isRequired,
    modalPreviewLargeImageAddHandler: PropTypes.func.isRequired

};
