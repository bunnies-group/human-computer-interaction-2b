'use strict';

import EventController from './event-controller';
import Util from './util';

const eventController = new EventController();

const [circleStart, circleFinish] = Util.getElementsById(['circleStart', 'circleFinish']);

const answer = Util.askValidValue('Enter the diameter of the circles: ', ['5', '20']);
const circleSize = answer + 'mm';

[circleStart, circleFinish].forEach(it => {
  it.style.height = circleSize;
  it.style.width = circleSize;
});

circleStart.onclick = () => eventController.onStartClick();
circleFinish.onclick = () => eventController.onFinishClick();
