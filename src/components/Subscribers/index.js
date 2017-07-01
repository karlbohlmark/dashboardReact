import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    SUBSCRIBERS_SHARE_PER_AREA
} from 'models/highchartConfig';
import FIcon from 'react-fontawesome';
import SubPanel from 'components/SubPanel';
import Highchart from 'react-highcharts/ReactHighcharts';
import GoogleMapSubscribers from 'components/GoogleMap/Subscribers';
import dataMapMarkerSubscribers from 'data/dataMapMarkerSubscribers';

function Subscribers(props) {
    return (
        <div>
            <SubPanel
                title="SUBSCRIBERS"
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
            />
            <div styleName='root'>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>HIGHLIGHTS</div>
                    <div styleName="returning_subscribers">
                        <div>
                            <div styleName='sub_container_header'>RATING BREAKDOWN</div>
                            <div styleName="reparate_item">
                                <div styleName="list_column" style={{marginRight: 20}}>
                                    <div styleName="list_row">
                                        <div styleName="list_item_star">
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                        </div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> 1.000</div>
                                        </div>
                                    </div>
                                    <div styleName="list_row">
                                        <div styleName="list_item_star">
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                        </div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> 995</div>
                                        </div>
                                    </div>
                                    <div styleName="list_row">
                                        <div styleName="list_item_star">
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                        </div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> 200</div>
                                        </div>
                                    </div>
                                    <div styleName="list_row">
                                        <div styleName="list_item_star">
                                            <FIcon name={'star'} />
                                            <FIcon name={'star'} />
                                        </div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> 10</div>
                                        </div>
                                    </div>
                                    <div styleName="list_row">
                                        <div styleName="list_item_star">
                                            <FIcon name={'star'} />
                                        </div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> 2</div>
                                        </div>
                                    </div>
                                </div>
                                <div styleName="list_column" style={{marginLeft: 20}}>
                                    <div styleName="list_row">
                                        <div styleName="list_item_number">20.000</div>
                                        <div styleName="list_column_item"> LIFETIME NUMBER OF SUBSCRIBERS</div>
                                    </div>

                                    <div styleName="list_row">
                                        <div styleName="list_item_number">1.4</div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> AVERAGE NUMBER OF POSTED TASKS</div>
                                            <div styleName="list_column_itemSmall">(PER SUBSCRIBER)</div>
                                        </div>
                                    </div>
                                    <div styleName="list_row">
                                        <div styleName="list_item_number_pink">7:00 pm</div>
                                        <div styleName="list_columnItem">
                                            <div styleName="list_column_item"> PREFERED TIME FOR SERVICE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '270px'}}>
                            <div styleName='sub_container_header'>SUBSCRIBERS SHARE PER AREA</div>
                            <div styleName="list_column_highcharts" style={{margin: 5}}>
                                <Highchart config={SUBSCRIBERS_SHARE_PER_AREA} />
                            </div>
                        </div>
                    </div>
                </div>

                <div styleName='users_container'>
                    <div styleName='user_container_header'>RETURNING SUBSCRIBERS</div>
                    <div styleName="returning_subscribers">
                        <div styleName="list_column">
                            <div styleName="list_row">
                                <div styleName="list_item_number">15</div>
                                <div styleName="list_column_item"> NUMBER OF RETURNING SUBSCRIBERS</div>
                            </div>
                            <div styleName="list_row">
                                <div styleName="list_item_number">10</div>
                                <div styleName="list_columnItem">
                                    <div styleName="list_column_item"> NUMBER OF FOLLOW UP TASKS</div>
                                    <div styleName="list_column_itemSmall">(SAME SUBSCRIBER SAME CATEGORY)</div>
                                </div>
                            </div>
                            <div styleName="list_row">
                                <div styleName="list_item_number">5</div>
                                <div styleName="list_columnItem">
                                    <div styleName="list_column_item"> NUMBER OF RECURRING TASKS</div>
                                    <div styleName="list_column_itemSmall">(SAME SUBSCRIBER DIFFERENT CATEGORY)</div>
                                </div>
                            </div>
                        </div>
                        <div styleName="list_column">
                            <div styleName="list_row_reverse">
                                <div styleName="list_item_number_default">12%</div>
                                <div styleName="list_column_item_line">
                                    <strong styleName="strong_number">2</strong>
                                    &nbsp;TASKS
                                </div>
                            </div>
                            <div styleName="list_row_reverse">
                                <div styleName="list_item_number_default">10.05%</div>
                                <div styleName="list_column_item_line">
                                    <strong styleName="strong_number">3</strong>
                                    &nbsp;TASKS COMPLETED
                                </div>
                            </div>
                        </div>
                        <div styleName="list_column">
                            <div styleName="list_row_reverse">
                                <div styleName="list_item_number_default">9.3%</div>
                                <div styleName="list_column_item_line">
                                    <strong styleName="strong_number">4</strong>
                                    &nbsp;TASKS COMPLETED
                                </div>
                            </div>
                            <div styleName="list_row_reverse">
                                <div styleName="list_item_number_default">1%</div>
                                <div styleName="list_column_item_line">
                                    <small>+</small>
                                    <strong styleName="strong_number">5</strong>
                                    &nbsp;TASKS COMPLETED
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>SUBSCRIBERS</div>
                    <div style={{
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <GoogleMapSubscribers
                            data={dataMapMarkerSubscribers}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

Subscribers.propTypes = {
    onChangeCategoryHandler: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

export default CSSModules(Subscribers, styles);
