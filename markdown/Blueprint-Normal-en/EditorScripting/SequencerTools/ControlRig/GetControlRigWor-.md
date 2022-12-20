# GetControlRigWor-

Get ControlRig Control's World Transform at a specific time

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522881.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get transform for.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control.

Frame: Frame Number Structure. Time to get the transform.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Transform. Returns World Transform.

