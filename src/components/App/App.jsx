import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoMessage from 'components/Searchbar/Message/Message';
import Loader from 'components/Searchbar/Loader/Loader';
import imagesAPI from 'components/services/Pixabey-api';
import ModalWindow from 'components/Searchbar/Modal/Modal';
import { Button } from 'components/Searchbar/Button/Button';
import { Section } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { GalleryList } from 'components/Searchbar/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
    perPage: 12,
    error: null,
    status: 'idle',
    showModal: false,
    largePicture: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const { query } = this.state;
    if (prevQuery !== query) {
      this.setState({ status: 'pending' });

      imagesAPI
        .PixabayAPI(query)
        .then(pictures => {
          this.setState({ pictures: pictures.hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  loadMorePictures(query, page, perPage) {
    console.log('hello');
  }

  openModal = image => {
    this.setState({ showModal: true, largePicture: image });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { pictures, error, status, showModal, largePicture } = this.state;

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
          <GalleryList
            pictures={pictures}
            onClick={this.openModal}
          ></GalleryList>
          {showModal && <ModalWindow largePicture={largePicture} />}
          <Button onClick={this.loadMorePictures}>Load more...</Button>
          <ToastContainer />
        </Section>
      );
    }
  }
}
