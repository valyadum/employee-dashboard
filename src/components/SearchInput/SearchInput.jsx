import React from 'react';
import style from './SearchInput.module.scss';
import { CircleX, Search } from 'lucide-react';

function SearchInput() {
    return (
      <div className={style.border}>
        <div className={style.searchContainer}>
          <div className={style.searchIcon}>
            <Search stroke="#757D8A" />
          </div>
          <input
            type="text"
            className={style.searchInput}
            placeholder="Employee"
          />
          <button className={style.clearButton}>
            <CircleX color="#757D8A" />
          </button>
        </div>
      </div>
    );
}

export default SearchInput;
