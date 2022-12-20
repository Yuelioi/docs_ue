# GetCurrentPath

Returns a NEW UOBJECT that is a COPY of navigation path given controller is currently using.. The result being a copy means you won't be able to influence agent's pathfollowing. by manipulating received path.. Please use GetCurrentPathPoints if you only need the array of path points.

Target is AIBlueprint Helper Library

## 图示

![]($-20221218-17463821.png)

## Inputs

Controller: Controller Object Reference.  

## Outputs

Return Value: Navigation Path Object Reference. Returns a NEW UOBJECT that is a COPY of navigation path given controller is currently using.. The result being a copy means you won't be able to influence agent's pathfollowing. by manipulating received path.. Please use GetCurrentPathPoints if you only need the array of path points..

