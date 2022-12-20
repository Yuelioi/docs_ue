# RenameControlRig-

Rename the Control Rig Channels in Sequencer to the specified new control names, which should be present on the Control Rig

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530843.png)

## Inputs

In: Exec.

Target: Control Rig Sequencer Editor Library Object Reference.

In Sequence: Level Sequence Object Reference. Sequence to rename controls.

In Control Rig: Control Rig Object Reference. ControlRig to rename controls.

In Old Control Names: Array of Names. The name of the old Control Rig Control Channels to change. Will be replaced by the corresponding name in the InNewControlNames array.

In New Control Names: Array of Names. The name of the new Control Rig Channels.  

## Outputs

Out: Exec.

Return Value: Boolean. Return true if the function succeeds, false if it doesn't which can happen if the name arrays don't match in size or any of the new Control Names aren't valid.

