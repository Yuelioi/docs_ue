# GetActorWorldTransforms

Get Actors World Transforms at specific times

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522611.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get transform for.

Actor: Actor Object Reference. The actor.

Frames: Array of Frame Number Structures. Times to get the transform.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Array of Transforms. Returns World Transforms.

