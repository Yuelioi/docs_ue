# SpawnVPTransientEditorTickableAc-

Spawn an editor-only transient virtual production tickable actor. Note: Actors based on the transient AVPTransientEditorTickableActorBase will NOT be saved in the level.. Note: Being transient also means that transactions happening on them will NOT be replicated on other connected multi-user machines

Target is VPUtilities Editor Blueprint Library

## 图示

![]($-20221218-21314218.png)

## Inputs

In: Exec.

Context Object: Object Reference.

Actor Class: VPTransient Editor Tickable Actor Base Class Reference.

Location: Vector.

Rotation: Rotator.  

## Outputs

Out: Exec.

Return Value: VPTransient Editor Tickable Actor Base Object Reference. Spawn an editor-only transient virtual production tickable actor. @note Actors based on the transient AVPTransientEditorTickableActorBase will NOT be saved in the level.. @note Being transient also means that transactions happening on them will NOT be replicated on other connected multi-user machines.

