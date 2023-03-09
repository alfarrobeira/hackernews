import { useRef } from "react";

const SearchBar = ({ setQuery, setPage }) => {
    const queryRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(queryRef.current.value);
    }

    const handleReset = (event) => {
        setQuery("");
        setPage(1);
    }

    return (
        <>
            <div className="search">
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <input type="text"
                        placeholder="Search for stories"
                        ref={queryRef}
                    />
                    <button type="submit">Search</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        </>
    );
}

export default SearchBar;