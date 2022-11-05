import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
    query: '',
    loading: false,
  };

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;

    if (prevName !== nextName) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=1&key=30097880-73ac2834789f98742941535c7&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(pictures => this.setState({ pictures: pictures.hits }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { pictures, loading } = this.state;

    return (
      <>
        <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
        {loading && <Audio color="blue" />}
        {pictures && <GalleryList pictures={pictures}></GalleryList>}
        <ToastContainer />
      </>
    );
  }
}
