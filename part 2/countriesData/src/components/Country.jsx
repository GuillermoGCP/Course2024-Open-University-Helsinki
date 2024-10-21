const Country = ({ country }) => {
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
            </>
        )
    )
}

export default Country
