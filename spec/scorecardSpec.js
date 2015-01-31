describe('The scorecard', function() {

    var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by defult', function() {

    it('should contain 10 frames', function() {
      expect(scorecard.gameFrames).toEqual(10);
    });

    it('the total score should be 0', function() {
      expect(scorecard.totalScore).toEqual(0);
    });
  });
});
