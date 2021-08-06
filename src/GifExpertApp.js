import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {


    // const [categoties, setCategoties,] = useState( ['One Push', 'Samurai X', 'Dragon Ball'] );
    const [categoties, setCategoties,] = useState( ['Dragon Ball'] );

    // const handlers = () => {
    //     // setCategoties([...categoties, 'Hunter x Hunter'])
    //     setCategoties(cate => [...cate, 'Hunter x Hunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoties={ setCategoties } />
            <hr/>
            {/*<button onClick={ handlers }>Agregar</button>*/}

            <ol>
                {
                    categoties.map( category => (
                        <GifGrid key={ category } category={ category } />
                        // <li key={category} > { category } </li>
                    ))
                }
            </ol>
        </>
    );
};

/*GifExpertApp.propTypes = {

};*/

export default GifExpertApp;

