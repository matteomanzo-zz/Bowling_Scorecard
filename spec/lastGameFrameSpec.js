describe('The last game frame', function() {

  var lastGameFrame;

  beforeEach(function(){
    lastGameFrame = new LastGameFrame();
  });

  describe('by default', function() {

    it('should have 2 rolls', function() {
      expect(lastGameFrame.rolls).toEqual(2);
    });

  });
});
