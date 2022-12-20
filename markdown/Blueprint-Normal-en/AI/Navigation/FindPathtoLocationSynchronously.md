# FindPathtoLocationSynchronously

Finds path instantly, in a FindPath Synchronously.

Target is Navigation System V1

## 图示

![]($-20221218-17471026.png)

## Inputs

In: Exec.

Path Start: Vector (by ref).

Path End: Vector (by ref).

Pathfinding Context: Actor Object Reference. could be one of following: NavigationData (like Navmesh actor), Pawn or Controller. This parameter determines parameters of specific pathfinding query.

Filter Class: Navigation Query Filter Class Reference.  

## Outputs

Out: Exec.

Return Value: Navigation Path Object Reference.

