describe('The scorecard', function() {

    var scorecard;
    var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by defult', function() {

    it('the total score should be 0', function() {
      expect(scorecard.totalScore).toEqual(0);
    });

    it('should generate 9 normal frames', function() {
      expect(scorecard.gameFrames.length).not.toEqual(0);
    });
  });

  describe('should store the score', function() {

    it('without the bonus', function() {
      scorecard.gameFrames[0].receiveFirstRoll(2);
      scorecard.gameFrames[0].receiveSecondRoll(3);
      scorecard.updateScore();
      expect(scorecard.totalScore).toEqual(5);
    });
  });
});
