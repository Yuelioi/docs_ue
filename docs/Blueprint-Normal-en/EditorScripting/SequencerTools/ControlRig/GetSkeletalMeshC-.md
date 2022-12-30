# GetSkeletalMeshC-

Get SkeletalMeshComponent World Transform at a specific time

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530030.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get transform for.

Skeletal Mesh Component: Skeletal Mesh Component Object Reference. The SkeletalMeshComponent.

Frame: Frame Number Structure. Time to get the transform.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.

Reference Name: Name. Optional name of the referencer.  

## Outputs

Out: Exec.

Return Value: Transform. Returns World Transform.

