'use strict';

export default class {
  /**
   * @param {Number} from
   * @param {Number} to
   * @return {Number}
   */
  static randomInt({ from = 0, to = 10000 } = {}) {
    return Math.floor(from + Math.random() * (to - from));
  }

  /**
   * @param {Number} timeout
   * @return {Promise}
   */
  static setTimeoutPromise(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  /**
   * @param {String[]} ids
   * @param {Document} parent
   * @return {HTMLElement[]}
   */
  static getElementsById(ids, parent = document) {
    return ids.map(id => parent.getElementById(id));
  }

  /**
   * @param {String} question
   * @param {Array} validValues
   * @return {string}
   */
  static askValidValue(question, validValues) {
    while (true) {
      const answer = prompt(question);

      if (validValues.includes(answer)) {
        return answer;
      }

      alert(`You have entered an invalid value: ${answer}`);
    }
  }
}
