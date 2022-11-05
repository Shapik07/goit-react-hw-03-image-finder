import { ImageGallery } from './ImageGallery.style';
import ImageGalleryItem from 'components/Searchbar/ImageGalleryItem/ImageGalleryItem';

export const GalleryList = ({ pictures }) => {
  return (
    <ImageGallery>
      {pictures.map(({ id, webformatURL }) => (
        <ImageGalleryItem id={id} link={webformatURL} key={id} />
      ))}
    </ImageGallery>
  );
};
