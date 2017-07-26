import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import config from 'config';
import GoogleMap from 'google-map-react';
import MapMark from '../MapMark';
import {
    head,
    filter,
    isArray,
    size
} from 'lodash/fp';
import {
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_DECLINED,
    TASK_STATYS_CANCELLED,
    K_MARGIN_TOP,
    K_MARGIN_RIGHT,
    K_MARGIN_BOTTOM,
    K_MARGIN_LEFT,
    MAP_ZOOM
} from 'models/googlemap';
import {
    createMapOptions
} from 'utils';

class SegmentMapTask extends React.Component {

    constructor(props) {
        super(props);
        this.changeMapBounds = this.changeMapBounds.bind(this);
        this.renderMapMarks = this.renderMapMarks.bind(this);
        this.state = {
            mapBoundedList: [],
            currentLocation: {
                lat: isArray(props.data) && size(props.data) > 0 ? head(props.data).location.lat : 0,
                lng: isArray(props.data) && size(props.data) > 0 ? head(props.data).location.lng : 0
            }
        };
    }

    filterArr(arr) {
        return isArray(arr) ? filter(item => {
            if (item.type === TASK_STATYS_COMPLETED && TASK_STATYS_COMPLETED === this.props.uiTasks.getOrElse('')) {
                return true;
            }
            if (item.type === TASK_STATYS_ASSIGNED && TASK_STATYS_ASSIGNED === this.props.uiTasks.getOrElse('')) {
                return true;
            }
            if (item.type === TASK_STATYS_UNASSIGNED && TASK_STATYS_UNASSIGNED === this.props.uiTasks.getOrElse('')) {
                return true;
            }
            if (item.type === TASK_STATYS_DECLINED && TASK_STATYS_DECLINED === this.props.uiTasks.getOrElse('')) {
                return true;
            }
            if (item.type === TASK_STATYS_CANCELLED && TASK_STATYS_CANCELLED === this.props.uiTasks.getOrElse('')) {
                return true;
            }
            return false;
        }, arr) : (false);
    }

    renderMapMarks(arr) {
        return (this.filterArr(arr).map((item, idx) => (
            <MapMark
                    {...item}
                    key={idx}
                    lat={item.location.lat}
                    lng={item.location.lng} />
            )));
    }

    locationInScreen(location, nw, se) {
        return (
            (nw.lat > location.lat && location.lat > se.lat) &&
            (nw.lng < location.lng && location.lng < se.lng)
        );
    }

    changeMapBounds(newBounds) {
        const filteredList = filter(item => (
            this.locationInScreen(item.location, newBounds.bounds.nw, newBounds.bounds.se)
        ), this.filterArr(this.props.data));
        this.setState({mapBoundedList: filteredList});
    }
    render() {
        return (
            <div id='map' styleName='google_map'>
                <GoogleMap id='map-component'
                           bootstrapURLKeys={{
                               key: `${config.googlemap.secret}`
                           }}
                           // experimental={false}
                           onChange={this.changeMapBounds}
                           margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
                           center={this.state.currentLocation}
                           zoom={MAP_ZOOM}
                           options={createMapOptions}
                           // onChildClick={(e) => {
                           //     console.log('child click', +e, this.state.data[+e].location);
                           //     let data = this.state.data;
                           //     data[+e].showInfo = true;
                           //     this.setState({data});
                           // } }
                           // onClick={(e) => { console.log(e); } }
                           onGoogleApiLoaded={({map, maps}) => {
                               this.setState({ map, maps});
                           }}
                           yesIWantToUseGoogleMapApiInternals
                >
                    { this.renderMapMarks(this.props.data) }
                </GoogleMap>
            </div>
        );
    }
}
SegmentMapTask.propTypes = {
    uiTasks: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default CSSModules(SegmentMapTask, styles);
