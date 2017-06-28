import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import FIcon from 'react-fontawesome';
import Highchart from 'react-highcharts/ReactHighcharts';
import GoogleMapSubscribers from 'components/GoogleMap/Subscribers';
import dataMapMarkerSubscribers from 'data/dataMapMarkerSubscribers';

function Subscribers(props) {
    return (
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
                    <div>
                        <div styleName='sub_container_header'>SUBSCRIBERS SHARE PER AREA</div>
                        <div styleName="list_column_highcharts" style={{margin: 5}}>
                            <Highchart config={{
                                credits: {
                                    enabled: false
                                },
                                chart: {
                                    type: 'column',
                                    width: 180,
                                    height: 180
                                },
                                title: {
                                    text: ''
                                },
                                subtitle: {
                                    text: ''
                                },
                                xAxis: {
                                    type: 'category'
                                },
                                yAxis: {
                                    title: {
                                        text: ''
                                    }

                                },
                                legend: {
                                    enabled: false
                                },
                                plotOptions: {
                                    series: {
                                        borderWidth: 0,
                                        dataLabels: {
                                            enabled: true,
                                            format: '{point.y:.1f}%'
                                        }
                                    }
                                },

                                tooltip: {
                                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                },

                                series: [{
                                    name: 'Brands',
                                    colorByPoint: true,
                                    data: [{
                                        name: 'Microsoft Internet Explorer',
                                        y: 56.33,
                                        drilldown: 'Microsoft Internet Explorer'
                                    }, {
                                        name: 'Chrome',
                                        y: 24.03,
                                        drilldown: 'Chrome'
                                    }, {
                                        name: 'Firefox',
                                        y: 10.38,
                                        drilldown: 'Firefox'
                                    }, {
                                        name: 'Safari',
                                        y: 4.77,
                                        drilldown: 'Safari'
                                    }, {
                                        name: 'Opera',
                                        y: 0.91,
                                        drilldown: 'Opera'
                                    }, {
                                        name: 'Proprietary or Undetectable',
                                        y: 0.2,
                                        drilldown: null
                                    }]
                                }],
                                drilldown: {
                                    series: [{
                                        name: 'Microsoft Internet Explorer',
                                        id: 'Microsoft Internet Explorer',
                                        data: [
                                            [
                                                'v11.0',
                                                24.13
                                            ],
                                            [
                                                'v8.0',
                                                17.2
                                            ],
                                            [
                                                'v9.0',
                                                8.11
                                            ],
                                            [
                                                'v10.0',
                                                5.33
                                            ],
                                            [
                                                'v6.0',
                                                1.06
                                            ],
                                            [
                                                'v7.0',
                                                0.5
                                            ]
                                        ]
                                    }, {
                                        name: 'Chrome',
                                        id: 'Chrome',
                                        data: [
                                            [
                                                'v40.0',
                                                5
                                            ],
                                            [
                                                'v41.0',
                                                4.32
                                            ],
                                            [
                                                'v42.0',
                                                3.68
                                            ],
                                            [
                                                'v39.0',
                                                2.96
                                            ],
                                            [
                                                'v36.0',
                                                2.53
                                            ],
                                            [
                                                'v43.0',
                                                1.45
                                            ],
                                            [
                                                'v31.0',
                                                1.24
                                            ],
                                            [
                                                'v35.0',
                                                0.85
                                            ],
                                            [
                                                'v38.0',
                                                0.6
                                            ],
                                            [
                                                'v32.0',
                                                0.55
                                            ],
                                            [
                                                'v37.0',
                                                0.38
                                            ],
                                            [
                                                'v33.0',
                                                0.19
                                            ],
                                            [
                                                'v34.0',
                                                0.14
                                            ],
                                            [
                                                'v30.0',
                                                0.14
                                            ]
                                        ]
                                    }, {
                                        name: 'Firefox',
                                        id: 'Firefox',
                                        data: [
                                            [
                                                'v35',
                                                2.76
                                            ],
                                            [
                                                'v36',
                                                2.32
                                            ],
                                            [
                                                'v37',
                                                2.31
                                            ],
                                            [
                                                'v34',
                                                1.27
                                            ],
                                            [
                                                'v38',
                                                1.02
                                            ],
                                            [
                                                'v31',
                                                0.33
                                            ],
                                            [
                                                'v33',
                                                0.22
                                            ],
                                            [
                                                'v32',
                                                0.15
                                            ]
                                        ]
                                    }, {
                                        name: 'Safari',
                                        id: 'Safari',
                                        data: [
                                            [
                                                'v8.0',
                                                2.56
                                            ],
                                            [
                                                'v7.1',
                                                0.77
                                            ],
                                            [
                                                'v5.1',
                                                0.42
                                            ],
                                            [
                                                'v5.0',
                                                0.3
                                            ],
                                            [
                                                'v6.1',
                                                0.29
                                            ],
                                            [
                                                'v7.0',
                                                0.26
                                            ],
                                            [
                                                'v6.2',
                                                0.17
                                            ]
                                        ]
                                    }, {
                                        name: 'Opera',
                                        id: 'Opera',
                                        data: [
                                            [
                                                'v12.x',
                                                0.34
                                            ],
                                            [
                                                'v28',
                                                0.24
                                            ],
                                            [
                                                'v27',
                                                0.17
                                            ],
                                            [
                                                'v29',
                                                0.16
                                            ]
                                        ]
                                    }]
                                }
                            }} />
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
                <GoogleMapSubscribers
                    data={dataMapMarkerSubscribers}
                />
            </div>
        </div>
    );
}

Subscribers.propTypes = {
};

export default CSSModules(Subscribers, styles);
