# RenameControlRig-

将序列器中的控制装置通道重命名为指定的新控制名称，这些名称应该出现在控制装置上。

目标是 Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18530843.png)

## Inputs

在。执行。

目标。Control Rig Sequencer Editor Library 对象参考。

在序列中。水平序列对象参考。序列重命名控件。

在控制钻机中。Control Rig Object Reference.ControlRig 来重命名控件。

在旧控制名。阵列的名称。要改变的旧控制 Rig 控制通道的名称。将被 InNewControlNames 数组中的相应名称所取代。

在新的控制名称中。名称的数组。新控制钻机通道的名称。

## Outputs

出：执行。

返回值。布尔值。如果函数成功，则返回 true；如果不成功，则返回 false，这可能发生在名称数组大小不匹配或任何新的控制名称无效的情况下。

<hr>

Rename the Control Rig Channels in Sequencer to the specified new control names, which should be present on the Control Rig

Target is Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18530843.png)

## Inputs

In: Exec.

Target: Control Rig Sequencer Editor Library Object Reference.

In Sequence: Level Sequence Object Reference. Sequence to rename controls.

In Control Rig: Control Rig Object Reference. ControlRig to rename controls.

In Old Control Names: Array of Names. The name of the old Control Rig Control Channels to change. Will be replaced by the corresponding name in the InNewControlNames array.

In New Control Names: Array of Names. The name of the new Control Rig Channels.

## Outputs

Out: Exec.

Return Value: Boolean. Return true if the function succeeds, false if it doesn't which can happen if the name arrays don't match in size or any of the new Control Names aren't valid.
