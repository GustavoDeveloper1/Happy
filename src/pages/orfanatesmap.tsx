import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import mapMakerimg from '../images/Local.svg';
import {Map,TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orfanatesmap.css';

function OrfanateMap(){
    return (
        <div id="pages-map">
            <aside>
                <header>
                    <img src={mapMakerimg} alt=""/>
                </header>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão
esperando a sua visita :)</p>
            <footer>
                <strong>Brasilia</strong>
                <span>Distrito Federal</span>
            </footer>
            </aside>

            <Map 
                center={[-15.8478025,-47.9713124]}
                zoom={15}
                style={{width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
            
        < Link to="" className="create-orphanate">
            <FiPlus size={32} color="#fff"/>
        </Link>
        </div>


    );
}

export default OrfanateMap;