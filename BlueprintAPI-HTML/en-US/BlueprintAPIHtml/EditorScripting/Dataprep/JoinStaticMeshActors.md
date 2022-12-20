# JoinStaticMeshActors

Create a new Actor in the level that contains a duplicate of all the Actors Static Meshes Component.. The ActorsToJoin need to be in the same Level.. This will have a low impact on performance but may help the edition by grouping the meshes under a single Actor.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-18484806.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Actors to Join: Array of Static Mesh Actor Object References. List of Actors to join..

Join Options: Join Static Mesh Actors Options Structure (by ref). Options on how to join the actors..  

## Outputs

Out: Exec.

Return Value: Actor Object Reference. The new created actor..

