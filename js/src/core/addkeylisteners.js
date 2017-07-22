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
	if ( tilesMoved ) this.board.spawnTile();

	// Clear merging status.
	var grid = this.board.grid;
	for (var i = 0; i < this.board.size; i++)
		for (var j = 0; j < this.board.size; j++)
			if ( grid[i][j] ) 
				grid[i][j].merged = false;

	// If board is full, launch AI.
	if(this.board.isFull()){
    		// TODO.
    		console.log("BOARD IS FULL, MISSING AI.");
    }
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
				} else if( !tileMoved && freeSlotIndex != currTile.y ){
					currTile.moveTo( i, freeSlotIndex );
					tileMoved = tilesMoved = true;
				}
			}
		}
	} this.afterSlide( tilesMoved );
}


//----------------------------------------------------------------------

//moves All tiles from their position to the next free position start 
//from those closest to the proper side

//****** IMPORTANT *********//
// ALL POSITIONS ARE INVERTED AS SUCH -> (y,x)

/*Game.fn.leftAction = function()
{
	console.log("left");
	var currentTile = null,
		board = this.board;

	//starts from zero in x
	for (var i = 0; i < board.size; i++) {

		for (var j = 0; j < board.size; j++) {
			if(currentTile = board.grid[j][i]) //if not null
			{
				var k = currentTile.y;
				

				// moves step by step until a tile is detected or end of the board
				while(--k >= 0)
				{
					if(board.grid[j][k]) //if occupied (if not null)
					{
						//Verify if in merge condition (collision of two same level tiles)

						if (board.grid[j][k].level == currentTile.level) board.mergeTiles(currentTile.y,currentTile.x,j,k);

						//since currentTile cannot move, we break current loop. 

						else break;
					}
					else // if null, sets currentTile's y to j and changes grid 
					{
						board.grid[j][k] = currentTile;
						board.grid[j][k+1] = null;
						currentTile.moveTileInDOM(j,k);
					}
				}
			}
		}
	}

	board.spawnTile();
}

Game.fn.upAction = function()
{
	console.log("up");
	var currentTile = null,
		board = this.board;

	//Goes through the x side of the board   v	
	for (var i = 0; i < board.size; i++) {
		
		//GOes through y side of the board   >
		for (var j = 0; j < board.size; j++) {
			if(currentTile = board.grid[i][j]) //if not null
			{
				var k = currentTile.x;

				while(--k >= 0)
				{
					if(board.grid[k][j]) //if occupied (if not null)
					{
						//Verify if in merge condition (collision of two same level tiles)

						if (board.grid[k][j].level == currentTile.level) board.mergeTiles(currentTile.y,currentTile.x,k,j);

						//since currentTile cannot move, we break current loop. 

						else break;
					}
					else // if null, sets currentTile's y to j and changes grid 
					{
						board.grid[k][j] = currentTile;
						board.grid[k+1][j] = null;
						currentTile.moveTileInDOM(k,j);
					}

				}
			}
		}
	}
	board.spawnTile();
}

Game.fn.rightAction = function()
{
console.log("right");
	var currentTile = null,
		board = this.board;

	//starts from max in x
	for (var i = board.size-1; i >= 0; i--) {

		for (var j = 0; j < board.size; j++) {
			
			if(currentTile = board.grid[j][i]) //if not null
			{
				var k = currentTile.y;				

				// moves step by step until a tile is detected or end of the board
				while(++k < board.size)
				{
					if(board.grid[j][k]) //if occupied (if not null)
					{
						//Verify if in merge condition (collision of two same level tiles)

						if (board.grid[j][k].level == currentTile.level) board.mergeTiles(currentTile.y,currentTile.x,j,k);

						//since currentTile cannot move, we break current loop. 

						else break;
					}
					else // if null, sets currentTile's y to j and changes grid 
					{
						board.grid[j][k] = currentTile;
						board.grid[j][k-1] = null;
						currentTile.moveTileInDOM(j,k);
					}
				}
			}
		}
	}

	board.spawnTile();
}

Game.fn.downAction = function()
{
	console.log("down");
	var currentTile = null,
		board = this.board;

	//Goes through the x side of the board   v	
	for (var i = board.size-1; i >=0; i--) {
		
		//GOes through y side of the board   >
		for (var j = 0; j < board.size; j++) {
			
			if(currentTile = board.grid[i][j]) //if not null
			{
				var k = currentTile.x;

				while(++k < board.size)
				{
					if(board.grid[k][j]) //if occupied (if not null)
					{
						//Verify if in merge condition (collision of two same level tiles)

						if (board.grid[k][j].level == currentTile.level) board.mergeTiles(currentTile.y,currentTile.x,k,j);

						//since currentTile cannot move, we break current loop. 

						else break;
					}
					else // if null, sets currentTile's y to j and changes grid 
					{
						board.grid[k][j] = currentTile;
						board.grid[k-1][j] = null;
						currentTile.moveTileInDOM(k,j);
					}

				}
			}
		}
	}
	board.spawnTile();
} */

Game.fn.reset = function()
{
	this.start( this.board.size );
}