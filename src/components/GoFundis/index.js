import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    GOFUNDIS,
    APPROVED_GOFUNDIS,
    NUMBER_OF_GOFUNDIS,
    LIVE_ACTIVE_GOFUNDIS
} from 'models/highchartConfig';
import IconLoop from 'components/IconLoop';
import SubPanel from 'components/SubPanel';
import Highchart from 'react-highcharts/ReactHighcharts';
import GoFundisPanel from 'components/GoFundis/GoFundisPanel';
import GoogleMapGoFundis from 'components/GoogleMap/GoFundis';
import dataMapMarkerGoFundis from 'data/dataMapMarkerGoFundis';

function GoFundis(props) {
    return (
        <div>
            <SubPanel
                title="GOFUNDIS"
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
            />
            <div styleName='root'>
                <div styleName='users_container'>
                    <div styleName='user_container_header'>HIGHLIGHTS</div>
                    <div styleName="returning_subscribers">
                        <div>
                            <div style={{textAlign: 'center', backgroundColor: '#fff'}}>
                                <div styleName='sub_container_header'>GOFUNDIS</div>
                                <div styleName="list_column_itemSmall" style={{textAlign: 'center'}}>&nbsp;</div>
                                <div styleName="list_column_highcharts" style={{margin: 5}}>
                                    <Highchart config={GOFUNDIS} />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#c21f50',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7}} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Approved</div>
                                        </div>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#1d5c51',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7}} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Onboarding</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{textAlign: 'center', backgroundColor: '#fff'}}>
                                <div styleName='sub_container_header'>APPROVED GOFUNDIS</div>
                                <div styleName="list_column_itemSmall"
                                     style={{
                                         justifyContent: 'center',
                                         display: 'flex',
                                         flexDirection: 'row',
                                         alignItems: 'center'}}>
                                    (LIVE STATUS)
                                    <div style={{
                                        marginLeft: 4,
                                        width: 5,
                                        height: 5,
                                        backgroundColor: '#6ebe46',
                                        borderRadius: '50%'
                                    }} />
                                </div>
                                <div styleName="list_column_highcharts" style={{margin: 5}}>
                                    <Highchart config={APPROVED_GOFUNDIS} />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <div styleName="reparate_item">
                                            <div style={{
                                                backgroundColor: '#f2ec2b',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7}} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Offline</div>
                                        </div>
                                        <div styleName="reparate_item">
                                            <div style={{backgroundColor: '#f5ab33',
                                                width: 15,
                                                height: 15,
                                                marginRight: 7}} />
                                            <div style={{fontSize: '12px', fontWeight: 300}}>Online</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div styleName="reparate_item">
                                <div styleName="list_column" style={{marginLeft: 20}}>
                                    <div styleName="list_row_margin">
                                        <IconLoop number={5} name={'star'} />
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
                <div styleName='users_container_empty'>
                    <div styleName="returning_subscribers">
                        <div style={{ backgroundColor: '#fff', padding: 10, width: '69%'}}>
                            <div styleName='sub_container_header'>NUMBER OF GOFUNDIS</div>
                            <div styleName="list_column_highcharts_large" style={{margin: 5}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <div styleName="reparate_item" style={{marginLeft: 5, marginRight: 5}}>
                                        <div style={{
                                            backgroundColor: '#c21f50',
                                            width: 15,
                                            height: 15,
                                            marginRight: 7
                                        }} />
                                        <div style={{fontSize: '12px', fontWeight: 300}}>Approved</div>
                                    </div>
                                    <div styleName="reparate_item" style={{marginLeft: 5, marginRight: 5}}>
                                        <div style={{
                                            backgroundColor: '#1d5c51',
                                            width: 15,
                                            height: 15,
                                            marginRight: 7
                                        }} />
                                        <div style={{fontSize: '12px', fontWeight: 300}}>Onboarding</div>
                                    </div>
                                </div>
                                <Highchart config={NUMBER_OF_GOFUNDIS} />
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: 10, width: '29%'}}>
                            <div styleName='sub_container_header'
                                 style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                LIVE ACTIVE GOFUNDIS
                                <div style={{
                                    marginLeft: 7,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#6ebe46',
                                    borderRadius: '50%'
                                }} />
                            </div>
                            <div styleName="list_column_highcharts_large" style={{margin: 5}}>
                                <Highchart config={LIVE_ACTIVE_GOFUNDIS} />
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
        </div>
    );
}

GoFundis.propTypes = {
    goFundis: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,

    onChangeCategoryHandler: PropTypes.func.isRequired,
    onOfflineStatusHandler: PropTypes.func.isRequired,
    onOnlineStatusHandler: PropTypes.func.isRequired,
    onAllStatusHandler: PropTypes.func.isRequired
};

export default CSSModules(GoFundis, styles);
