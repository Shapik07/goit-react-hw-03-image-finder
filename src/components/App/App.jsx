import { Component } from 'react';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=30097880-73ac2834789f98742941535c7&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(response => response.json())
      .then(pictures => this.setState({ pictures: pictures.hits }));
  }

  render() {
    console.log(this.state.pictures);
    return (
      <>
        <SearchBar />

        <GalleryList pictures={this.state.pictures}></GalleryList>
      </>
    );
  }
}
