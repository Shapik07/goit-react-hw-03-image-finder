import { ImageGallery } from './ImageGallery.style';
import ImageGalleryItem from 'components/Searchbar/ImageGalleryItem/ImageGalleryItem';

export const GalleryList = ({ pictures }) => {
  return (
    <ImageGallery>
      {pictures.map(({ id, largeImageURL }) => (
        <ImageGalleryItem id={id} link={largeImageURL} key={id} />
      ))}
    </ImageGallery>
  );
};
