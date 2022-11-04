import { Component } from 'react';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {

  componentDidMount() {
    
  }


  render() {
    return (
      <SearchBar>
        <GalleryList></GalleryList>
      </SearchBar>
    );
  }
}
