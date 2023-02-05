import React from 'react';
import { browserHistory as history } from 'react-router';


class Search extends React.Component {
   constructor(props){
    super(props);
    this._handleEntry = this._handleEntry.bind(this);
}
_handleEntry(e){
    e.preventDefault();
    history.push(`/user/${this.ref.userInput.value}`);
}
 
 render(){
    return(
        <div class='search-page'>
            <h2>Search for your favoured Rockstar Developer:</h2>
            <form onSubmit={this._handleEntry}>
                <input ref="userInput" className='search-page_input' type='text' />
                <button className='search-page_button'>Search</button>
            </form>
        </div>
    );
 }
};

export default Search;