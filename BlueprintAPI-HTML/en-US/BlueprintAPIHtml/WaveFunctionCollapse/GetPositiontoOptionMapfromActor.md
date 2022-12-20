# GetPositiontoOptionMapfromActor

Get PositionToOptionsMap from a given actor that has ISM components.. This is useful when you want to derive neighboring tile data from a WFC-solved actor to be used for post processing.. This will only evaluate ISM components.

Target is Wave Function Collapse BPLibrary

## 图示

![]($-20221218-21330141.png)

## Inputs

In: Exec.

Actor: Actor Object Reference. Actor with ISM components.

Tile Size: Float (single-precision). distance between tiles.

Position to Option Map: Map of Int Vector Structures to Wave Function Collapse Option Structures.  

## Outputs

Out: Exec.

Return Value: Boolean.

