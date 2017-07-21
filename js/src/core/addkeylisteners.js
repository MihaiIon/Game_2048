/**
 * Map keys to actions.
 */
Game.fn.addKeyListeners = function(){
		
		var _this = this;

		$(document).keyup(function(e) {
	    switch(e.which) {
	        case 37: _this.leftAction();	// left
	        break;

	        case 38: _this.upAction();		// up
	        break;

	        case 39: _this.rightAction();	// right
	        break;

	        case 40: _this.downAction();	// down
	        break;

	        case 82: _this.resetAction();	// r -> for reset
	        default:
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

}

//moves All tiles from their position to the next free position start 
//from those closest to the proper side

//****** IMPORTANT *********//
// ALL POSITIONS ARE INVERTED AS SUCH -> (y,x)

Game.fn.leftAction = function()
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
}

Game.fn.resetAction = function()
{
	console.log("reset");
	this.start( this.board.size );
}