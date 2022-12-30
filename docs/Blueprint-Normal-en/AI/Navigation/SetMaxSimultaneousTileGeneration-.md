# SetMaxSimultaneousTileGeneration-

will limit the number of simultaneously running navmesh tile generation jobs to specified number.

Target is Navigation System V1

## 图示

![]($-20221218-17474677.png)

## Inputs

In: Exec.

Target: Navigation System V1 Object Reference.

Max Number Of Jobs: Integer. gets trimmed to be at least 1. You cannot use this function to pause navmesh generation.  

## Outputs

Out: Exec.

