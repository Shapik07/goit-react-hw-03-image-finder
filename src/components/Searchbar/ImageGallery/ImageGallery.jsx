// import PropTypes from 'prop-types';
import { ImageGallery } from './ImageGallery.style';
import ImageGalleryItem from 'components/Searchbar/ImageGalleryItem/ImageGalleryItem';

export const GalleryList = ({ pictures, onClick }) => {
  return (
    <ImageGallery onClick={onClick}>
      {pictures.map(item => (
        <ImageGalleryItem key={item.id} itemData={item} onClick={onClick} />
      ))}
    </ImageGallery>
  );
};

// GalleryList.propTypes = {
//   pictures: PropTypes.array.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
