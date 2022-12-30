# Observe

Observation phase:. This process randomly selects one tile from minimum entropy tiles. then randomly selects a valid option for that tile

Target is Wave Function Collapse Subsystem

## 图示

![]($-20221218-21332397.png)

## Inputs

In: Exec.

Target: Wave Function Collapse Subsystem Object Reference.

Random Seed: Integer.  

## Outputs

Out: Exec.

Tiles: Array of Wave Function Collapse Tile Structures. Array of tiles (by ref).

Remaining Tiles: Array of Integers. Array of remaining tile indices. Semi-sorted: Min Entropy tiles at the front, the rest remains unsorted (by ref).

Observation Queue: Map of Integers to Wave Function Collapse Queue Element Structures. Array to store tiles that need to be checked whether remaining options are affected during propagation phase (by ref).

Return Value: Boolean.

