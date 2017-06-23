import React, { PropTypes } from 'react';
import {
    Grid,
    Row,
    Col,
    ProgressBar,
    PageHeader,
    Modal,
    Form,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import {
    compose,
    constant,
    property
} from 'lodash/fp';
import {
    Just
} from 'data.maybe';

import PropTypes_ from 'utils/prop-types';
import AlertErrors from 'components/AlertErrors';
import PanelInputs from './PanelInputs';
import PanelDropzones from './PanelDropzones';


const pCommon = property('common');

export default function Story(props) {
    const [ mReceiveErrors ] = props.errors;

    return (
        <Grid fluid>
            <Modal show={props.done} onHide={props.agreeWithCreationHandler}>
                <Modal.Header>
                    <Modal.Title>
                        Congratulations!
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Your Story was successfully created.
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.agreeWithCreationHandler}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

            <PageHeader style={{ marginTop: 0 }}>
                <Row>
                    <Col xs={12} sm={7} md={8}>
                        Story
                    </Col>
                    <Col xs={12} sm={5} md={4}>
                        <ButtonToolbar style={{ float: 'right' }}>
                            {props.visibility.saveAsDraftButton && (
                                <Button
                                    onClick={props.saveAsDraftStoryHandler}
                                    disabled={props.busy}
                                >
                                    Save As Draft
                                </Button>
                            )}

                            {props.visibility.submitForReviewButton && (
                                <Button
                                    onClick={props.submitForReviewStoryHandler}
                                    disabled={props.busy}
                                >
                                    Submit For Review
                                </Button>
                            )}

                            {props.visibility.approveButton && (
                                <Button
                                    onClick={props.approveStoryHandler}
                                    disabled={props.busy}
                                >
                                    Approve
                                </Button>
                            )}
                        </ButtonToolbar>
                    </Col>
                </Row>
            </PageHeader>

            <Form>
                {props.fields.cata({
                    Nothing: () => props.busy ? (
                        <ProgressBar active now={100}/>
                    ) : props.bunch.map(bunch => (
                        <AlertErrors
                            title="Something went wrong:"
                            errors={mReceiveErrors.chain(pCommon)}
                            tryAgain={Just({
                                busy: props.busy,
                                handler: compose(
                                    props.receiveStoryHandler,
                                    constant(bunch)
                                )
                            })}
                        />
                    )).getOrElse(null),

                    Just: fields => (
                        <Row>
                            <Col xs={12} sm={7} md={8}>
                                <PanelInputs {...props} fields={fields} />
                            </Col>

                            <Col xs={12} sm={5} md={4}>
                                <PanelDropzones {...props} fields={fields} modals={props.modals.cata({
                                    Nothing: () => ({}),
                                    Just: modals => ({ ...modals })
                                })} />
                            </Col>
                        </Row>
                    )
                })}
            </Form>
        </Grid>
    );
}

const mObject = PropTypes_.Maybe(
    PropTypes.object.isRequired
);

const mArrayOfString = PropTypes_.Maybe(
    PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
);

Story.propTypes = {
    visibility: PropTypes.shape({
        saveAsDraftButton: PropTypes.bool.isRequired,
        submitForReviewButton: PropTypes.bool.isRequired,
        approveButton: PropTypes.bool.isRequired
    }).isRequired,
    bunch: PropTypes_.Maybe(
        PropTypes_.bunch.isRequired
    ),
    fields: mObject.isRequired,
    modals: mObject.isRequired,
    busy: PropTypes.bool.isRequired,
    done: PropTypes.bool.isRequired,
    errors: PropTypes_.Tuple([
        PropTypes_.Maybe(
            PropTypes.shape({
                common: mArrayOfString
            }).isRequired
        ).isRequired,
        mObject.isRequired
    ]).isRequired,
    receiveStoryHandler: PropTypes.func.isRequired,
    saveAsDraftStoryHandler: PropTypes.func.isRequired,
    submitForReviewStoryHandler: PropTypes.func.isRequired,
    approveStoryHandler: PropTypes.func.isRequired,
    agreeWithCreationHandler: PropTypes.func.isRequired
};
