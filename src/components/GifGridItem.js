import React from 'react';

const GifGridItem = props => {

    const { url, title } = props;

    return (
        <div className="card animate__animated animate__backInUp">
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    );
};

export default GifGridItem;
