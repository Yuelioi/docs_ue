# FindPathtoActorSynchronously

Finds path instantly, in a FindPath Synchronously. Main advantage over FindPathToLocationSynchronously is that. the resulting path will automatically get updated if goal actor moves more than TetherDistance away from last path node

Target is Navigation System V1

## 图示

![]($-20221218-17470916.png)

## Inputs

In: Exec.

Path Start: Vector (by ref).

Goal Actor: Actor Object Reference.

Tether Distance: Float (single-precision).

Pathfinding Context: Actor Object Reference. could be one of following: NavigationData (like Navmesh actor), Pawn or Controller. This parameter determines parameters of specific pathfinding query.

Filter Class: Navigation Query Filter Class Reference.  

## Outputs

Out: Exec.

Return Value: Navigation Path Object Reference.

