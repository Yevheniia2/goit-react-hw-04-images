import { useEffect, useState } from 'react';
import { fetchImages } from 'services/FetchImages';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if(query !== '') {
      fetchImages(query, page).then(images => {
        setImages(prev => page === 1 ? images.hits: [...prev, ...images.hits]);
        setTotalPages(images.totalHits);
        if (images.hits.length === 0) {
          alert(`Ups!!! No results were found for "${query}", please edit your query.`);
        }
      }).catch(error => console.log(error)).finally(() => setIsLoading(false));
    }
    if (!query) {
      alert('Enter your request please!');
    }
  }, [query, page]);

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    setPage(1);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setPage(prev => prev + 1);
  };

  const toggleModal = image => {
    if (image) {
      setIsModalOpen(true);
      setModalImage(image);
      return;
    };
    setIsModalOpen(false);
    setModalImage('');
  };

  return(
    <div className='app'>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} toggleModal={toggleModal} />
      {isLoading && <Loader/>}
      {images.length > 0 && totalPages > 12 && !isLoading && (<Button handleLoadMore={handleLoadMore} />)}
      {isModalOpen && (<Modal modalImage={modalImage} toggleModal={toggleModal} />)}
    </div>
  );
}