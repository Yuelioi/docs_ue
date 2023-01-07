# ImportFBXToControlRigTrack

目标是 Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18534615.png)

## Inputs

在。执行。

世界。世界对象参考。

在序列中。水平序列对象参考。要导入的序列 \*。

在轨道上。电影场景控制装备参数轨道对象参考。要导入到\*的轨道。

在章节中。电影场景控制钻机参数部分对象参考。要导入的部分，可能是空的，在这种情况下，我们使用轨道的部分来抠\*。

选定的控制钻机名称。字符串数组。选定的控制装置名称的列表。如果 ImportFBXControlRigSettings->bImportOntoSelectedControls 为 true，将使用它们 \*。

导入 FBXControl 钻机设置。电影场景用户导入 FBXControl Rig 设置对象参考。控制导入的设置。\*.

导入文件名：字符串。

## Outputs

出：执行。

返回值。布尔值。

<hr>

-

Target is Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18534615.png)

## Inputs

In: Exec.

World: World Object Reference.

In Sequence: Level Sequence Object Reference. Sequence to import \*.

In Track: Movie Scene Control Rig Parameter Track Object Reference. Track to import onto \*.

In Section: Movie Scene Control Rig Parameter Section Object Reference. Section to import onto, may be null in which case we use the track's section to key \*.

Selected Control Rig Names: Array of Strings. List of selected control rig names. Will use them if ImportFBXControlRigSettings->bImportOntoSelectedControls is true \*.

Import FBXControl Rig Settings: Movie Scene User Import FBXControl Rig Settings Object Reference. Settings to control import. \*.

Import Filename: String.

## Outputs

Out: Exec.

Return Value: Boolean.
