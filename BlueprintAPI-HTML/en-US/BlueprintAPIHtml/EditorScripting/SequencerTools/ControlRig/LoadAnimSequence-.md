# LoadAnimSequence-

Load anim sequence into this control rig section

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18530579.png)

## Inputs

In: Exec.

Movie Scene Section: Movie Scene Section Object Reference. The MovieSceneSectionto load into.

Anim Sequence: Anim Sequence Object Reference. The Sequence to load.

Skel Mesh Comp: Skeletal Mesh Component Object Reference.

In Start Frame: Frame Number Structure. Frame to insert the animation.

Time Unit: ESequenceTimeUnit Enum. Unit for all frame and time values, either in display rate or tick resolution.

Key Reduce: Boolean. If true do key reduction based upon Tolerance, if false don't.

Tolerance: Float (single-precision). If reducing keys, tolerance about which keys will be removed, smaller tolerance, more keys usually..  

## Outputs

Out: Exec.

Return Value: Boolean. returns True if successful, False otherwise.

