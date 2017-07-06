(function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "2048 requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
})( typeof window !== "undefined" ? window : this, function(window, noGlobal) {

	"use strict";

	var
		version = "1.0",

		Game = function( options ) {
			return new Game.fn.init( options );
		}


	Game.fn = Game.prototype = {

		/*
		 * The current version.
		 */
		version: version,

		/*
		 * Set constructors.
		 */
		constructor: Game,

		/*
		 *
		 */
		STATE: {
			IDLE: "Idle",
			IN_GAME: "In Game",
			PLAYER_WON: "Player Won",
			PLAYER_LOST: "Player Lost"
		},

		/*
		 * 
		 */
		SELECTORS: {
			score: "#game--score",
			maxScore: "#game--max-score"
		}
	}

	window.Game = Game;
});