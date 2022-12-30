# BaketoControlRig

Bake the current animation in the binding to a Control Rig track

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18521807.png)

## Inputs

In: Exec.

World: World Object Reference. The active world.

Level Sequence: Level Sequence Object Reference. The LevelSequence we are baking.

Control Rig Class: Object Class Reference. The class of the Control Rig.

Export Options: Anim Seq Export Option Object Reference. Export options for creating an animation sequence.

Reduce Keys: Boolean.

Tolerance: Float (single-precision). If reducing keys, tolerance about which keys will be removed, smaller tolerance, more keys usually..

Binding: Sequencer Binding Proxy Structure (by ref). The binding upon which to bake.  

## Outputs

Out: Exec.

Return Value: Boolean. returns True if successful, False otherwise.

