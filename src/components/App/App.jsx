import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoMessage from 'components/Searchbar/Message/Message';
import Loader from 'components/Searchbar/Loader/Loader';
import imagesAPI from 'components/services/Pixabey-api';
import { Section } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
    query: '',
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const { query } = this.state;
    if (prevQuery !== query) {
      this.setState({ status: 'pending' });

      imagesAPI
        .PixabayAPI(query)
        .then(pictures =>
          this.setState({ pictures: pictures.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  render() {
    const { pictures, error, status } = this.state;

    if (status === 'idle') {
      return (
        <Section>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <InfoMessage message={'Введите запрос'} />
          <ToastContainer />
        </Section>
      );
    }

    if (status === 'pending') {
      return (
        <Section>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <Loader />
          <ToastContainer />
        </Section>
      );
    }

    if (status === 'rejected') {
      return (
        <Section>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <InfoMessage message={error.message} />
          <ToastContainer />
        </Section>
      );
    }

    if (status === 'resolved') {
      return (
        <Section>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <GalleryList pictures={pictures}></GalleryList>
          <ToastContainer />
        </Section>
      );
    }
  }
}
