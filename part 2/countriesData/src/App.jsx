import React from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountriesLis from './components/CountriesLis'

function App() {
    const [allCountries, setAllCountries] = React.useState([])
    const [searchTearm, setSearchTearm] = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])
    const [selectedCountry, setSelectedCountry] = React.useState(null)
    const [weatherInfo, setWeatherInfo] = React.useState(null)

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
                    <Search
                        setSearchTearm={setSearchTearm}
                        setSelectedCountry={setSelectedCountry}
                    />
                    <CountriesLis
                        filteredData={filteredData}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        weatherInfo={weatherInfo}
                        setWeatherInfo={setWeatherInfo}
                    />
                </section>
            </main>
        </>
    )
}

export default App
