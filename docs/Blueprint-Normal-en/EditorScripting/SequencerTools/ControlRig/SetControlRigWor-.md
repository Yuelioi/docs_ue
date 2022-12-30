# SetControlRigWor-

Set ControlRig Control's World Transform at a specific time

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18531117.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to set transforms for. Must be loaded in Level Editor..

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control.

Frame: Frame Number Structure. Time to set the transform.

World Transform: Transform (by ref).

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.

Set Key: Boolean. Whether or not to set a key..  

## Outputs

Out: Exec.

