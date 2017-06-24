import React, { PropTypes } from 'react';
import {
    LinkContainer
} from 'react-router-bootstrap';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import styles from './styles.css';


const textStyle = {
    color: '#000'
};

function Page(props) {
    return (
        <div>
            <Navbar fluid styleName="header">
                <Navbar.Header>
                    <Navbar.Brand style={textStyle}>
                        REPORTING SYSTEM
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav pullRight>
                    <LinkContainer to="/logout">
                        <NavItem>
                            <span style={textStyle}>
                                Logout
                            </span>
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>

            <div styleName="container">
                <Nav styleName="nav_header" bsStyle="pills">
                    <LinkContainer to="/overview">
                        <NavItem>
                            Overview
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/tasks">
                        <NavItem>
                            Tasks
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/gofundis">
                        <NavItem>
                            GoFundis
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/subscribers">
                        <NavItem>
                            Subscribers
                        </NavItem>
                    </LinkContainer>
                </Nav>

                <div styleName="children">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.element
};

export default CSSModules(Page, styles);
