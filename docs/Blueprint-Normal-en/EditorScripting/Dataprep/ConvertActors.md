# ConvertActors

Replace in the level all Actors provided with a new actor of type ActorClass. Destroy all Actors provided.

Target is Editor Actor Subsystem

## 图示

![]($-20221218-18484535.png)

## Inputs

In: Exec.

Target: Editor Actor Subsystem Object Reference.

Actors: Array of Actor Object References. List of Actors to replace..

Actor Class: Actor Class Reference. Class/Blueprint of the new actor that will be spawn..

Static Mesh Package Path: String. If the list contains Brushes and it is requested to change them to StaticMesh, StaticMeshPackagePath is the package path to where the StaticMesh will be created. ie. /Game/MyFolder/.  

## Outputs

Out: Exec.

Return Value: Array of Actor Object References.

