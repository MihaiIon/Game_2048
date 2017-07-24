/**
 *
 */
Game.fn.addToScore = function( num ){
	this.currentScore += num;
	this.$gameScore.text( this.currentScore + "");
}