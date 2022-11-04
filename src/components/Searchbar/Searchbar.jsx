import { Component } from 'react';
import { StyledSearchBar } from './Searchbar.styled';
import { SearchForm } from 'components/Searchbar/SearchForm/SearchForm';

export class SearchBar extends Component {
  render() {
    return (
      <StyledSearchBar className="searchbar">
        <SearchForm />
      </StyledSearchBar>
    );
  }
}
