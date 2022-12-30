# TweenControlRig

Peform a Tween operation on the current active sequencer time(must be visible).

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18534215.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. The LevelSequence that's loaded in the editor.

Control Rig: Control Rig Object Reference. The Control Rig to tween..

Tween Value: Float (single-precision). The tween value to use, range from -1(blend to previous) to 1(blend to next).  

## Outputs

Out: Exec.

Return Value: Boolean.

