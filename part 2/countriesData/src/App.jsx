import React from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountriesLis from './components/CountriesLis'

function App() {
    const [allCountries, setAllCountries] = React.useState([])
    const [searchTearm, setSearchTearm] = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])

    React.useEffect(() => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then((response) => setAllCountries(response.data))
            .catch((error) => console.log(error))
    }, [])

    React.useEffect(() => {
        setFilteredData(
            allCountries.filter(
                (country) =>
                    country.name.official
                        .toLowerCase()
                        .includes(searchTearm.toLowerCase()) ||
                    country.name.common
                        .toLowerCase()
                        .includes(searchTearm.toLowerCase())
            )
        )
    }, [searchTearm])

    return (
        <>
            <header>
                <h1>Countries Data</h1>
            </header>
            <main>
                <section>
                    <Search setSearchTearm={setSearchTearm} />
                    <CountriesLis filteredData={filteredData} />
                </section>
            </main>
        </>
    )
}

export default App
