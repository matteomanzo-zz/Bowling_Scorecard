describe('The last game frame', function() {

  var lastGameFrame;

  beforeEach(function(){
    lastGameFrame = new LastGameFrame();
  });

  describe('by default', function() {

    it('should have two rolls', function() {
      expect(lastGameFrame.rolls).toEqual(2);
    });

    it('should contain 10 pins', function() {
      expect(lastGameFrame.pins).toEqual(10);
    });
  });
});
