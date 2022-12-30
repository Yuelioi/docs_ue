# GetLocalControlR-_5

Get ControlRig Control's TransformNoScale values at specific times

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18523957.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to get value for.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a TransformNoScale control.

Frames: Array of Frame Number Structures. Times to get the values.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Array of Transform No Scale Structures. Returns Values at those times.

