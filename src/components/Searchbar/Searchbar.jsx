import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => (
    <header className="searchbar" onSubmit={ onSubmit }>
        <form className="searchForm">
            <button type="submit" className="searchForm-button">
                <span className="searchForm-button-label">
                    <FcSearch className="searchForm-button-search-icon" />
                </span>
            </button>

            <input
                className="searchForm-input"
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    </header>
);