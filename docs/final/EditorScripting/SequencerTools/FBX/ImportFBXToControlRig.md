# ImportFBXToControlRig

- - @InWorld 世界将被导入到

- @InSequence 要导入的 InSequence

- @ActorWithControlRigTrack ActorWithControlRigTrack 我们要导入的带有控制装置轨道的演员名称。

- @SelectedControlRigNames 所选控制装置名称的列表。如果 ImportFBXControlRigSettings->bImportOntoSelectedControls 为 true，将使用它们。

- @ImportFBXControlRigSettings 控制导入的设置。

- @InImportFileName 要创建的 fbx 文件的路径

目标是 Sequencer Tools 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18534481.png)

## Inputs

在。执行。

世界。世界对象参考。

在序列中。水平序列对象参考。

演员与控制钻机轨道。字符串。

选定的控制钻机名称。字符串阵列。

导入 FBXControl 钻机设置。电影场景用户导入 FBXControl Rig 设置对象参考。

导入文件名：字符串。

## Outputs

出：执行。

返回值。布尔值。@InWorld 要导入的世界。@InSequence 要导入的 InSequence。@ActorWithControlRigTrack 有控制装置轨道的演员 我们要导入的有控制装置轨道的演员的名字。@SelectedControlRigNames 所选控制设备名称的列表。如果 ImportFBXControlRigSettings->bImportOntoSelectedControls 为 true，将使用它们。@ImportFBXControlRigSettings 用于控制导入的设置。@InImportFileName 要创建的 fbx 文件的路径。

<hr>

- - @InWorld World to import to

- @InSequence InSequence to import

- @ActorWithControlRigTrack ActorWithControlRigTrack The name of the actor with the control rig track we are importing onto

- @SelectedControlRigNames List of selected control rig names. Will use them if ImportFBXControlRigSettings->bImportOntoSelectedControls is true

- @ImportFBXControlRigSettings Settings to control import.

- @InImportFileName Path to fbx file to create

Target is Sequencer Tools Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18534481.png)

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
