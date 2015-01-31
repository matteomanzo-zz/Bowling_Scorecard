describe('The first 9 game frames', function() {

  var gameFrame;

  beforeEach(function() {
    gameFrame = new GameFrames();
  });

  describe('by default', function() {

    it('should contain 10 pins each', function() {
      expect(gameFrame.pins).toEqual(10);
    });

    it('should have the first roll score equal to 0', function() {
      expect(gameFrame.firstRollScore).toEqual(0);
    });

    it('should have the second roll score equal to 0', function() {
      expect(gameFrame.secondRollScore).toEqual(0);
    });

    it('should have a total score of 0', function() {
      expect(gameFrame.totalScore).toEqual(0);
    });

  });

  describe('when receive rolls', function() {

    it('the first roll score should be the number of knocked down pins', function() {
      gameFrame.receiveFirstRoll(4);
      expect(gameFrame.firstRollScore).toEqual(4);
    });

    it('the second roll score should be the number of knocked down pins added to the first roll score', function() {
      gameFrame.receiveFirstRoll(4);
      gameFrame.receiveSecondRoll(5);
      expect(gameFrame.totalScore).toEqual(9);
    });

    it('the second roll score should be 0 even with an input if the first roll was a strike', function() {
      gameFrame.receiveFirstRoll(10);
      gameFrame.receiveSecondRoll(34);
      expect(gameFrame.totalScore).toEqual(10);
    });

    it('should check if is a strike', function() {
      gameFrame.receiveFirstRoll(10);
      expect(gameFrame._isAStrike()).toBe(true);
    });
  });

});
