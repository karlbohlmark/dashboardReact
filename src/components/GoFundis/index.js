import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import FIcon from 'react-fontawesome';
import Highchart from 'react-highcharts/ReactHighcharts';
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
                        <div style={{textAlign: 'center', backgroundColor: '#fff'}}>
                            <div styleName='sub_container_header'>GOFUNDIS</div>
                            <div styleName="list_column_itemSmall" style={{textAlign: 'center'}}>&nbsp;</div>
                            <div styleName="list_column_highcharts" style={{margin: 5}}>
                                <Highchart config={{
                                    credits: {
                                        enabled: false
                                    },
                                    chart: {
                                        plotBackgroundColor: null,
                                        plotBorderWidth: 0,
                                        plotShadow: false,
                                        width: 180,
                                        height: 180
                                    },
                                    colors: ['#1d5c51', '#c21f50'],
                                    title: {
                                        text: '<strong>250</strong>',
                                        style: { color: '#58585a', fontSize: '18px' },
                                        align: 'center',
                                        verticalAlign: 'middle',
                                        y: 7
                                    },
                                    tooltip: {
                                        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                    },
                                    plotOptions: {
                                        pie: {
                                            dataLabels: {
                                                enabled: false,
                                                distance: -50,
                                                style: {
                                                    fontWeight: 'bold',
                                                    color: 'white'
                                                }
                                            },
                                            startAngle: 0,
                                            endAngle: 360,
                                            center: ['50%', '50%']
                                        }
                                    },
                                    series: [{
                                        type: 'pie',
                                        name: '',
                                        innerSize: '70%',
                                        data: [
                                            ['Onboarding', 15.00],
                                            ['Approved', 85.00]
                                        ]
                                    }]
                                }} />
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
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
                            <div styleName="list_column_itemSmall" style={{textAlign: 'center'}}>(LIVE STATUS)</div>
                            <div styleName="list_column_highcharts" style={{margin: 5}}>
                                <Highchart config={{
                                    credits: {
                                        enabled: false
                                    },
                                    chart: {
                                        plotBackgroundColor: null,
                                        plotBorderWidth: 0,
                                        plotShadow: false,
                                        width: 180,
                                        height: 180
                                    },
                                    colors: ['#f5ab33', '#f2ec2b'],
                                    title: {
                                        text: '<strong>200</strong>',
                                        style: { color: '#58585a', fontSize: '18px' },
                                        align: 'center',
                                        verticalAlign: 'middle',
                                        y: 7
                                    },
                                    tooltip: {
                                        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                    },
                                    plotOptions: {
                                        pie: {
                                            dataLabels: {
                                                enabled: false,
                                                distance: -50,
                                                style: {
                                                    fontWeight: 'bold',
                                                    color: 'white'
                                                }
                                            },
                                            startAngle: 0,
                                            endAngle: 360,
                                            center: ['50%', '50%']
                                        }
                                    },
                                    series: [{
                                        type: 'pie',
                                        name: '',
                                        innerSize: '70%',
                                        data: [
                                            ['Online', 80.00],
                                            ['Offline', 20.00]
                                        ]
                                    }]
                                }} />
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
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
