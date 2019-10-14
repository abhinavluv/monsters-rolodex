import React, { Component } from 'react';
import styles from './App.module.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
        // fetches the results from the above link and puts it into a json
        // fetches users array from above json and modify state to extract users array and put it into monsters array
    }

    handleChange = (event) => {
        this.setState({ searchField: event.target.value })
    };

    render() {

        
        // creating a copy of the original state and making changes to the new object
        const { monsters, searchField } = this.state;
        // converts name to lowercase and searches the arg passed in includes to see if that string is present in the monster.name
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });
        

        return (
            <div className={ styles.App }>
                <h1>Monsters Rolodex</h1>
                <SearchBox 
                    placeholder="Search Monsters" 
                    handleChange={ this.handleChange }
                />
                {/* setState is an async function, hence if you log state, it will not print the current state */}
                {/* to print the current state, u need to pass a callback which will execute when this.setState is done */}
                <CardList monsters={ filteredMonsters } />
            </div>
        );
    }
}

export default App;
