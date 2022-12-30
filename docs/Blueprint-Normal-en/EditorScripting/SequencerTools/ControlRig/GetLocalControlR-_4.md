# GetLocalControlR-_4

Get ControlRig Control's TransformNoScale value at a specific time

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18523824.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get value for.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a TransformNoScale control.

Frame: Frame Number Structure. Time to get the value.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Transform No Scale Structure. Returns Value at that time.

