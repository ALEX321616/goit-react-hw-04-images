import { useState, useEffect } from 'react';
import ApiService from './ApiService/ApiService';

import Modal from './Modal/Modal';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// *******************************************
const App = () => {
  const [searchImg, setSearchImg] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [imagesData, setImagesData] = useState([]);
  const [buttonShow, setButtonShow] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (searchImg) {
      setLoading(true);

      ApiService(searchImg, page)
        .then(({ hits }) => {
          if (hits.length === 0) return toast('No images show');
          if (hits) {
            setButtonShow(hits.length === 12 ? true : false);
            setImagesData(prevImg => [...prevImg, ...hits]);
          }
          return hits;
        })
        .catch(error => {
          alert('error');
        })
        .finally(() => setLoading(false));
    }
  }, [searchImg, page]);

  const GetSearchImg = nameImg => {
    if (nameImg === searchImg) return toast('Repeated search');
    setPage(1);
    setImagesData([]);
    setSearchImg(nameImg);
    setButtonShow(false);
  };

  const addImg = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = e => {
    const imgURL = e.currentTarget.getAttribute('largeimgurl');
    const altImg = e.currentTarget.getAttribute('alt');
    setShowModal(!showModal);
    setLargeImageURL(imgURL);
    setAlt(altImg);
  };

  return (
    <>
      {loading && <Loader />}
      <Searchbar onSubmit={GetSearchImg} />
      <ToastContainer
        position="top-center"
        autoClose={1200}
        closeOnClick
        rtl={false}
        transition={Zoom}
      />
      {showModal && (
        <Modal
          alt={alt}
          largeImageURL={largeImageURL}
          showModal={toggleModal}
        />
      )}
      <ImageGallery imagesData={imagesData} showModal={toggleModal} />
      {buttonShow && <Button onClick={addImg} />}
    </>
  );
};

export default App;
