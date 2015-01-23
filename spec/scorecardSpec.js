describe('The scorecard', function() {

    var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by defult', function() {

    it('should contain 10 frames', function() {
      expect(scorecard.gameFrames).toEqual(10);
    });

  });
});
