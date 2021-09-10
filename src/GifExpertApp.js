import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {


    // const [categoties, setCategoties,] = useState( ['One Push', 'Samurai X', 'Dragon Ball'] );
    const [categories, setCategories,] = useState( defaultCategories );

    // const handlers = () => {
    //     // setCategoties([...categoties, 'Hunter x Hunter'])
    //     setCategoties(cate => [...cate, 'Hunter x Hunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            {/*<button onClick={ handlers }>Agregar</button>*/}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                        // <li key={category} > { category } </li>
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;

