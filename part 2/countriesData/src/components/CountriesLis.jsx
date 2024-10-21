import React from 'react'
import Country from './Country'

const CountriesLis = ({
    filteredData,
    selectedCountry,
    setSelectedCountry,
    weatherInfo,
    setWeatherInfo,
}) => {
    return (
        <>
            {filteredData.length === 0 ? (
                <p>{'No matches'}</p>
            ) : filteredData.length > 100 ? (
                ''
            ) : filteredData.length > 10 ? (
                <p>{'Too many matches, specify another filter'}</p>
            ) : filteredData.length === 1 ? (
                filteredData.map((country) => (
                    <div key={country.cca3}>
                        <Country
                            country={country}
                            weatherInfo={weatherInfo}
                            setWeatherInfo={setWeatherInfo}
                        />
                    </div>
                ))
            ) : (
                <ul>
                    {filteredData.map((country) => (
                        <li key={country.cca3}>
                            {country.name.common}
                            <button onClick={() => setSelectedCountry(country)}>
                                Show
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {selectedCountry && (
                <Country
                    country={selectedCountry}
                    weatherInfo={weatherInfo}
                    setWeatherInfo={setWeatherInfo}
                />
            )}
        </>
    )
}

export default CountriesLis
