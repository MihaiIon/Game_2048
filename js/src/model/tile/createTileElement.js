/**
 * Creates the DOM Element corresponding to the actual Tile.
 */
Tile.prototype.createTileElement = function() {
	return $('<div>', { 
		id : this.buildIDSelector(),
		class: "tile tile-level-" + this.level 
			+ " " + this.buildPositionSelector(),
		html : $('<div>', {
			class: "tile-inner",
			text: this.value
		})
	});	
};

/*---------------------------------------------------------
 	<div class="tile tile-level-1 tile-position-x-y">
		<div class="tile-inner">
			2
		</div>
	</div>
---------------------------------------------------------*/