import { Component } from 'react';
import { ListItem, Img } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    return (
      <ListItem className="gallery-item" key={this.props.id}>
        <Img src={this.props.link} alt=" " />
      </ListItem>
    );
  }
}

export default ImageGalleryItem;
