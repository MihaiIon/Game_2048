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

	// Track the number of created Tiles.
	this.idCount = 0;

	// Track number of tiles in Game.
	this.tilesCount = 0;

	// Append Grid to DOM.
	this.setupDOM();

	// Clears and sets up the grid.
	this.reset();
}

/*
 * Constants
 */
Board.prototype.BOARD_SELECTOR = "#game--board";
Board.prototype.TILES_SELECTOR = "#game--tiles";
Board.prototype.GRID_SELECTOR = ".board-grid";