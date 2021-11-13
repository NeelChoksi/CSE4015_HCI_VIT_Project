import React from 'react';
import numeral from 'numeral';

const Table =({countries})=>{
	return(
		<div className="table">
				<tr>
					<td><strong>Country</strong></td>
					<td><strong>Population</strong></td>
					<td><strong>Total Cases</strong></td>
				</tr>
			{countries.map(({country,cases,population})=>(
				<tr>
					<td>{country}</td>
					<td>{numeral(population).format("0,0")}</td>
					<td><strong>{numeral(cases).format("0,0")}</strong></td>
				</tr>
			))}
		</div>
	);
}

export default Table;