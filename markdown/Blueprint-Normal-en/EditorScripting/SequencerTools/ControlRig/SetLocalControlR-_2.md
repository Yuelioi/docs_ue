# SetLocalControlR-_2

Set ControlRig Control's Position values at specific times

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18531662.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to set value on.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a Position control.

Frames: Array of Frame Number Structures. Times to set the values.

Values: Array of Vectors. to set at those times.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

