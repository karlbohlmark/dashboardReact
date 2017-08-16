import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    LinkContainer
} from 'react-router-bootstrap';
import {
    Nav,
    NavItem
} from 'react-bootstrap';

function SideBar(props) {

    return (
        <div style={{marginTop: '60px', color: '#fff'}}>
            <div>
                <Nav className='sidebar' activeKey={1} onSelect={() => props.onClosePanel(false)}>
                    <LinkContainer to="#">
                        <NavItem eventKey={1}>
                            <div styleName="item_row">
                                <div style={{margin: 4}}>
                                    <div styleName="profile" />
                                </div>
                                <div style={{margin: 4}}>
                                    Request GoFundi
                                </div>
                            </div>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="/dashboard/overview">
                        <NavItem eventKey={2}>
                            <div styleName="item_row">
                                <div style={{margin: 4}}>
                                    <div styleName="browser" />
                                </div>
                                <div style={{margin: 4}}>
                                    Dashboard
                                </div>
                            </div>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="#">
                        <NavItem eventKey={3}>
                            <div styleName="item_row">
                                <div style={{margin: 4}}>
                                    <div styleName="settings" />
                                </div>
                                <div style={{margin: 4}}>
                                    Admin
                                </div>
                            </div>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="#">
                        <NavItem eventKey={4}>
                            <div styleName="item_row">
                                <div style={{margin: 4}}>
                                    <div styleName="logout" />
                                </div>
                                <div style={{margin: 4}}>
                                    Logout
                                </div>
                            </div>
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        </div>
    );
}

SideBar.propTypes = {
    onClosePanel: PropTypes.func.isRequired
};

export default CSSModules(SideBar, styles);
