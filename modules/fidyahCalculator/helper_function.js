const { getIdnYear, toInt } = require('../general_function_helper');

exports.calculateFidyah = async (rate, body) => {
  /**
   * If the year is same with the current year, quantity is one.
   * If the year is minus one from the current year, quantity is one.
   * If the year is minus two and so on from the current year, quantity is current year minus chosen year.
   */

  toInt(rate);
  const idnTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Jakarta'
  });

  for (let element of body) {
    const { year, days } = element;
    toInt(year);
    toInt(days);
    console.log(element);
  }
};
