import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoMessage from 'components/Searchbar/Message/Message';
import Loader from 'components/Searchbar/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
    query: '',
    error: null,
    status: 'idle',
  };

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const { query } = this.state;
    if (prevQuery !== query) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${query}&page=1&key=30097880-73ac2834789f98742941535c7&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error('По вашему запросу ничего не найдено')
            );
          })
          .then(pictures =>
            this.setState({ pictures: pictures.hits, status: 'resolved' })
          )
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }

  render() {
    const { pictures, error, status } = this.state;

    if (status === 'idle') {
      return (
        <>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <InfoMessage message={'Введите запрос'} />
          <ToastContainer />
        </>
      );
    }

    if (status === 'pending') {
      return (
        <>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <Loader />
          <ToastContainer />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <InfoMessage message={error.message} />
          <ToastContainer />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <GalleryList pictures={pictures}></GalleryList>
          <ToastContainer />
        </>
      );
    }
  }
}
