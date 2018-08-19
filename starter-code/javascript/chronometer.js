function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "intervalId";
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.setTime();
    this.currentTime++;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var min = Math.floor(this.currentTime / 60);
  return min;
};

Chronometer.prototype.setSeconds = function() {
  var sec = Math.floor(this.currentTime % 60);
  return sec;
};

Chronometer.prototype.twoDigitsNumber = function(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

Chronometer.prototype.setTime = function() {};

Chronometer.prototype.setMilliseconds = function() {};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {};

Chronometer.prototype.splitClick = function() {};
