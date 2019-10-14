import React from 'react';
import styles from './search-box.module.css';

const searchBox = (props) => {
    return (
        <input 
            className={ styles.SearchBox }
            type="search" 
            placeholder={ props.placeholder } 
            onChange={ props.handleChange }
        />
    );
};

export default searchBox;