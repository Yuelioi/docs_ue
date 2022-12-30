# ImportFBXToControlRig

  * * @InWorld 世界将被导入到

  * @InSequence 要导入的InSequence

  * @ActorWithControlRigTrack ActorWithControlRigTrack 我们要导入的带有控制装置轨道的演员名称。

  * @SelectedControlRigNames 所选控制装置名称的列表。如果ImportFBXControlRigSettings->bImportOntoSelectedControls为true，将使用它们。

  * @ImportFBXControlRigSettings 控制导入的设置。

  * @InImportFileName 要创建的fbx文件的路径





目标是Sequencer Tools功能库

## 图示

![]($-20221218-18534481.png)

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

返回值。布尔值。@InWorld 要导入的世界。@InSequence 要导入的InSequence。@ActorWithControlRigTrack 有控制装置轨道的演员 我们要导入的有控制装置轨道的演员的名字。@SelectedControlRigNames 所选控制设备名称的列表。如果ImportFBXControlRigSettings->bImportOntoSelectedControls为true，将使用它们。@ImportFBXControlRigSettings 用于控制导入的设置。@InImportFileName 要创建的fbx文件的路径。