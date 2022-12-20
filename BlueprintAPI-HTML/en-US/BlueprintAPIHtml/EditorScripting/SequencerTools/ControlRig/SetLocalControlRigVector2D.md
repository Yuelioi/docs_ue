# SetLocalControlRigVector2D

Set ControlRig Control's Vector2D value at specific time

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18533950.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to set value on.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a Vector2D control.

Frame: Frame Number Structure. Time to set the value.

Value: Vector 2D Structure. to set.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.

Set Key: Boolean. If True set a key, if not just set the value.  

## Outputs

Out: Exec.

