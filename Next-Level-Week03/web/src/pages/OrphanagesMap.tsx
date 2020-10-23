import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import mapMarkerImg from '../images/map-marker.svg';

import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function OrphanagesMap() {
  const { goBack } = useHistory();

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const defaultPosition = { latitude: -23.4179029, longitude: -51.4204603 };

  const [mapZoom, setMapZoom] = useState(13);
  const [mapPosition, setMapPosition] = useState({
    latitude: defaultPosition.latitude,
    longitude: defaultPosition.longitude,
  });

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Arapongas</strong>
          <span>Paraná</span>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <Map
        center={[mapPosition.latitude, mapPosition.longitude]}
        zoom={mapZoom}
        style={{ width: '100%', height: '100%' }}
        onClick={() => {
          setMapZoom(13);
          setMapPosition({
            latitude: defaultPosition.latitude,
            longitude: defaultPosition.longitude,
          });
        }}
      >
        {/*<TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`http://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              onClick={() => {
                setMapZoom(20);
                setMapPosition({
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                });
              }}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
