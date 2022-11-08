import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoMessage from 'components/Searchbar/Message/Message';
import Loader from 'components/Searchbar/Loader/Loader';
import API from 'components/services/Pixabey-api';
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
    showButton: false,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const prevPage = prevState.page;
    const { query, page, perPage } = this.state;
    if (prevQuery !== query || prevPage !== page) {
      this.setState({ status: 'pending' });

      API.PixabayAPI(query, page, perPage)
        .then(pictures => {
          if (pictures.total === 0) {
            this.setState({ status: 'idle' });
            return toast.warn('Woops, nothing found for your request');
          }

          if (pictures.total > perPage) {
            this.setState({ showButton: true });
          } else {
            this.setState({ showButton: false });
          }

          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...pictures.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleQuerySubmit = query => {
    this.setState({ query, page: 1 });
  };

  openModal = image => {
    this.setState({ showModal: true, largePicture: image });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  loadMorePictures = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { pictures, error, status, showModal, largePicture, showButton } =
      this.state;

    if (status === 'idle') {
      return (
        <Section>
          <SearchBar handleQuerySubmit={this.handleQuerySubmit} />
          <InfoMessage message={'Please enter a request'} />
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
          {showModal && (
            <ModalWindow
              closeModal={this.closeModal}
              largePicture={largePicture}
            />
          )}
          {showButton && (
            <Button onClick={this.loadMorePictures}>Load more...</Button>
          )}
          <ToastContainer />
        </Section>
      );
    }
  }
}
