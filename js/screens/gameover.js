game.GameOverScreen = me.ScreenObject.extend({
  init : function() {
		this.parent(true);
		this.font = null;
    this.title = 'Game Over';
    this.score = 'Final Score: ' + me.game.score;
	},
	
  onResetEvent: function() {	
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
		// map the left button click on the ENTER key
		me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.ENTER);
		// init a font object
    this.font = new me.Font('Verdana', 40, 'red', 'center');
    me.game.add(new BackgroundLayer('bg'));
	},

	update : function() {
		// enter pressed ?
		if (me.input.isKeyPressed('enter')) {
			me.state.change(me.state.MENU);
		}
		return false;
	},

  draw: function(context) {
		this.font.draw(context, this.title,  me.game.viewport.width/2,
        me.game.viewport.height/2 - 100);
		//this.font.draw(context, this.score,  me.game.viewport.width/2,
    //    me.game.viewport.height/2);
  },

	onDestroyEvent : function() {
		// free the font object
		this.font = null;
		// unregister the event
		me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindMouse(me.input.mouse.LEFT);
	}

});