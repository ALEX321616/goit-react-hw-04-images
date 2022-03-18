import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  const [imagesSearch, setImagesSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!imagesSearch) return;
    onSubmit(imagesSearch);
    setImagesSearch('');
  };

  const changeSearchImg = e => {
    setImagesSearch(e.currentTarget.value.trim().toLowerCase());
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchFormbutton}>
          <span className={s.buttonLabel}>
            <BsSearch />
          </span>
        </button>

        <input
          className={s.searchFormInput}
          value={imagesSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeSearchImg}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
