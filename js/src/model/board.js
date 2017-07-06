/**
 *
 */
var Board = function( size ){

	// Jquery element corresonding to the board.
	this.$board = $( this.BOARD_SELECTOR );
	
	// Build the grid.
	this.size = size;
	this.grid = new Array( size );
	for (var i = 0; i < size; i++) {
		this.grid[i] = new Array( size );
	}

	// Clears and sets up the grid.
	this.reset();

	// Apply changes to DOM.
	this.draw();
}

/*
 * Constants
 */
Board.prototype.BOARD_SELECTOR = "#game--board";
Board.prototype.TILES_SELECTOR = "#game--tiles";