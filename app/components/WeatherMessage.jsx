var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
      <h3>Det er {temp} grader i {location}</h3>
  );
}

module.exports = WeatherMessage;
