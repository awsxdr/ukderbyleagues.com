import React, { useState } from 'react';
import { compose, withStateHandlers } from 'recompose';
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import LeagueInfo from './leagueInfo';
import styles from '../styles/Map.module.css'

const LeagueMarker = ({league, onClick, showInfo, ...props}) => {
    return (
        <Marker 
            position={{ lat: league.lat, lng: league.lng }} 
            icon={{
                url: `img/${league.type.replaceAll('+', '-')}.svg`,
                size: new google.maps.Size(32, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 40)
            }}
            onClick={onClick}
            >
                {showInfo && <InfoWindow onCloseClick={props.onToggleOpen}>
                <LeagueInfo leagueName={league.name} leagueType={league.type} leagueUrl={league.url} />
            </InfoWindow>}
        </Marker>
    );
};

const InnerMap = compose(
    withScriptjs,
    withGoogleMap
)(({leagues, ...props}) => {

    var [visibleTeamInfo, setVisibleTeamInfo] = useState('');

    return (
        <GoogleMap defaultZoom={6} defaultCenter={{ lat: 54.806678, lng: -2.789241 }}>
            { leagues.map(league => <LeagueMarker key={league.name} league={league} onClick={() => setVisibleTeamInfo(league.name)} showInfo={visibleTeamInfo===league.name} />)}
        </GoogleMap>
    );
});

const Map = ({leagues}) => {
    console.log(process.env.GOOGLE_MAPS_KEY);
    return (
        <InnerMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places`}
            loadingElement={<div className={styles.map}></div>}
            containerElement={<div className={styles.map}></div>}
            mapElement={<div className={styles.map}></div>}
            mapTypeId='roadmap'
            leagues={leagues}
        />
    );
};

export default Map;