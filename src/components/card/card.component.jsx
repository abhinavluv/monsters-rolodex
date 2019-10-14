import React from 'react';
import styles from './card.module.css';

const card = (props) => {
    return(
        <div className = { styles.Card }>
        <img src={`https://robohash.org/${ props.monster.id }?set=set2&size=180x180`} alt={ props.monster.name } />
        <h3>{ props.monster.name }</h3>
        <p>{ props.monster.email }</p>
        </div>
    );
};

export default card;