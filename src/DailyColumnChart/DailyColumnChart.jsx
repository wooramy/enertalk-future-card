import React, { PropTypes } from 'react';
import './DailyColumnChart.css';
import ElectricityUnit from '../ElectricityUnit';
import ElectricityBill from '../ElectricityBill';

const electricityPropShape = PropTypes.shape({
  usage: PropTypes.number,
  bill: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
});

function DailyColumnChart({ metering, forecast, ...options }) {
  const { usage: meteringUsage, bill: meteringBill } = metering;
  const { usage: forecastUsage, bill: forecastBill } = forecast;

  return (
    <article>
      <section className="this-month">
        <div className="metering">
          <p>이번 달 현재</p>
          <div className="metering-bill">
            {<ElectricityBill amount={meteringBill} {...options} />}
          </div>
          <div className="metering-usage">
            {<ElectricityUnit amount={meteringUsage} />}
          </div>
        </div>
        <div className="forecast">
          <p>이번 달 예상</p>
          <div className="forecast-bill">
            {<ElectricityBill amount={forecastBill} {...options} />}
          </div>
          <div className="forecast-usage">
            {<ElectricityUnit amount={forecastUsage} />}
          </div>
        </div>
      </section>
    </article>
  );
}

DailyColumnChart.defaultProps = {
  metering: {
    usage: 0,
    bill: 0,
  },
  forecast: {
    usage: 0,
    bill: 0,
  },
};

DailyColumnChart.propTypes = {
  metering: electricityPropShape.isRequired,
  forecast: electricityPropShape.isRequired,
};

export default DailyColumnChart;
