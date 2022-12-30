# Propagate

Propagation phase:. This process checks if the selection made during the observation is valid by checking constraint validity with neighboring tiles.. Neighboring tiles may reduce their remaining options to include only valid options.. If the remaining options of a tile were modified, the neighboring tiles of the modified tile will be added to a queue.. During this process, if any contradiction (a tile with zero remaining options) is encountered, the current solve will fail.

Target is Wave Function Collapse Subsystem

## 图示

![]($-20221218-21332518.png)

## Inputs

In: Exec.

Target: Wave Function Collapse Subsystem Object Reference.  

## Outputs

Out: Exec.

Tiles: Array of Wave Function Collapse Tile Structures. Array of tiles (by ref).

Remaining Tiles: Array of Integers. Array of remaining tile indices. Semi-sorted: Min Entropy tiles at the front, the rest remains unsorted (by ref).

Observation Queue: Map of Integers to Wave Function Collapse Queue Element Structures. Array to store tiles that need to be checked whether remaining options are affected (by ref).

Propagation Count: Integer. Counter for propagation passes.

Return Value: Boolean.

