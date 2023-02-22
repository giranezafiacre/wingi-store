import React from 'react';
import './filter.css';
import logo from '../../assets/images/wingi-logo.png';
import spinner from '../../assets/images/spinner.svg';

const Filter = (props) => {
    return (
        <div className='filter'>
            <div>
                <img src={logo} onClick={(e) => {
                  window.location.href = "https://wingi-store.vercel.app/"
                }}  alt='Wingi-logo' />
            </div>
            <div className='form-filter'>
                <form>
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control"
                            placeholder="What are you looking for?" value={props.filterText} onChange={props.handleFilter}/>
                    </div>
                    <button className="live-search-button" type="submit"
                        aria-label="Search" data-live-search-submit="">
                        <span className="search-icon search-icon--inactive">
                            <svg class="icon-search " aria-hidden="true"
                                focusable="false" role="presentation"
                                xmlns="http://www.w3.org/2000/svg" width="21"
                                height="24" viewBox="0 0 21 24" fill="none">
                                <title>Search icon</title>
                                <path d="M19.5 21.5L13.6155 15.1628"
                                    stroke="currentColor"
                                    stroke-width="1.75">
                                </path>
                                <circle cx="9.5" cy="9.5" r="7"
                                    stroke="currentColor" stroke-width="1.75">
                                </circle>
                            </svg>

                        </span>
                        <span className="spinner search-icon search-icon--active">
                            <img src={spinner} alt='spinner' />
                        </span>
                    </button>
                </form>
            </div>

        </div>
    )
}
export default Filter;