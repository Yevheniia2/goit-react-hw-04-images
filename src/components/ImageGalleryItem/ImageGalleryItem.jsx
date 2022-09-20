export const ImageGalleryItem = ({ largeImageURL,webformatURL,toggleModal }) => {
    return (
    <li className="imageGalleryItem">
        <img className="imageGalleryItem-image" src={webformatURL} alt="" data-source={webformatURL} onClick={() => toggleModal(largeImageURL)} />
    </li>
    );
};