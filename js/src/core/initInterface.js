/**
 *
 */
Game.fn.initInterface = function(){

	// Map Interface. 
	this.$startBtn = $('#game--start-btn');
	this.$gameScore = $('#game--score');
	this.$gameBestScore = $('#game--best-score');

	// Start action.
	var _this = this;
	this.$startBtn.click(function(){
		var size = $('#game--size-input').val();
		_this.start(!size ? 4 : 
						size < 4 ? 4 : 
							size > 8 ? 8 : size );
	});

	// 
	this.addKeyListeners();
}