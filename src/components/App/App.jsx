import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
    query: '',
  };

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;
    if (prevName !== nextName) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=1&key=30097880-73ac2834789f98742941535c7&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(pictures => this.setState({ pictures: pictures.hits }))
        .catch();
    }
  }

  render() {
    return (
      <>
        <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
        {this.state.pictures && (
          <GalleryList pictures={this.state.pictures}></GalleryList>
        )}
        <ToastContainer />
      </>
    );
  }
}
