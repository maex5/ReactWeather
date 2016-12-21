var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About!</h1>
      <p>
        This is a weather application built on React
      </p>
      <p>
        Some tools I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - API to get weather.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
