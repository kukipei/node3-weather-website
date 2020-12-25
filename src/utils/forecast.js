const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0beeb451cf0c93e95eda29b38192db3d&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Request failed. Probably wrong latitude or longitude', undefined)
        } else {
            let data = body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degreese outide. It fills like " + body.current.feelslike + ". Humidity is " + body.current.humidity

            callback(undefined, data)
        }
    })

}

module.exports = forecast