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
                <Navbar fluid styleName="fotter">
                    <Navbar.Header>
                        <Navbar.Brand style={{
                            fontWeight: 300,
                            color: '#fff',
                            fontSize: 13
                        }}>
                            For support contact info@supportmultichoice.com
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Header styleName="fotter_brand_right">
                        <Navbar.Brand style={{
                            fontWeight: 300,
                            color: '#fff',
                            fontSize: 13,
                            paddingRight: 0
                        }}>
                            <span>Powered by</span>&nbsp;
                            <span style={{fontWeight: 500}}>Task</span>
                            <span style={{fontWeight: 400}}>Fundi</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.element
};

export default CSSModules(Page, styles);
