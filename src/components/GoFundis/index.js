import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import FIcon from 'react-fontawesome';
import GoFundisPanel from 'components/GoFundis/GoFundisPanel';
import GoogleMapGoFundis from 'components/GoogleMap/GoFundis';
import dataMapMarkerGoFundis from 'data/dataMapMarkerGoFundis';

function GoFundis(props) {
    return (
        <div styleName='root'>
            <div styleName='users_container'>
                <div styleName='user_container_header'>HIGHLIGHTS</div>
                <div styleName="returning_subscribers">
                    <div>
                        <div styleName='sub_container_header'>GOFUNDIS</div>
                        <div styleName="list_column">
                        </div>
                    </div>
                    <div>
                        <div styleName='sub_container_header'>APPROVED GOFUNDIS</div>
                        <div styleName="list_column_itemSmall" style={{textAlign: 'center'}}>(LIVE STATUS)</div>
                        <div styleName="list_column">
                        </div>
                    </div>
                    <div>
                        <div styleName="reparate_item">
                            <div styleName="list_column" style={{marginLeft: 20}}>
                                <div styleName="list_row_margin">
                                    <div styleName="list_item_star">
                                        <FIcon name={'star'} />
                                        <FIcon name={'star'} />
                                        <FIcon name={'star'} />
                                        <FIcon name={'star'} />
                                        <FIcon name={'star'} />
                                    </div>
                                    <div styleName="list_column_item"> AVERAGE GOFUNDI RATING</div>
                                </div>

                                <div styleName="list_row_margin">
                                    <div styleName="list_item_number">25</div>
                                    <div styleName="list_columnItem">
                                        <div styleName="list_column_item"> ACTIVE GOFUNDIS</div>
                                        <div styleName="list_column_itemSmall">(IN AVERAGE PER DAY)</div>
                                    </div>
                                </div>

                                <div styleName="list_row_margin">
                                    <div styleName="list_item_number">32 yrs</div>
                                    <div styleName="list_columnItem">
                                        <div styleName="list_column_item"> AVERAGE GOFUNDIS AGE</div>
                                    </div>
                                </div>
                                <div styleName="list_row_margin">
                                    <div styleName="list_item_number">12%</div>
                                    <div styleName="list_columnItem">
                                        <div styleName="list_column_item"> GOFUNDIS WITH FOLLOW UP JOBS</div>
                                        <div styleName="list_column_itemSmall">
                                            (SAME CUSTOMER & SAME CATEGORY TYPE)
                                        </div>
                                    </div>
                                </div>
                                <div styleName="list_row_margin">
                                    <div styleName="list_item_number">5%</div>
                                    <div styleName="list_columnItem">
                                        <div styleName="list_column_item"> GOFUNDIS WITH FOLLOW UP JOBS</div>
                                        <div styleName="list_column_itemSmall">
                                            (SAME CUSTOMER & SAME CATEGORY TYPE)
                                        </div>
                                    </div>
                                </div>
                                <div styleName="list_row_margin">
                                    <div styleName="list_item_number_pink">00:45 hr</div>
                                    <div styleName="list_columnItem">
                                        <div styleName="list_column_item"> AVERAGE TIME OF COMPLETION</div>
                                        <div styleName="list_column_itemSmall">
                                            (FROM ACCEPTED TO COMPLETED)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div styleName='users_container'>
                <div styleName='user_container_header'>ACTIVE GO FUNDIS</div>
                <GoFundisPanel
                    goFundis={props.goFundis}
                    onOfflineStatusHandler={props.onOfflineStatusHandler}
                    onOnlineStatusHandler={props.onOnlineStatusHandler}
                    onAllStatusHandler={props.onAllStatusHandler}
                />
                <GoogleMapGoFundis
                    goFundis={props.goFundis}
                    data={dataMapMarkerGoFundis}
                />
            </div>
        </div>
    );
}

GoFundis.propTypes = {
};

export default CSSModules(GoFundis, styles);
