# ImportFBXToControlRig

  *   * @InWorld World to import to

  * @InSequence InSequence to import

  * @ActorWithControlRigTrack ActorWithControlRigTrack The name of the actor with the control rig track we are importing onto

  * @SelectedControlRigNames List of selected control rig names. Will use them if ImportFBXControlRigSettings->bImportOntoSelectedControls is true

  * @ImportFBXControlRigSettings Settings to control import.

  * @InImportFileName Path to fbx file to create





Target is Sequencer Tools Function Library

## 图示

![]($-20221218-18534481.png)

## Inputs

In: Exec.

World: World Object Reference.

In Sequence: Level Sequence Object Reference.

Actor with Control Rig Track: String.

Selected Control Rig Names: Array of Strings.

Import FBXControl Rig Settings: Movie Scene User Import FBXControl Rig Settings Object Reference.

Import Filename: String.  

## Outputs

Out: Exec.

Return Value: Boolean. @InWorld World to import to: @InSequence InSequence to import: @ActorWithControlRigTrack ActorWithControlRigTrack The name of the actor with the control rig track we are importing onto: @SelectedControlRigNames List of selected control rig names. Will use them if ImportFBXControlRigSettings->bImportOntoSelectedControls is true: @ImportFBXControlRigSettings Settings to control import.: @InImportFileName Path to fbx file to create.

