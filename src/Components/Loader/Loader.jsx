import React from 'react'
// import CircularProgress from '@mui/material/CircularProgress';
import './Loader.css'

function Loader() {
    return (
        <div className="loader">

            <div className="spinner"></div>
            {/* <CircularProgress /> */}
            <p>Cargando....</p>
        </div>
    )
}

export default Loader
