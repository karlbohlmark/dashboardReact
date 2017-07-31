import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Substrate from 'components/Substrate';
import SubPanel from 'components/SubPanel';
import SubscribersMap from 'components/Subscribers/Map';
import SubscribersReturning from 'components/Subscribers/Returning';
import SubscribersRatingBreakdown from 'components/Subscribers/RatingBreakdown';
import SubscribersSharePerArea from 'components/Subscribers/SharePerArea';

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
                        <SubscribersRatingBreakdown data={props.subscribersRatingBreakdown} />
                        <SubscribersSharePerArea data={props.subscribersSharePerArea} />
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
    subscribersSharePerArea: PropTypes.object.isRequired,
    subscribersRatingBreakdown: PropTypes.object.isRequired,
    subscribersReturning: PropTypes.object.isRequired,
    subscribers: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired,
    onChangeCategoryHandler: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

export default CSSModules(Subscribers, styles);
