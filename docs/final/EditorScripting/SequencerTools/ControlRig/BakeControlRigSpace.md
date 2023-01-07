# BakeControlRigSpace

根据当前的设置，将指定的控制装置控制装置烘烤到指定的空间。

目标是 Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18521675.png)

## Inputs

在。执行。

在序列中。水平序列对象参考。要烘烤的序列。

在控制钻机中。控制钻机对象参考。ControlRig 来烘烤。

在控制名称中。名称数组。要烘烤的控件的名称。

在设置中。Rig Space Picker 烘烤设置结构。烘烤的设置，例如，烘烤多长时间，减少钥匙等。

时间单位。ESequenceTimeUnit 枚举。InSettings 参数中开始和结束时间的单位。

## Outputs

出：执行。

返回值。布尔值。

<hr>

Bake specified Control Rig Controls to a specified Space based upon the current settings

Target is Control Rig Sequencer Editor Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18521675.png)

## Inputs

In: Exec.

In Sequence: Level Sequence Object Reference. Sequence to bake.

In Control Rig: Control Rig Object Reference. ControlRig to bake.

In Control Names: Array of Names. The name of the Controls to bake.

In Settings: Rig Space Picker Bake Settings Structure. The settings for the bake, e.g, how long to bake, to key reduce etc..

Time Unit: ESequenceTimeUnit Enum. Unit for the start and end times in the InSettings parameter..

## Outputs

Out: Exec.

Return Value: Boolean.
