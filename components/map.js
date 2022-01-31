import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import LeagueInfo from './leagueInfo';
import styles from '../styles/Map.module.css'

const InnerMap = withScriptjs(withGoogleMap(({leagues, ...props}) => {

    return (
        <GoogleMap defaultZoom={6} defaultCenter={{ lat: 54.106678, lng: -2.789241 }}>
            { leagues.map(league => (
                <Marker 
                    position={{ lat: league.lat, lng: league.lng }} 
                    icon={{
                        url: `img/${league.type.replace('+', '-')}.svg`,
                        size: new google.maps.Size(32, 40),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(13, 32)
                    }}
                    onClick={props.onToggleOpen}
                >
                    {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                        <LeagueInfo leagueName={league.name} leagueType={league.type} leagueUrl={league.url} />
                    </InfoWindow>}
                </Marker>
            ))}
        </GoogleMap>
    );
}));

const Map = ({leagues}) => {
    return (
        <InnerMap 
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div className={styles.map}></div>}
            containerElement={<div className={styles.map}></div>}
            mapElement={<div className={styles.map}></div>}
            mapTypeId='roadmap'
            leagues={leagues}
        />
    );
};

export default Map;