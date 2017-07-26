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
    CATEGORY_ALL,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL,
    CATEGORY_REPAIR_INSTALL_ERROR,
    K_MARGIN_TOP,
    K_MARGIN_RIGHT,
    K_MARGIN_BOTTOM,
    K_MARGIN_LEFT,
    MAP_ZOOM
} from 'models/googlemap';
import {
    createMapOptions
} from 'utils';

class SegmentMapCategory extends React.Component {

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
        return isArray(arr) ? filter(item => (
            ((CATEGORY_ALL === this.props.uiCategories.getOrElse('')) ||
                (item.type === CATEGORY_NEW_INSTALL_DECODER &&
                    CATEGORY_NEW_INSTALL_DECODER === this.props.uiCategories.getOrElse('')
                ) ||
                (item.type === CATEGORY_NEW_INSTALL_SIGNAL &&
                    CATEGORY_NEW_INSTALL_SIGNAL === this.props.uiCategories.getOrElse('')
                ) ||
                (item.type === CATEGORY_NEW_INSTALL_ERROR &&
                    CATEGORY_NEW_INSTALL_ERROR === this.props.uiCategories.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_DECODER &&
                    CATEGORY_REPAIR_INSTALL_DECODER === this.props.uiCategories.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_SIGNAL &&
                    CATEGORY_REPAIR_INSTALL_SIGNAL === this.props.uiCategories.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_ERROR &&
                    CATEGORY_REPAIR_INSTALL_ERROR === this.props.uiCategories.getOrElse('')
                )
            )
        ), arr) : (false);
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
SegmentMapCategory.propTypes = {
    uiCategories: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default CSSModules(SegmentMapCategory, styles);
