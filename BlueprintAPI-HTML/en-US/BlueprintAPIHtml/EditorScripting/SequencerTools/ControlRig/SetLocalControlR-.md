# SetLocalControlR-

Set ControlRig Control's EulerTransform value at specific time

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18531391.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to set value on.

Control Rig: Control Rig Object Reference. The ControlRig.

Control Name: Name. Name of the Control, should be a EulerTransform control.

Frame: Frame Number Structure. Time to set the value.

Value: Euler Transform Structure. to set.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.

Set Key: Boolean. If True set a key, if not just set the value.  

## Outputs

Out: Exec.

