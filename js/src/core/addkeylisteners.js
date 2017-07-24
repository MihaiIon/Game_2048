/**
 * Map keys to actions.
 */
Game.fn.addKeyListeners = function(){

	var _this = this;
	$(document).keyup(function(e) {

		/*
		 * - Slide Tiles.
		 * - Reset.
		 */
	    switch(e.which) {
	        case 37: _this.slideLeft(); 	break;
	        case 38: _this.slideUp(); 		break;
	        case 39: _this.slideRight();	break;
	        case 40: _this.slideDown();		break;
	        case 82: _this.reset();	// r -> for reset
	    }

	    // prevent the default action (scroll / move caret)
	    e.preventDefault(); 
	});

}


//----------------------------------------------------------------------


/**
 * Done after any kind of Tile slide.
 */
Game.fn.afterSlide = function( tilesMoved ) {

	// Spawn new Tile. 
	if ( tilesMoved ) {
		this.board.spawnTile();
		this.incrementMoves();
	}

	// Clear merging status.
	var grid = this.board.grid;
	for (var i = 0; i < this.board.size; i++)
		for (var j = 0; j < this.board.size; j++)
			if ( grid[i][j] ) 
				grid[i][j].merged = false;

	// If board is full, launch AI.
	if(this.board.isFull() && this.isGameOver())
    	this.gameover();
}



//----------------------------------------------------------------------


/**
 * Slide all Tiles to the Left.
 */
Game.fn.slideLeft = function(){

	var currTile = null,
		tilesMoved = false,
		board = this.board;

	for (var i = 0; i < board.size; i++) {
		for (var j = 0; j < board.size; j++) {
			if(currTile = board.grid[i][j])
			{
				/*
				 * 	Find closest Tile and farthest freeSlot.
				 */
				var index = currTile.x,
					tile = null,
					freeSlotIndex = index,
					tileMoved = false;
				while( index > 0 && !tile ){
					if(board.grid[--index][j])
						tile = board.grid[index][j];
					else freeSlotIndex = index;
				}

				/*
				 * If a tile is found, check it's level and try to merge to it.
				 * Else, move <currTile> to the farthest available slot (if it can moved).
				 */
				if( tile && !tile.merged && tile.level == currTile.level ){
					board.mergeTiles( currTile, tile );
					tileMoved = tilesMoved = true;
					this.addToScore( tile.value );
				} else if( !tileMoved && freeSlotIndex != currTile.x ){
					currTile.moveTo( freeSlotIndex, j );
					tileMoved = tilesMoved = true;
				}
			}
		}
	} this.afterSlide( tilesMoved );
}


/**
 * Slide all Tiles to the Right.
 */
Game.fn.slideRight = function(){

	var currTile = null,
		tilesMoved = false,
		board = this.board;

	for (var i = board.size-1; i >= 0; i--) {
		for (var j = 0; j < board.size; j++) {
			if(currTile = board.grid[i][j])
			{
				var index = currTile.x,
					tile = null,
					freeSlotIndex = index,
					tileMoved = false;
				while( index < (board.size-1) && !tile ) {
					if( board.grid[++index][j] ) 	tile = board.grid[index][j];
					else 							freeSlotIndex = index;
				}

				if( tile && !tile.merged && tile.level == currTile.level ) {
					board.mergeTiles( currTile, tile );
					tileMoved = tilesMoved = true;
					this.addToScore( tile.value );
				} else if( !tileMoved && freeSlotIndex != currTile.x ) {
					currTile.moveTo( freeSlotIndex, j );
					tileMoved = tilesMoved = true;
				}
			}
		}
	} this.afterSlide( tilesMoved );
}


/**
 * Slide all Tiles Upward.
 */
Game.fn.slideUp = function(){

	var currTile = null,
		tilesMoved = false,
		board = this.board;

	for (var j = 0; j < board.size; j++) {
		for (var i = 0; i < board.size; i++) {
			if(currTile = board.grid[i][j])
			{
				var index = currTile.y,
					tile = null,
					freeSlotIndex = index,
					tileMoved = false;
				while( index > 0 && !tile ) {
					if( board.grid[i][--index] ) 	tile = board.grid[i][index];
					else 							freeSlotIndex = index;
				}

				if( tile && !tile.merged && tile.level == currTile.level ) {
					board.mergeTiles( currTile, tile );
					tileMoved = tilesMoved = true;
					this.addToScore( tile.value );
				} else if( !tileMoved && freeSlotIndex != currTile.y ) {
					currTile.moveTo( i, freeSlotIndex );
					tileMoved = tilesMoved = true;
				}
			}
		}
	} this.afterSlide( tilesMoved );
}


/**
 * Slide all Tiles Downward.
 */
Game.fn.slideDown = function(){

	var currTile = null,
		tilesMoved = false,
		board = this.board;

	for (var j = board.size-1; j >= 0; j--) {
		for (var i = 0; i < board.size; i++) {
			if(currTile = board.grid[i][j])
			{
				var index = currTile.y,
					tile = null,
					freeSlotIndex = index,
					tileMoved = false;
				while( index < (board.size-1) && !tile ){
					if(board.grid[i][++index]) 		tile = board.grid[i][index];
					else 							freeSlotIndex = index;
				}

				if( tile && !tile.merged && tile.level == currTile.level ){
					board.mergeTiles( currTile, tile );
					tileMoved = tilesMoved = true;
					this.addToScore( tile.value );
				} else if( !tileMoved && freeSlotIndex != currTile.y ){
					currTile.moveTo( i, freeSlotIndex );
					tileMoved = tilesMoved = true;
				}
			}
		}
	} this.afterSlide( tilesMoved );
}