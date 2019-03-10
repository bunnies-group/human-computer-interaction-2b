'use strict';

import Timer from './timer';

export default class {
  /**
   * @constructor
   */
  constructor() {
    this._timer = new Timer();

    this._reactionTime = document.getElementById('reactionTime');
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
  }
}
