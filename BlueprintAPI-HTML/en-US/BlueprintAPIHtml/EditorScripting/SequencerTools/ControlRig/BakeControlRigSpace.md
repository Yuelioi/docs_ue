# BakeControlRigSpace

Bake specified Control Rig Controls to a specified Space based upon the current settings

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18521675.png)

## Inputs

In: Exec.

In Sequence: Level Sequence Object Reference. Sequence to bake.

In Control Rig: Control Rig Object Reference. ControlRig to bake.

In Control Names: Array of Names. The name of the Controls to bake.

In Settings: Rig Space Picker Bake Settings Structure. The settings for the bake, e.g, how long to bake, to key reduce etc..

Time Unit: ESequenceTimeUnit Enum. Unit for the start and end times in the InSettings parameter..  

## Outputs

Out: Exec.

Return Value: Boolean.

