# GetLocalControlRigInts

Get ControlRig Control's integer values at specific times

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18525051.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get value for.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a intteger control.

Frames: Array of Frame Number Structures. Times to get the values.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Array of Integers. Returns Values at those times.

