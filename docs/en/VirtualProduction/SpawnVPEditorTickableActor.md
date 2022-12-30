# SpawnVPEditorTickableActor

Spawn an editor-only virtual production tickable actor. Note: Actors based on the non-transient AVPEditorTickableActorBase will be saved in the level.. Note: Being non-transient also means that transactions happening on them will be replicated on other connected multi-user machines

Target is VPUtilities Editor Blueprint Library

## 图示

![]($-20221218-21313982.png)

## Inputs

In: Exec.

Context Object: Object Reference.

Actor Class: VPEditor Tickable Actor Base Class Reference.

Location: Vector.

Rotation: Rotator.  

## Outputs

Out: Exec.

Return Value: VPEditor Tickable Actor Base Object Reference. Spawn an editor-only virtual production tickable actor. @note Actors based on the non-transient AVPEditorTickableActorBase will be saved in the level.. @note Being non-transient also means that transactions happening on them will be replicated on other connected multi-user machines.

