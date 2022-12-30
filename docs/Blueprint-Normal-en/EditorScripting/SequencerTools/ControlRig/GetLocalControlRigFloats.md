# GetLocalControlRigFloats

Get ControlRig Control's float values at specific times

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18524769.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get value for.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a float control.

Frames: Array of Frame Number Structures. Times to get the values.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Array of Float (single-precision)s. Returns Values at those times.

