const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};

  domains.forEach(e => {
    while (e) {
      let item = '.' + e.split('.').reverse().join('.');
      let i = e.indexOf('.');

      domainsObj[item] = (domainsObj[item] || 0) + 1;
      e = (i !== - 1) ? e.slice(i + 1) : '';
    }
  })

  return domainsObj;
}

module.exports = {
  getDNSStats
};
