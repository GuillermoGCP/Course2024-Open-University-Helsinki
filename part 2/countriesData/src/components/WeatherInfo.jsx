const WeatherInfo = ({ weatherInfo, country }) => {
    return (
        <>
            {weatherInfo && (
                <div>
                    <h3>Weather in {country.capital}</h3>
                    <p>Temperature: {weatherInfo.current.temp_c} celsius</p>
                    <p>Local time: {weatherInfo.location.localtime}</p>
                    <p>{weatherInfo.current.condition.text}</p>
                    <img src={weatherInfo.current.condition.icon} alt='' />
                    <p>Wind: {weatherInfo.current.wind_mph} miles per hour</p>
                </div>
            )}
        </>
    )
}

export default WeatherInfo
