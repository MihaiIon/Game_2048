/**
 *
 */
Game.fn.start = function( size ){

	// Reset Score.
	this.currentScore = 0;
	this.$gameScore.text("0");

	// Reset Moves.
	this.totalMoves = 0;
	this.$gameMoves.text("0");	

	// Remove Overlay
	this.$overlay.hide();

	// Resize the board if needed.
	if ( this.board && size == this.board.size ) 	this.board.reset();
	else											this.initBoard( size );

	return this;
}