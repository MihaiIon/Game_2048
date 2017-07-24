/**
 *
 */
Game.fn.gameover = function()
{
	console.log("THE GAME IS OVER!!!");
	this.$overlay.show();
}


/**
 * Basic AI that verifies if game can continue when board is Full,
 * NOT EFFICIENT, LOTS OF REPEATS
 */
Game.fn.isGameOver = function()
{
	var currentTile_level = null;
	var board = this.board;

	for (var i = 0; i < board.size; i++) {
		for (var j = 0; j < board.size; j++) {

			currentTile_level = board.grid[i][j].level;
			
			if( ( (i-1 >= 0) && ( currentTile_level == board.grid[i-1][j].level )) ||
				( (i+1 < board.size) && (currentTile_level == board.grid[i+1][j].level )) ||
				( (j-1 >= 0) && (currentTile_level == board.grid[i][j-1].level)) ||
				( (j+1 < board.size) && (currentTile_level == board.grid[i][j+1]).level) )
			{
				console.log("GAME IS NOT OVER");
				return false;
				
			}

		}
			
	}
	return true;
}