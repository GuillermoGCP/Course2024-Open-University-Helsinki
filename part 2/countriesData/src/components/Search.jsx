const Search = ({ setSearchTearm }) => {
    const handleSearch = (e) => {
        setSearchTearm(e.target.value)
    }
    return (
        <div>
            <h3>Find countries:</h3>
            <input type='text' onChange={handleSearch} />
        </div>
    )
}

export default Search
