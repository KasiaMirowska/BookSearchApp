import React from 'react';
import './App.css';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import FilterBar from './filterBar/FilterBar';
import BookList from './bookList/BookList';

export default class App extends React.Component {
  render(){
    const apiKey = 'AIzaSyBxP6mes5BaMzxZOL5bw-gJtwwluZ_J9a0'
    
    return (
      <div className="App">
       <Header />
       <SearchBar />
       <FilterBar />
       <BookList />
      
      </div>
  );
  }
  
}


