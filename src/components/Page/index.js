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
                        dashboard
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
                <Nav styleName="nav" stacked>
                    <LinkContainer to="/reports">
                        <NavItem>
                            Reports
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/campaigns-list">
                        <NavItem>
                            Campaigns
                        </NavItem>
                    </LinkContainer>

                    <NavDropdown title="Content" id="content-dropdown">
                        <LinkContainer to="/content/stories/queue">
                            <MenuItem>
                                Stories
                            </MenuItem>
                        </LinkContainer>

                        <LinkContainer to="/content/editor-picks">
                            <MenuItem>
                                Editor Picks
                            </MenuItem>
                        </LinkContainer>
                    </NavDropdown>


                    <LinkContainer to="/channels">
                        <NavItem>
                            Channels
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/settings">
                        <NavItem>
                            Settings
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
