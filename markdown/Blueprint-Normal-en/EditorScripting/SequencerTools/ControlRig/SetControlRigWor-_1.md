# SetControlRigWor-_1

Set ControlRig Control's World Transforms at a specific times.

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18531259.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to set transforms for. Must be loaded in Level Editor..

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control.

Frames: Array of Frame Number Structures. Times to set the transform.

World Transforms: Array of Transforms.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

