import React from 'react'

const CountriesLis = ({ filteredData }) => {
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
                        <p>
                            Name: {country.name.official || country.name.common}
                        </p>
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
                        {country.flags &&
                            Object.keys(country.flags).length > 1 && (
                                <img
                                    src={country.flags.png}
                                    alt={country.alt}
                                />
                            )}
                    </div>
                ))
            ) : (
                <ul>
                    {filteredData.map((country) => (
                        <li key={country.cca3}>{country.name.common}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default CountriesLis
