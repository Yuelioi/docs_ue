# FindorCreateCont-

Find or create a Control Rig Component

Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18522204.png)

## Inputs

In: Exec.

World: World Object Reference. The world used to spawn into temporarily if binding is a spawnable.

Level Sequence: Level Sequence Object Reference. The LevelSequence to find or create.

In Binding: Sequencer Binding Proxy Structure (by ref). The binding (actor or component binding) to find or create the Control Rig tracks.  

## Outputs

Out: Exec.

Return Value: Array of Movie Scene Track Object References. returns Find array of component Control Rigs that were found or created.

