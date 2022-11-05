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

  render() {
    const { pictures } = this.state;

    return (
      <>
        <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
        <GalleryList pictures={pictures}></GalleryList>
        <ToastContainer />
      </>
    );
  }
}
