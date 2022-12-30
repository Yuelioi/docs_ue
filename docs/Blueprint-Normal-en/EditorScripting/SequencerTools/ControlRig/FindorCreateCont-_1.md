# FindorCreateCont-_1

Find or create a Control Rig track of a specific class based upon the binding

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522339.png)

## Inputs

In: Exec.

World: World Object Reference. The world used to spawn into temporarily if binding is a spawnable.

Level Sequence: Level Sequence Object Reference. The LevelSequence to find or create.

Control Rig Class: Object Class Reference. The class of the Control Rig.

In Binding: Sequencer Binding Proxy Structure (by ref). The binding (actor or component binding) to find or create the Control Rig track.  

## Outputs

Out: Exec.

Return Value: Movie Scene Track Object Reference. returns Return the found or created track.

