# ImportFBXToControlRigTrack

  * 



Target is Control Rig Sequencer Editor Library

## 图示

![]($-20221218-18534615.png)

## Inputs

In: Exec.

World: World Object Reference.

In Sequence: Level Sequence Object Reference. Sequence to import *.

In Track: Movie Scene Control Rig Parameter Track Object Reference. Track to import onto *.

In Section: Movie Scene Control Rig Parameter Section Object Reference. Section to import onto, may be null in which case we use the track's section to key *.

Selected Control Rig Names: Array of Strings. List of selected control rig names. Will use them if ImportFBXControlRigSettings->bImportOntoSelectedControls is true *.

Import FBXControl Rig Settings: Movie Scene User Import FBXControl Rig Settings Object Reference. Settings to control import. *.

Import Filename: String.  

## Outputs

Out: Exec.

Return Value: Boolean.

