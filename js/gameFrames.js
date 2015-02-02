var GameFrame = function() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frameScore = 0;
  this.pins = 10;
};

GameFrame.prototype.receiveFirstRoll = function(knockedDownPins) {
  this.firstRollScore = knockedDownPins;
};

GameFrame.prototype.receiveSecondRoll = function(knockedDownPins) {
  this.secondRollScore = knockedDownPins;
  if (this.firstRollScore === 10) {this.secondRollScore = 0};
  this.frameScore = this.firstRollScore + this.secondRollScore;
};

GameFrame.prototype._isAStrike = function() {
  return this.firstRollScore === 10;
};

GameFrame.prototype._isASpare = function() {
  if (this.firstRollScore != 10) {return this.frameScore === 10};
};
