import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    SUBSCRIBERS_SHARE_PER_AREA
} from 'models/highchartConfig';
import Highchart from 'react-highcharts/ReactHighcharts';
import IconLoop from 'components/IconLoop';
import SubscribersMap from 'components/SubscribersMap';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import ListRow from 'components/ListItem/ListRow';
import SubscribersReturning from 'components/SubscribersReturning';

function Subscribers(props) {
    return (
        <div>
            <SubPanel
                title="SUBSCRIBERS"
                listCategories={props.listCategories}
                categories={props.categories}
                onChangeCategory={props.onChangeCategoryHandler}
                dateRangePicker={props.dateRangePicker}
                onRangeDate={props.onRangeDate}
            />
            <div styleName='root'>
                <Substrate title={'HIGHLIGHTS'}>
                    <div styleName="returning_subscribers">
                        <div>
                            <div styleName='sub_container_header'>RATING BREAKDOWN</div>
                            <div styleName="reparate_item">
                                <div styleName="list_column" style={{marginRight: 20}}>
                                    <ListRow
                                        leftItem={<IconLoop number={5} name={'star'} />}
                                        item={'1.000'}
                                    />
                                    <ListRow
                                        leftItem={<IconLoop number={4} name={'star'} />}
                                        item={995}
                                    />
                                    <ListRow
                                        leftItem={<IconLoop number={3} name={'star'} />}
                                        item={200}
                                    />
                                    <ListRow
                                        leftItem={<IconLoop number={2} name={'star'} />}
                                        item={10}
                                    />
                                    <ListRow
                                        leftItem={<IconLoop name={'star'} />}
                                        item={2}
                                    />
                                </div>
                                <div styleName="list_column" style={{marginLeft: 20}}>
                                    <ListRow
                                        leftItem={'20.000'}
                                        item={'LIFETIME NUMBER OF SUBSCRIBERS'}
                                    />
                                    <ListRow
                                        leftItem={'1.4'}
                                        item={'AVERAGE NUMBER OF POSTED TASKS'}
                                        subItem={'(PER SUBSCRIBER)'}
                                    />
                                    <ListRow
                                        styleLeftItem={{color: '#ed1967'}}
                                        leftItem={'7:00 pm'}
                                        item={'PREFERED TIME FOR SERVICE'}
                                    />
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
                </Substrate>

                <Substrate title={'RETURNING SUBSCRIBERS'}>
                    <SubscribersReturning data={props.subscribersReturning} />
                </Substrate>

                <Substrate title={'SUBSCRIBERS'}>
                    <SubscribersMap data={props.subscribers} />
                </Substrate>
            </div>
        </div>
    );
}

Subscribers.propTypes = {
    subscribersReturning: PropTypes.object.isRequired,
    subscribers: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired,
    onChangeCategoryHandler: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

export default CSSModules(Subscribers, styles);
