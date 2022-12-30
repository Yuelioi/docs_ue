# SnapControlRig

Peform a Snap operation to snap the children to the parent.

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18534082.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. Active Sequence to snap.

Start Frame: Frame Number Structure. Beginning of the snap.

End Frame: Frame Number Structure. End of the snap.

Children to Snap: Control Rig Snapper Selection Structure (by ref). The children objects that snap and get keys set onto. They need to live in an active Sequencer in the level editor.

Parent to Snap: Control Rig Snapper Selection Structure (by ref). The parent object to snap relative to. If animated, it needs to live in an active Sequencer in the level editor.

Snap Settings: Control Rig Snap Settings Object Reference. Settings to use.

Time Unit: ESequenceTimeUnit Enum. Unit for frame values, either in display rate or tick resolution.  

## Outputs

Out: Exec.

Return Value: Boolean.

