import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategoties }) => {

    const [inputValue, setInputValue,] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCategoties(add => [inputValue, ...add]);
            return setInputValue('');
        }

    }

    return (

        <form onSubmit={ handleSubmit }>
            <input type="text" value={ inputValue } onChange={ handleInputChange }  />
            <h5> {inputValue} </h5>
        </form>

    );
};

AddCategory.propTypes = {
    setCategoties: PropTypes.func.isRequired,
}

export default AddCategory;
