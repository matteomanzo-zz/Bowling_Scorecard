var GameFrames = function() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalScore = 0;
  this.pins = 10;
};

GameFrames.prototype.receiveFirstRoll = function(knockedDownPins) {
  this.firstRollScore = knockedDownPins;
};

GameFrames.prototype.receiveSecondRoll = function(knockedDownPins) {
  this.secondRollScore = knockedDownPins;
  if (this.firstRollScore === 10) {this.secondRollScore = 0};
  this.totalScore = this.firstRollScore + this.secondRollScore;
};
