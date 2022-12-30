# InitializeWFC

Initialize WFC process which sets up Tiles and RemainingTiles arrays. Pre-populates Tiles with StarterOptions, BorderOptions and InitialTiles

Target is Wave Function Collapse Subsystem

## 图示

![]($-20221218-21332163.png)

## Inputs

In: Exec.

Target: Wave Function Collapse Subsystem Object Reference.  

## Outputs

Out: Exec.

Tiles: Array of Wave Function Collapse Tile Structures. Array of tiles (by ref).

Remaining Tiles: Array of Integers. Array of remaining tile indices. Semi-sorted: Min Entropy tiles at the front, the rest remains unsorted (by ref).

