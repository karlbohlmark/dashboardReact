import React, { PropTypes } from 'react';
import {
    Grid,
    Breadcrumb,
    PageHeader,
    Button
} from 'react-bootstrap';
import {
    LinkContainer
} from 'react-router-bootstrap';
import CSSModules from 'react-css-modules';

import styles from './styles.css';


function Stories(props) {
    return (
        <Grid fluid>
            <PageHeader>
                <div styleName="header">
                    Stories

                    <LinkContainer to="/story">
                        <Button>Create New</Button>
                    </LinkContainer>
                </div>
            </PageHeader>

            <Breadcrumb>
                <LinkContainer to="/content/stories/queue">
                    <Breadcrumb.Item>Queue</Breadcrumb.Item>
                </LinkContainer>

                {props.visibility.reviewTab && (
                    <LinkContainer to="/content/stories/review">
                        <Breadcrumb.Item>For review</Breadcrumb.Item>
                    </LinkContainer>
                )}

                <LinkContainer to="/content/stories/all">
                    <Breadcrumb.Item>All</Breadcrumb.Item>
                </LinkContainer>
            </Breadcrumb>

            {props.children}
        </Grid>
    );
}

Stories.propTypes = {
    visibility: {
        reviewTab: PropTypes.bool.isRequired
    },
    children: PropTypes.element.isRequired
};

export default CSSModules(Stories, styles);
