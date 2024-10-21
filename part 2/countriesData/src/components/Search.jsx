const Search = ({ setSearchTearm, setSelectedCountry }) => {
    const handleSearch = (e) => {
        setSearchTearm(e.target.value)
        setSelectedCountry(null)
    }
    return (
        <div>
            <h3>Find countries:</h3>
            <input type='text' onChange={handleSearch} />
        </div>
    )
}

export default Search
