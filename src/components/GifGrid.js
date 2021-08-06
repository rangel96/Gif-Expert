import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {

    const { data: imgs, loading } = useFetchGifs(category);

    return (
        <>
            <h3> Resultados de: { category } </h3>
            { loading && <p className="animate__rubberBand">Loading...</p> }
            <div className="card-grid">
                {
                    imgs.map( (img) => (
                        <GifGridItem key={img.id} { ...img } />
                    ))
                }
            </div>
            { imgs.length === 0 && <p className="animate__animated animate__shakeX">Gif not found</p> }
        </>
    );
};


export default GifGrid;
