/**
 *
 */
Game.fn.start = function( size ){

	// Reset Score.
	this.$gameScore.text("0");

	// Resize the board if needed.
	if ( this.board && size == this.board.size ) {

		this.board.reset();
		this.$gameBestScore.text(this.bestScore+"");

	} else {
		
		this.initBoard( size );
		this.$gameBestScore.text("0");

	}

	return this;
}