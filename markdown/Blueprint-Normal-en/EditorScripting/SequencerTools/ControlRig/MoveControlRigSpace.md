# MoveControlRigSpace

Move the Control Rig Space Key for the Control at the specified time to the new time. This will also move any Control Rig keys at this space switch boundary.

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530712.png)

## Inputs

In: Exec.

In Sequence: Level Sequence Object Reference. Sequence to set the space.

In Control Rig: Control Rig Object Reference. ControlRig with the Control.

In Control Name: Name. The name of the Control.

In Time: Frame Number Structure. Original time of the space key.

In New Time: Frame Number Structure. New time for the space key.

Time Unit: ESequenceTimeUnit Enum. Unit for the time params, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Boolean. Will return false if function fails, for example if there is no key at this time it will fail, or if the new time is invalid it could fail also.

