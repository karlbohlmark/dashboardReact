import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import GoogleMap from 'google-map-react';
import styles from './styles.css';

import dataMapMarker from 'data/dataMapMarker';
import MapMark from './MapMark';

import config from 'config';

const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;


class SegmentMap extends React.Component {

    constructor(props) {
        super(props);
        this.getLocationSuccess = this.getLocationSuccess.bind(this);
        this.changeMapBounds = this.changeMapBounds.bind(this);
        this.renderMapMarks = this.renderMapMarks.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
        this.state = {
            data: dataMapMarker,
            mapBoundedList: [],
            currentLocation: {lat: 38.971763, lng: -97.411287},
            currentZoom: 5,
            positionIcon: 'ion-android-locate',
            showPeople: true,
            peopleSportType: 'All',
            peopleSportLevel: 'All',

            showEvents: true,
            eventsSportType: 'All',
            eventsSportLevel: 'All',

            showGroups: true,
            groupsSportType: 'All',
            groupsSportLevel: 'All'
        };
    }

    getLocationSuccess(position) {
        this.setState({
            positionIcon: 'ion-android-locate',
            positionIconSpin: false,
            currentLocation: {lat: position.coords.latitude, lng: position.coords.longitude},
            currentZoom: 12
        });
    }

    filterArr(arr) {
        return arr.filter(item => {
            if (item.type === 'people') {
                if ((item.sport === this.state.peopleSportType || this.state.peopleSportType === 'All') &&
                    (item.level === this.state.peopleSportLevel || this.state.peopleSportLevel === 'All')) {
                    return this.state.showPeople;
                }
            }
            if (item.type === 'event') {
                if ((item.sport === this.state.eventsSportType || this.state.eventsSportType === 'All') &&
                    (item.level === this.state.eventsSportLevel || this.state.eventsSportLevel === 'All')) {
                    return this.state.showEvents;
                }
            }
            if (item.type === 'group') {
                if ((item.sport === this.state.groupsSportType || this.state.groupsSportType === 'All') &&
                    (item.level === this.state.groupsSportLevel || this.state.groupsSportLevel === 'All')) {
                    return this.state.showGroups;
                }
            } else {
                return false;
            }
        });
    }

    hideInfo(item, idx) {
        let data = this.state.data;
        data[idx].showInfo = false;
        this.setState({data});
    }

    renderMapMarks(arr) {
        return (this.filterArr(arr).map((item, idx) => {
            return (<MapMark
                    type={item.type}
                    name={item.name}
                    sport={item.sport}
                    level={item.level}
                    conversationId={item.id}
                    key={idx}
                    // showInfo={item.showInfo}
                    // hideInfo={() => { this.hideInfo(item, idx); }}
                    lat={item.location.lat}
                    lng={item.location.lng} />
            );
        }));
    }

    locationInScreen(location, nw, se) {
        return (
            (nw.lat > location.lat && location.lat > se.lat) &&
            (nw.lng < location.lng && location.lng < se.lng)
        );
    }

    changeMapBounds(newBounds) {
        let filteredList = [];
        filteredList = this.filterArr(this.state.data).filter((item) => {
            return this.locationInScreen(item.location, newBounds.bounds.nw, newBounds.bounds.se);
        });
        this.setState({mapBoundedList: filteredList});
    }

    createMapOptions(maps) {
        // next props are exposed at maps
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
        // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
        return {
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_BOTTOM,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false
        };
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
                           zoom={this.state.currentZoom}
                           options={this.createMapOptions}
                           // onChildClick={(e) => {
                           //     console.log('child click', +e, this.state.data[+e].location);
                           //     let data = this.state.data;
                           //     data[+e].showInfo = true;
                           //     this.setState({data});
                           // } }
                           // onClick={(e) => { console.log(e); } }
                           onGoogleApiLoaded={({map, maps}) => { this.setState({ map, maps}); }}
                           yesIWantToUseGoogleMapApiInternals
                >
                    { this.renderMapMarks(this.state.data) }
                </GoogleMap>
            </div>
        );
    }
}
SegmentMap.propTypes = {
};

export default CSSModules(SegmentMap, styles);
