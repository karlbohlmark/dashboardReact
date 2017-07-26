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
    GOFUNDIS_STATYS_OFFLINE,
    GOFUNDIS_STATYS_ONLINE,
    K_MARGIN_TOP,
    K_MARGIN_RIGHT,
    K_MARGIN_BOTTOM,
    K_MARGIN_LEFT,
    MAP_ZOOM
} from 'models/googlemap';
import {
    createMapOptions,
    locationInScreen
} from 'utils';

class SegmentMapGoFundis extends React.Component {

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
            if (this.props.goFundis.all.getOrElse(false)) {
                return this.props.goFundis.all.getOrElse(false);
            } else if (item.type === GOFUNDIS_STATYS_OFFLINE) {
                return this.props.goFundis.offline.getOrElse(false);
            } else if (item.type === GOFUNDIS_STATYS_ONLINE) {
                return this.props.goFundis.online.getOrElse(false);
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

    changeMapBounds(newBounds) {
        const filteredList = filter(item => (
            locationInScreen(item.location, newBounds.bounds.nw, newBounds.bounds.se)
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
SegmentMapGoFundis.propTypes = {
    goFundis: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default CSSModules(SegmentMapGoFundis, styles);
