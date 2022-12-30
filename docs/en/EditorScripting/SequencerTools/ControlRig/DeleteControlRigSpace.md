# DeleteControlRigSpace

Delete the Control Rig Space Key for the Control at the specified time. This will delete any attached Control Rig keys at this time and will perform any needed compensation to the new space.

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522072.png)

## Inputs

In: Exec.

In Sequence: Level Sequence Object Reference. Sequence to set the space.

In Control Rig: Control Rig Object Reference. ControlRig with the Control.

In Control Name: Name. The name of the Control.

In Time: Frame Number Structure. Time to delete the space..

Time Unit: ESequenceTimeUnit Enum. Unit for the InTime, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Boolean. Will return false if function fails, for example if there is no key at this time it will fail..

