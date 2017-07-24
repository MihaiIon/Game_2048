/**
 *
 */
Game.fn.init = function ( options ){

	"use strict";
	var init = Game.fn.init = function( options ){
	
		// Validate dimensions
		var size = options.size,
		    regexp = /^\d{1,2}$/;

		if ( size ) 
		{
			if ( !regexp.test(size) || size < 4 || size > 8 )
				throw new Error( "The 'size' provided is incorrect. "
					+ "The size of the board must be a number between 4 and 8." );
		}

		// Controls the flow of the game.
		this.state = this.STATE.IDLE;
		this.currentScore = 0;
		this.totalMoves = 0;

		// Correct size if 'undefined' or 'null'.
		this.initInterface();

		// Start game.
		this.start( !size ? 4 : size )
	};

	// Give the init function the Game prototype for later instantiation
	init.prototype = Game.fn;

	return new init( options );
}
