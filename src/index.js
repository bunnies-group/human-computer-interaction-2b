'use strict';

import EventController from './event-controller';
import Util from './util';

const eventController = new EventController();

const [circleStart, circleFinish, estimatedTime, sizeField, distanceField] = Util.getElementsById([
  'circleStart', 'circleFinish', 'estimatedTime', 'sizeField', 'distanceField'
]);

const answer = Util.askValidValue('Enter the diameter of the circles (5 or 20)', ['5', '20']);
const circleSize = answer + 'mm';

[circleStart, circleFinish].forEach(it => {
  it.style.height = circleSize;
  it.style.width = circleSize;
});

const { offsetWidth: size, offsetLeft: offsetStart } = circleStart;
const { offsetLeft: offsetFinish } = circleFinish;
const distance = offsetFinish - offsetStart;

sizeField.innerText = size;
distanceField.innerText = distance;

const a = 50, b = 150;

estimatedTime.innerText = a + b * Math.log2(distance / size + 1);

circleStart.onclick = () => eventController.onStartClick();
circleFinish.onclick = () => eventController.onFinishClick();
