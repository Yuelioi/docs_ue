# SpawnAIFromClass

Spawns AI agent of a given class. The PawnClass needs to have AIController. set for the function to spawn a controller as well.

Target is AIBlueprint Helper Library

## 图示

![]($-20221218-17483691.png)

## Inputs

In: Exec.

Pawn Class: Pawn Class Reference.

Behavior Tree: Behavior Tree Object Reference. if set, and the function has successfully spawned and AI controller, this BehaviorTree asset will be assigned to the AI controller, and run..

Location: Vector.

Rotation: Rotator.

No Collision Fail: Boolean.

Owner: Actor Object Reference. lets you spawn the AI in a sublevel rather than in the persistent level (which is the default behavior)..  

## Outputs

Out: Exec.

Return Value: Pawn Object Reference.

