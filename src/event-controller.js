'use strict';

import Timer from './timer';
import Util from './util';
import { EOL } from 'os';

export default class {
  /**
   * @constructor
   */
  constructor() {
    this._timer = new Timer();

    const [reactionTime, results, resultsCountField] = Util.getElementsById([
      'reactionTime', 'results', 'resultsCount'
    ]);

    this._reactionTime = reactionTime;
    this._results = results;
    this._resultsCountField = resultsCountField;
    this._resultsCount = 0;
  }

  /**
   *
   */
  onStartClick() {
    if (this._timer.isActive) {
      return;
    }

    this._timer.start(time => {
      this._reactionTime.innerText = time;
    });
  }

  /**
   *
   */
  onFinishClick() {
    if (!this._timer.isActive) {
      return;
    }

    this._timer.stop();

    this._results.innerText += this._reactionTime.innerText + EOL;
    this._resultsCountField.innerText = ++this._resultsCount;
  }
}
