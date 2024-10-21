import React from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'

const Country = ({ country, weatherInfo, setWeatherInfo }) => {
    React.useEffect(() => {
        axios
            .get(
                `http://api.weatherapi.com/v1/current.json?key=${
                    import.meta.env.VITE_WHEATHER_KEY
                }&q=${country.capital}&aqi=no`
            )
            .then((response) => setWeatherInfo(response.data))
            .catch((error) =>
                console.log('Error retrieving weather information', error)
            )
    }, [country])
    return (
        country && (
            <>
                <p>Name: {country.name?.official || country.name.common}</p>
                {country.capital && country.capital.length > 0 && (
                    <p>Capital: {country.capital[0]}</p>
                )}
                <p>Area: {country.area}</p>
                <ul>
                    Languages:
                    {country.languages
                        ? Object.entries(country.languages).map(
                              ([code, language]) => (
                                  <li key={code}>{language}</li>
                              )
                          )
                        : 'No languages available'}
                </ul>
                {country.flags && Object.keys(country.flags).length > 1 && (
                    <img src={country.flags.png} alt={country.alt} />
                )}
                <WeatherInfo weatherInfo={weatherInfo} country={country} />
            </>
        )
    )
}

export default Country
