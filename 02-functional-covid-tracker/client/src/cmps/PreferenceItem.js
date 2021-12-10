import React from 'react';

const PreferenceItem = props =>{
    console.log(props.pref)
    return(
        <>
        <li> Preferred UI: {props.pref._id}</li>
        <li> Preferred Country: {props.pref._id}</li>
        </>
    )
}

export default PreferenceItem;