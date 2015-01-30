var GameFrames = function() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalScore = 0;
  this.pins = 10;
};

GameFrames.prototype.receiveFirstRoll = function(knockedDownPins) {
  this.firstRollScore = knockedDownPins;
  if (knockedDownPins === this.pins) {this.firstRollScore = 'Strike!'};
};

GameFrames.prototype.receiveSecondRoll = function(knockedDownPins) {
  this.secondRollScore = (knockedDownPins + this.firstRollScore);
  this.totalScore = this.secondRollScore
};
