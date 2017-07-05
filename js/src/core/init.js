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
			if ( !regexp.test(size) || size < 2 || size > 12 )
				throw new Error( "The 'size' provided is incorrect. "
					+ "The size of the board must be a number between 2 and 12." );
		}
		
		// Correct size if 'undefined' or 'null'.
		this.initBoard( !size ? 4 : size );

		// 
		this.state = this.STATE.IDLE;

		//
		this.currentScore = 0;
		this.maxScore = 0;

		// 
		this.addKeyListeners();
	};

	// Give the init function the Game prototype for later instantiation
	init.prototype = Game.fn;

	return new init( options );
}
