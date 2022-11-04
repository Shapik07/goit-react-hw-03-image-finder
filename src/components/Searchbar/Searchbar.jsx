import {
  StyledSearchBar,
  SearchForm,
  SearchFormButton,
  SearchButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const SearchBar = () => {
  return (
    <StyledSearchBar className="searchbar">
      <SearchForm className="form">
        <SearchFormButton type="submit" className="button">
          <SearchButtonLabel className="button-label">Search</SearchButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </StyledSearchBar>
  );
};
