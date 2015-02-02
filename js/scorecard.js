var Scorecard = function() {
  this.gameFrames = [];
  this.totalScore = 0;
  this.generateFrames(new GameFrame());
};

Scorecard.prototype.generateFrames = function(frame) {
  for(var i = 0; i < 10; i++) {
    this.gameFrames.push(frame)
  }
};

Scorecard.prototype.updateScore = function() {
  for(var i = 0; i < 10; i++) {
  this.totalScore += this.gameFrames[i].frameScore;
}
};
