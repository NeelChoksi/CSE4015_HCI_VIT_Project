import React from 'react';
import {Map as LeafletMap,TileLayer} from 'react-leaflet';
import './Map.css';
import {showDataOnMap} from '../utils/showDataOnMap';

const Map =({center,zoom,countries,casesType})=>{

	return(
		<div className="map">
			<LeafletMap center={center} zoom={zoom}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution = '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

			{/*create dots*/}
				{showDataOnMap(countries,casesType)}
			</LeafletMap>
		</div>	
	);

};

export default Map;