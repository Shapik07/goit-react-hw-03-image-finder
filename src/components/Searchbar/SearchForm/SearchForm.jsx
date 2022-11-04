import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  SearchFormButton,
  SearchButtonLabel,
  SearchFormInput,
  StyledSearchForm,
} from './SearchForm.styled';

export class SearchForm extends Component {
  render() {
    return (
      <StyledSearchForm className="form">
        <SearchFormButton type="submit" className="button">
          <FaSearch />
          <SearchButtonLabel className="button-label">Search</SearchButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    );
  }
}
