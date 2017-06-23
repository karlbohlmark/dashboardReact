import React, { PropTypes } from 'react';
import {
    Row,
    Col,
    Alert,
    Image,
    Form,
    FormGroup,
    FormControl,
    HelpBlock,
    ControlLabel,
    Checkbox,
    Radio,
    Button
} from 'react-bootstrap';
import {
    compose,
    constant,
    property,
    map,
    F
} from 'lodash/fp';

import PropTypes_ from 'utils/prop-types';
import veonLogo from './__assets__/veon.png';


const cError = constant('error');
const pTitle = property('title');
const pMessage = property('message');
const pSendAt = property('sendAt');
const pCommon = property('common');
const pTarget = property('target');
const pTargetValue = compose(
    property('value'),
    pTarget
);
const pTargetChecked = compose(
    property('checked'),
    pTarget
);

const mapErrors = map(error => (
    <HelpBlock key={error}>{error}</HelpBlock>
));

function Push(props) {
    const mTitleErrors = props.errors.chain(pTitle);
    const mMessageErrors = props.errors.chain(pMessage);
    const mSendAtErrors = props.errors.chain(pSendAt);
    const mCommonErrors = props.errors.chain(pCommon);
    const whenStart = props.fields.sendAt.map(F).getOrElse(true);
    const [ sendAtDate, sendAtTime ] = props.fields.sendAt.getOrElse([ '', '' ]);

    return (
        <Form
            noValidate
            onSubmit={event => {
                props.goNextTabHandler();
                event.preventDefault();
            }}
        >
            <FormGroup>
                <h3>
                    Compose push notification
                </h3>
            </FormGroup>

            <Row>
                <Col xs={12} sm={7}>
                    <FormGroup>
                        <Checkbox
                            checked={props.enabled}
                            onChange={compose(
                                props.enablePushHandler,
                                pTargetChecked
                            )}
                        >
                            Use Push Notification to notify users
                        </Checkbox>
                    </FormGroup>

                    <FormGroup validationState={mTitleErrors.map(cError).getOrElse(null)}>
                        <ControlLabel>
                            Title
                        </ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder="Title"
                            disabled={!props.enabled}
                            value={props.fields.title.getOrElse('')}
                            onChange={compose(
                                props.changeTitleHandler,
                                pTargetValue
                            )}
                        />

                        {mTitleErrors.map(mapErrors).getOrElse(null)}
                    </FormGroup>

                    <FormGroup validationState={mMessageErrors.map(cError).getOrElse(null)}>
                        <ControlLabel>
                            Message
                        </ControlLabel>
                        <FormControl
                            style={{
                                resize: 'none'
                            }}
                            rows={5}
                            componentClass="textarea"
                            placeholder="Message"
                            disabled={!props.enabled}
                            value={props.fields.message.getOrElse('')}
                            onChange={compose(
                                props.changeMessageHandler,
                                pTargetValue
                            )}
                        />

                        {mMessageErrors.map(mapErrors).getOrElse(null)}
                    </FormGroup>

                    <FormGroup validationState={mSendAtErrors.map(cError).getOrElse(null)}>
                        <ControlLabel>
                            Choose When To Send Push
                        </ControlLabel>

                        <Radio
                            checked={whenStart}
                            disabled={!props.enabled}
                            onChange={props.selectOnStartHandler}
                        >
                            On campaign start
                        </Radio>

                        <Radio
                            checked={!whenStart}
                            disabled={!props.enabled}
                            onChange={props.selectOnFutureHandler}
                        >
                            Schedule for later
                        </Radio>

                        <Row>
                            <Col xs={6}>
                                <FormControl
                                    type="date"
                                    value={sendAtDate}
                                    placeholder="YYYY-MM-DD"
                                    disabled={!props.enabled || whenStart}
                                    onChange={compose(
                                        props.changeSendAtDateHandler,
                                        pTargetValue
                                    )}
                                />
                            </Col>

                            <Col xs={6}>
                                <FormControl
                                    type="time"
                                    value={sendAtTime}
                                    placeholder="HH:mm"
                                    disabled={!props.enabled || whenStart}
                                    onChange={compose(
                                        props.changeSendAtTimeHandler,
                                        pTargetValue
                                    )}
                                />
                            </Col>
                        </Row>

                        {mSendAtErrors.map(mapErrors).getOrElse(null)}
                    </FormGroup>
                </Col>

                {props.enabled && (
                    <Col xs={12} sm={5}>
                        <h4>Notification Preview</h4>

                        <Alert
                            style={{
                                wordWrap: 'break-word'
                            }}
                        >
                            <Row>
                                <Col xs={3}>
                                    <Image thumbnail src={veonLogo} />
                                </Col>
                                <Col xs={9}>
                                    <h4>
                                        {props.displayedTitle.getOrElse(
                                            <i>You can write a title</i>
                                        )}
                                    </h4>
                                    <p>
                                        {props.displayedMessage.getOrElse(
                                            <i>You can write a message</i>
                                        )}
                                    </p>
                                </Col>
                            </Row>
                        </Alert>
                    </Col>
                )}
            </Row>

            <FormGroup validationState={mCommonErrors.map(cError).getOrElse(null)}>
                <Row>
                    <Col xs={12} sm={5} smOffset={4}>
                        {mCommonErrors.map(mapErrors).getOrElse(null)}
                    </Col>

                    <Col xs={12} sm={3}>
                        <Button type="submit" block>
                            Next
                        </Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
}

const errorsList = PropTypes_.Maybe(
    PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
);

Push.propTypes = {
    enabled: PropTypes.bool.isRequired,
    fields: PropTypes.shape({
        title: PropTypes_.Maybe(
            PropTypes.string.isRequired
        ).isRequired,
        message: PropTypes_.Maybe(
            PropTypes.string.isRequired
        ).isRequired,
        sendAt: PropTypes_.Maybe(
            PropTypes_.Tuple([
                PropTypes.string.isRequired,
                PropTypes.string.isRequired
            ]).isRequired
        ).isRequired
    }).isRequired,
    displayedTitle: PropTypes_.Maybe(
        PropTypes.string.isRequired
    ).isRequired,
    displayedMessage: PropTypes_.Maybe(
        PropTypes.string.isRequired
    ).isRequired,
    errors: PropTypes_.Maybe(
        PropTypes.shape({
            title: errorsList.isRequired,
            message: errorsList.isRequired,
            sendAt: errorsList.isRequired,
            common: errorsList.isRequired
        }).isRequired
    ).isRequired,

    goNextTabHandler: PropTypes.func.isRequired,
    enablePushHandler: PropTypes.func.isRequired,
    changeTitleHandler: PropTypes.func.isRequired,
    changeMessageHandler: PropTypes.func.isRequired,
    selectOnStartHandler: PropTypes.func.isRequired,
    selectOnFutureHandler: PropTypes.func.isRequired,
    changeSendAtDateHandler: PropTypes.func.isRequired,
    changeSendAtTimeHandler: PropTypes.func.isRequired
};

export default Push;
