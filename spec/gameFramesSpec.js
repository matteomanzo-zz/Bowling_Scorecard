describe('The first 9 game frames', function() {

  var gameFrames;

  beforeEach(function() {
    gameFrames = new GameFrames();
  });

  describe('by default', function() {

    it('should have two rolls each', function() {
      expect(gameFrames.rolls).toEqual(2);
    });

    it('should contain 10 pins each', function() {
      expect(gameFrames.pins).toEqual(10);
    });

  });

});
