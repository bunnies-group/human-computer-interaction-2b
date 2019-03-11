'use strict';

export default class {
  /**
   * @param {String[]} ids
   * @param {Document|HTMLElement} parent
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
